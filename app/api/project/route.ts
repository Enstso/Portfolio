import { NextRequest, NextResponse } from "next/server";
import { IProject,getAllProject } from "@/lib/projectService";

async function GET(req:NextRequest){
    try{
        const projects: IProject[] = await getAllProject();
        if(projects.length==0){
            return NextResponse.json({message:"Not Found"},{status:404});
        }
        return NextResponse.json({message:"success",projects});
    }catch(error){
        return NextResponse.json({error:"An error occured"},{status:500});
    }
}

async function POST(req:NextRequest){
    try{
        const project:IProject = await req.json();
        if(project==null){
            return NextResponse.json({message:"Bad Request"},{status:401});
        }
    }catch(error){
        return NextResponse.json({error:"An error occured"},{status:500});
    }
}