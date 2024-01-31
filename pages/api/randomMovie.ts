import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb'


export default async function handler (req : NextApiRequest, res: NextApiResponse){

    try{
        if(req.method !== 'GET')
        {
            return res.status(405).end();
        }

        await serverAuth(req, res);

        const movieCount = await prismadb.movie.count();
        const randomIndex = Math.floor(Math.random()*movieCount);

        const RandomMovies = await prismadb.movie.findMany({
            take:1,
            skip:randomIndex
        });

        return res.status(200).json(RandomMovies[0]);
       
    
    }
    catch(error){
        console.log(error);
        return res.status(500).end();
    }


}