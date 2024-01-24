import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

// function to GET a single user
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch data from a db
  // If not found, return 404 error
  // Else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json([{ id: 1, name: "Mosh" }]);
}

// function to update a single user
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // read the req body and validate the req body
  const body = await request.json();
  // If invalid, return 400 (bad request)
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user with the give id
  // If doesn't exist (in the db), return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Update the user (in db)
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

// function to delete a user
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // Fetch user from db
  // If not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete the user
  // Return 200
  return NextResponse.json({});
  //   above, you can return the deleted obj or an empty obj;
}
