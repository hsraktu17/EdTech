import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { userSchema } from "@/validation/userSchema";

interface RequestBody{
    lastname: any;
    firstname: any;
    email : string,
    password : string,
    name : string
}

export async function POST(req : NextRequest){
    const body : RequestBody = await req.json()
    const validation = userSchema.safeParse(body)

    if(!validation.success){
        return NextResponse.json({
            message : "Input problem"
        })
    }else{
        const hashedPassword = await bcrypt.hash(body.password, 10);
        await prisma.user.create({
            data:{
            Email : body.email,
            Password : hashedPassword,
            Firstname : body.firstname,
            Lastname : body.lastname
            }
        })
    }
    return NextResponse.json({
        name : body.firstname,
        email : body.email,
    })
}