import { NextRequest, NextResponse } from "next/server";
import Profile from "@/models/profile";
import connectDB from "@/utils/db";
connectDB()
//getUser
export async function GET(request: NextRequest) {
  try{
  const user = await Profile.findOne({admin:"Saurabh"});
  if (user) {
    return new NextResponse(JSON.stringify({ message: "User exist" ,user}), {
      status: 200,
    });
  } else {
    return new NextResponse(
      JSON.stringify({ message: "Profile doesnt exist" }),
      {
        status: 200,
      }
    );
  }
}
catch(err){
  return new NextResponse(JSON.stringify("error while getting profile data"), {
      status: 500,
    })
}
}
//newUser
export async function POST(request: NextRequest) {
  const { admin, name, college, home, phone, email } = await request.json();
  const existingUser = await Profile.findOne({ admin });
  if (existingUser) {
    return new NextResponse(JSON.stringify("user already exist"),{
      status:200
    });
  }
  try {
    const newProfile = await Profile.create({
      admin,
      name,
      college,
      phone,
      home,
      email,
    });
    return new NextResponse(JSON.stringify({message:`user created with admin value ${admin}`}),{
      status:201
    })
  }
  catch(err){
    return new NextResponse(JSON.stringify(`error while creating`),{
      status:500
    })
  }
  

}
//updateUser
export async function PUT(request: NextRequest) {
  const { name, college, home, phone, email } = await request.json();
  const existingUser = await Profile.findOne();
  if (existingUser) {
    try {
      existingUser.name=name;
      existingUser.college=college;
      existingUser.home=home;
      existingUser.phone=phone;
      existingUser.email=email;
      await existingUser.save();
      return new NextResponse(JSON.stringify("Update Succesfully"),{
        status:200
      });
    } catch (error) {
      return new NextResponse(JSON.stringify(`error while updating`),{
        status:500
      })
    }
    
  }
  return new NextResponse(JSON.stringify("Unauthorized Access"),{
    status:404
  })
}
