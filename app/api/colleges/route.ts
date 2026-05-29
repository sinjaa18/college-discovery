import { NextRequest,NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req:NextRequest){
  const search=req.nextUrl.searchParams.get('search')||''
  const location=req.nextUrl.searchParams.get('location')||''

  const colleges=await prisma.college.findMany({
    where:{
      AND:[
        {
          name:{
            contains:search,
            mode:'insensitive'
          }
        },
        location
        ?{
            location:{
              equals:location
            }
          }
        :{}
      ]
    },
    orderBy:{
      rating:'desc'
    }
  })

  return NextResponse.json(colleges)
}