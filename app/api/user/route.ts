import { NextRequest, NextResponse } from "next/server";
import { IUser, getUserByCredentials } from "@/lib/userService";

 async function POST(req: NextRequest) {
    try {
        const userData:IUser= await req.json(); 
        const user: IUser = await getUserByCredentials(userData);
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }
        return NextResponse.json({ message: "Authentication successful", user });
    } catch (error) {
        return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
}

