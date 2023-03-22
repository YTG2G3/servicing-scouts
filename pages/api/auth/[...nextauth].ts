import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                return { id: "1", name: "J Smith", email: "jsmith@example.com" };
            }
        })
    ]
});