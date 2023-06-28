'use server'
import { levels } from "@constants/levels";
import { connect } from "@lib/mongodb";
import { User } from "@models/User";


export async function addXP( id : string , amount : number ) {
  try {
    await connect();
    const user = await User.findOne({ id });

    user.xp = user.xp + amount
    console.log(user.xp, Number(levels[user.level + 1].xpRequired))

    while (user.xp >= Number(levels[user.level + 1].xpRequired)) {
      user.xp -= Number(levels[user.level + 1].xpRequired);
      user.level += 1;
      console.log("lvl up!")
    }

    await user.save();
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    console.error("Error adding XP:", error);
  }
}
