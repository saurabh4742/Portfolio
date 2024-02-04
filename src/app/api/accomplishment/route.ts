import { NextRequest, NextResponse } from "next/server";
import Accomplishment from "@/models/accomplishment";
import connectDB from "@/utils/db";
connectDB();
//getAccomplishment
export async function GET(request: NextRequest) {
  try {
    const user = await Accomplishment.findOne({ admin: "Saurabh" });
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
    const existingUser = await Accomplishment.findOne({ admin: "Saurabh" });
    if (existingUser) {
      return new NextResponse(JSON.stringify("user already exits"), {
        status: 500,
      });
    }
    const user = await Accomplishment.create({ admin, accomplishments: [] });
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
    const { accomplishment } = await request.json();
    const user = await Accomplishment.findOne({ admin: "Saurabh" });
    if (user) {
      user.accomplishments.push(accomplishment);
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
//Delete Accoplishment
export async function DELETE(request:NextRequest) {
    try{
        const {accomplishmentToRemove}=await request.json()
        const user=await Accomplishment.findOne({admin:"Saurabh"})
        if(user){
            const result = await Accomplishment.updateOne(
                { admin: "Saurabh" },
                { $pull: { accomplishments: accomplishmentToRemove } }
              );
              return new NextResponse(JSON.stringify({message:"Update Successfully"}),{
                status:200
            })
        }
        else{
            return new NextResponse(JSON.stringify("Unauthorzied"),{
                status:404
            })
        }
    } catch(err){
        return new NextResponse(JSON.stringify("errow while deleting"),{
            status:500
        })
    }
    
}
