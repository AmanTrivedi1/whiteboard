import { auth , currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

import { api } from "@/convex/_generated/api"; 

const convex = new ConvexHttpClient (process.env.NEXT_PUBLIC_CONVEX_URL!)

const liveblocks = new Liveblocks({
    secret: "sk_dev_ZSTnv60jC8oko53eCe84n1o4K8NfsaPve1u4iKo0eM7Tqz0d-Arhw0-tonVVUGkZ",
  });
  
 
export async function POST(request:Request) {
    const authorization = await auth();
    const user = await  currentUser();

    console.log("AuthInfo" , {
        authorization, 
        user
    })

    if(!authorization || !user) {
        return new Response ("Unauthorized" , {status:403});
    }

    const {room} = await request.json();
    const board = await convex.query(api.board.get , {id : room});


    if(board?.orgId !==  authorization.orgId){
        return new Response("Unauthorized" , {status:403})
    }
    
    const userInfo =  {
        name:user.firstName!,
        picture:user.imageUrl!
    };

    
    const session = liveblocks.prepareSession(user.id , {
        userInfo
    })
    if(room) {
        session.allow(room , session.FULL_ACCESS)
    }

    
    const {status , body } = await session.authorize();
    console.log({status , body}, "Allowed")
    return new Response(body , {status})
}