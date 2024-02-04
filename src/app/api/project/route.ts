import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/project";
connectDB();
//getProject
export async function GET(request: NextRequest) {
    try {
      const user = await Project.findOne({ admin: "Saurabh" });
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
      const existingUser = await Project.findOne({ admin: "Saurabh" });
      if (existingUser) {
        return new NextResponse(JSON.stringify("user already exits"), {
          status: 500,
        });
      }
      const user = await Project.create({ admin, projects: [] });
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
      const { project } = await request.json();
      const user = await Project.findOne({ admin: "Saurabh" });
      if (user) {
        user.projects.push(project);
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
        const {projectToRemove}=await request.json()
        const user=await Project.findOne({admin:"Saurabh"})
        if(user){
            const result = await Project.updateOne(
                { admin: "Saurabh" },
                { $pull: { projects: projectToRemove } }
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