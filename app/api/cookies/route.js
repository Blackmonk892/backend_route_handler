import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  const cookieStore = await cookies();
  //cookieStore.set("score", "100");

  cookieStore.delete("score");

  return NextResponse.json({
    message: "Cookie deleted!",
  });
}
