import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
connectDB();
export async function GET (request: NextRequest){
    return new NextResponse(JSON.stringify({ message: "Its an API" }), {
    status: 200,
  });
} 
export async function POST (request: NextRequest){
    const {username ,password}= await request.json()
    return new NextResponse(JSON.stringify(`Got the data ${username} and ${password}` ), {
    status: 201,
  });
} 