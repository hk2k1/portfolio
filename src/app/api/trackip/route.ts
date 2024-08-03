// app/api/trackip/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const ip = request.ip || "Unknown";

  // console.log("Visitor IP:", ip);

  return NextResponse.json({ ip });
}
