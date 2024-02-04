import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb'
import {without} from 'lodash'


export default async function handler (req : NextApiRequest, res: NextApiResponse){


    try{
        if(req.method === 'POST'){

            const {currentUser} = await serverAuth(req, res);


            const {movieId} = req.body;

            const exitingMovie = await prismadb.movie.findUnique({
                where : {
                    id:movieId,
                }
            });

            if(!exitingMovie){
                throw new Error('Invalid Id')
            }

            const user = await prismadb.user.update({
                where: {
                    email:currentUser.email ||'',
                },
                data : {
                    favoriteIds:{
                        push:movieId
                    }
                }
            });

            return res.status(200).json(user);

        }

        if(req.method === "DELETE"){

            const {currentUser} = await serverAuth(req, res);


            const {movieId} = req.body;

            const exitingMovie = await prismadb.movie.findUnique({
                where : {
                    id:movieId,
                }
            });

            if(!exitingMovie){
                throw new Error('Invalid Id')
            }

            const updateFavoriIds = without(currentUser.favoriteIds, movieId);

            const updateUser = await prismadb.user.update({
                where : {
                    email: currentUser.email || '',
                },
                data :{
                    favoriteIds : updateFavoriIds
                }


            });

            return res.status(200).json(updateUser);

        }

        return res.status(405).end();





    }
    catch(error){
        console.log(error);
        return res.status(500).end();
    }

}