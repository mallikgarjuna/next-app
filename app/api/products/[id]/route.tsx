import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "Eggs", price: "6" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 404 });

  if (params.id > 11)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({ id: 11, name: body.name, price: body.price });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  //   const body = await request.json();

  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  return NextResponse.json({});
}
