import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from '@/libs/prismadb'
import {compare} from 'bcrypt'
import { signIn } from "next-auth/react";
import { debug } from "console";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'


export const authOptions : AuthOptions = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID || '',
            clientSecret: process.env.GITHUB_SECRET || '',
          }),
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
          }),

        Credentials({
            id:'credentials',
            name:'Credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'text'
                },
                password:{
                    label:'Password',
                    type:'password'
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    throw new Error('Email or Password required')
                }

                const user = await prismadb.user.findUnique({
                    where : {
                        email:credentials.email
                    }
                });

                if(!user || !user.hashedPassword){
                    throw new Error('Email does not exist')
                }

                const isCorrectPassword = await compare(credentials.password, user.hashedPassword);

                if(!isCorrectPassword){
                    throw new Error('Incorrect Password')
                }

                return  user;




            }


        })


    ],
    pages:{
        signIn:'/auth'
    },
    debug :process.env.NODE_ENV==='development',
    adapter:PrismaAdapter(prismadb),
    session :{ strategy : 'jwt'},
    jwt:{
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret:process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);