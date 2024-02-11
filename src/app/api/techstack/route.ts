import { NextRequest, NextResponse } from "next/server";
import TechStack from "@/models/techstack";
import connectDB from "@/utils/db";
connectDB();
//getTechStack
export async function GET(request: NextRequest) {
  try {
    const user = await TechStack.findOne({ admin: "Saurabh" });
    if (user) {
      return new NextResponse(JSON.stringify({ user }), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify("user not found"), {
        status: 404,
      });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify("Error while finding"), {
      status: 500,
    });
  }
}
//newUser
export async function POST(request: NextRequest) {
  const { admin } = await request.json();
  try {
    const existingUser = await TechStack.findOne({ admin: "Saurabh" });
    if (existingUser) {
      return new NextResponse(JSON.stringify("user already exits"), {
        status: 500,
      });
    }
    const user = await TechStack.create({ admin, techstacks: [] });
    return new NextResponse(
      JSON.stringify({ message: `admin created with name ${user.admin}` }),
      {
        status: 201,
      }
    );
  } catch (error) {
    return new NextResponse(JSON.stringify("error while creating"), {
      status: 500,
    });
  }
}
//Update
export async function PUT(request: NextRequest) {
    try {
      const { techstack } = await request.json();
      const user = await TechStack.findOne({ admin: "Saurabh" });
      if (user) {
        user.techstacks.push(techstack);
        user.save();
        return new NextResponse(
          JSON.stringify({ message: "Updated Successfully" }),
          {
            status: 200,
          }
        );
      }
      return new NextResponse(JSON.stringify("Unauthorized"), { status: 404 });
    } catch (error) {
      return new NextResponse(JSON.stringify("error while updating"), {
        status: 500,
      });
    }
  }
//Delete TechStack
export async function DELETE(request:NextRequest) {
    try{
        const {techStackToRemove}=await request.json()
        const user=await TechStack.findOne({admin:"Saurabh"})
        if(user){
            const result = await TechStack.updateOne(
                { admin: "Saurabh" },
                { $pull: { techstacks: techStackToRemove } }
              );
              return new NextResponse(JSON.stringify({message:"Update Successfully"}),{
                status:200
            })
        }
        else{
            return new NextResponse(JSON.stringify({message:"Unauthorzied"}),{
                status:404
            })
        }
    } catch(err){
        return new NextResponse(JSON.stringify({error:"errow while deleting"}),{
            status:500
        })
    }
    
}
