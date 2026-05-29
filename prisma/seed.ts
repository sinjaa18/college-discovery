import { PrismaClient } from '@prisma/client'

const prisma=new PrismaClient()

async function main(){
  await prisma.college.deleteMany()
  await prisma.college.createMany({
    data:[
      {name:"IIT Delhi",location:"Delhi",fees:240000,rating:4.9,overview:"Top engineering institute"},
      {name:"IIT Bombay",location:"Mumbai",fees:230000,rating:4.9,overview:"Premier IIT"},
      {name:"IIT Madras",location:"Chennai",fees:220000,rating:4.8,overview:"Leading IIT"},
      {name:"IIT Kanpur",location:"Kanpur",fees:210000,rating:4.7,overview:"Strong placements"},
      {name:"IIT Kharagpur",location:"Kharagpur",fees:200000,rating:4.7,overview:"Oldest IIT"},
      {name:"NIT Trichy",location:"Trichy",fees:170000,rating:4.6,overview:"Top NIT"},
      {name:"NIT Surathkal",location:"Mangalore",fees:165000,rating:4.5,overview:"Excellent campus"},
      {name:"NIT Warangal",location:"Warangal",fees:160000,rating:4.5,overview:"Popular NIT"},
      {name:"BITS Pilani",location:"Pilani",fees:500000,rating:4.8,overview:"Private institute"},
      {name:"IIIT Hyderabad",location:"Hyderabad",fees:350000,rating:4.8,overview:"Strong CS"},
      {name:"DTU",location:"Delhi",fees:190000,rating:4.4,overview:"State university"},
      {name:"NSUT",location:"Delhi",fees:185000,rating:4.4,overview:"Good placements"},
      {name:"VIT Vellore",location:"Vellore",fees:250000,rating:4.2,overview:"Large private college"},
      {name:"SRM",location:"Chennai",fees:280000,rating:4.1,overview:"Private university"},
      {name:"MIT Manipal",location:"Manipal",fees:320000,rating:4.3,overview:"Popular private college"}
    ]
  })
}

main()
.then(()=>prisma.$disconnect())
.catch(async(e)=>{
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})