import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(5)
})

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    // if the req is valid, make sure we don't have another user w/ this email
   const user = await prisma.user.findUnique({
    where: { email: body.email}
   });

   if(user) 
    return NextResponse.json(
        {error: 'User already exists.'}, 
        {status: 400}
    );

    // if no user exists, create user
    // to do that first we need to hash their pswd using bcrypt
    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    });

    return NextResponse.json({ email: newUser.email});
    // obvisouly, don't return the hashedpaswed for client for security reasons;

}