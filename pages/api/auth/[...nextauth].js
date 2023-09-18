// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook"


export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID,
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRETS

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET_TOKEN
    }),
    // FacebookProvider({clientId: process.env.})
  ]
})


