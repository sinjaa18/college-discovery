import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { rank } = await req.json();

  const colleges = await prisma.college.findMany({
    where: {
      closingRank: {
        gte: rank,
      },
    },
    orderBy: {
      closingRank: "asc",
    },
    take: 5,
  });

  return NextResponse.json(colleges);
}
