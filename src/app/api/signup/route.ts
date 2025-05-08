import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user";

export async function POST(req: NextRequest){
    try{
        await dbConnect();

        const body = await req.json();
        const user = await UserModel.create(body);

        return NextResponse.json({success: true, data: user}, {status: 201});

    } catch (error){

        console.error('Signup Error', error);
        return NextResponse.json({success: false, error: 'Server error'}, {status: 500});
    }
}