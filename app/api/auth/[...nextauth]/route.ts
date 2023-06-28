import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connect } from '@lib/mongodb'
import { type IUser, User } from "@models/User";

const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connect().catch((err: any) => { throw new Error(err) })

                const user = await User.findOne({
                    email: credentials?.email
                }).select("+password")

                if (!user) {
                    throw new Error("Invalid credentials")
                }

                const isPasswordCorrect = await compare(credentials!.password, user.password)

                if (!isPasswordCorrect) {
                    throw new Error("Invalid credentials")
                }

                return user
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: async ({ session, token }) => {
            const user = token.user as IUser

            const updatedUser = await User.findOne({ id : (token.user as any).id});


            if (token.user = updatedUser) {
                session.user = user
            } else {
                session.user = updatedUser
            }
            return session
        }
    }
}

const handler = NextAuth(options)

export { handler as GET, handler as POST }