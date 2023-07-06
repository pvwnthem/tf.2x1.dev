/** @format */

'use server'
import { levels, titles } from '@constants/levels'
import { connect } from '@lib/mongodb'
import { User } from '@models/User'

export async function addXP(id: string, amount: number) {
    try {
        await connect()
        const user = await User.findOne({ id })

        user.xp = user.xp + amount

        while (user.xp >= Number(levels[user.level + 1].xpRequired)) {
            user.level += 1
            if (titles[user.level]) {
                user.title = titles[user.level].title
            }

            if (user.level >= 150) {
                // Handle overflow XP here
                const overflowXP =
                    user.xp - Number(levels[user.level].xpRequired)
                // Reset user XP to the minimum XP required for the current level
                user.xp = Number(levels[user.level].xpRequired)
                // Do something with the overflow XP, e.g., distribute it as bonus rewards
                //distributeOverflowXP(overflowXP);
                break // Exit the loop since the user has reached the max level
            }
        }

        await user.save()
        return JSON.parse(JSON.stringify(user))
    } catch (error: any) {
        throw new Error('Error adding XP:', error)
    }
}

/*
const { update } = props.session


    function addTest () {
        addXP(id, 100).then((user) => {
            update({
                ...props.session,
                data: {
                    ...props.session.data,
                    user
                }
            })
            console.log(user, level, xp, id)
        })
    }
*/
