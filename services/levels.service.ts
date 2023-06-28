import { levels } from "@constants/levels";
import { connect } from "@lib/mongodb";
import { User } from "@models/User";
import mongoose from "mongoose";


export async function addXP( id : string , amount : number ) {
  try {
    await connect();
    const user = await User.findOneAndUpdate({ id }, { $inc: { xp: amount } });

    while (user.xp >= Number(levels[user.level].xpRequired)) {
      user.xp -= Number(levels[user.level].xpRequired);
      user.level += 1;
    }

    await user.save();

    return user
  } catch (error) {
    console.error("Error adding XP:", error);
  }
}


// in client, update the session using returned data like this
/*
    import { useSession } from "next-auth/react"

export default function Page() {
  const { data: session, status, update } = useSession()

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {session.user.name}</p>
        
        <button onClick={() => update({ name: "John Doe" })}>
          Edit name
        </button>
        {
        <button onClick={() => update()}>
          Edit name
        </button>
      </>
    )
  }

  return <a href="/api/auth/signin">Sign in</a>
*/