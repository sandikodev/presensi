import EmailProvider from "next-auth/providers/email";
import { AuthOptions } from "next-auth";

export const options = {
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "database",
        maxAge: 30 * 24 * 60 * 60
    },
    pages: {
        signIn: "/auth/signin",
        verifyRequest: "/auth/verify-request"
    },
    callbacks: {
        async session({ session, user }) {
            session.user = user;
            return session;
        }
    },
    events: {
        async signIn(message) {
            console.log("Signed in!", { message });
        },
        async signOut(message) {
            console.log("Signed out!", { message });
        },
        async createUser(message) {
            console.log("User created!", { message });
        }
    }
} satisfies AuthOptions;