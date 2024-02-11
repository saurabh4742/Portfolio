import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Admin from '@/models/admin';
connectDB();
export async function GET (request: NextRequest){
    return new NextResponse(JSON.stringify({ message: "Its an API" }), {
    status: 200,
  });
} 
export async function POST (request: NextRequest){
  try {
    const {username ,password}= await request.json()
    const user=await Admin.findOne({username})
    if(user){
      if (user.password==password) {

        return new NextResponse(JSON.stringify({message:"Welcome Saurabh"}),{
          status:200
        })
      } else {
        return new NextResponse(JSON.stringify({message:"Wrong Password"}),{
          status:401
        })
      }
      
    }
    else{
      return new NextResponse(JSON.stringify({message:"Unauthorized"}), {
        status: 404,
      })
    }
    ;
} catch (error) {
  return new NextResponse(JSON.stringify({error:"Something went wrong"}), {
    status: 500,
  })
}
    
} 