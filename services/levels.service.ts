"use server";
import { levels, titles } from "@constants/levels";
import { connect } from "@lib/mongodb";
import { User } from "@models/User";

export async function addXP(id: string, amount: number) {
    try {
        await connect();
        const user = await User.findOne({ id });

        user.xp = user.xp + amount;

        while (user.xp >= Number(levels[user.level + 1].xpRequired)) {
            user.xp -= Number(levels[user.level + 1].xpRequired);
            user.level += 1;
            if (titles[user.level]) {
                user.title = titles[user.level].title;
            }
        }

        await user.save();
        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.error("Error adding XP:", error);
    }
}

export async function getAllXP(id: string) {
    try {
        await connect();
        const user = await User.findOne({ id });

        let totalXp = 0;

        for (let level = 1; level <= user.level; level++) {
            const currentLevel = levels[level];
            if (currentLevel) {
                const xpRequired = parseInt(currentLevel.xpRequired);
                totalXp += xpRequired;
            }
        }

        return (totalXp += user.xp);
    } catch (error) {
        console.error("Error getting XP:", error);
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
