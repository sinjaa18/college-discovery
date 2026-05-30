import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!college) notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{college.name}</h1>

      <p className="mb-2">📍 {college.location}</p>
      <p className="mb-2">⭐ {college.rating}</p>
      <p className="mb-2">Fees ₹{college.fees}</p>

      <div className="border rounded-lg p-4 mt-6">
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>{college.overview}</p>
      </div>

      <div className="border rounded-lg p-4 mt-6">
        <h2 className="text-2xl font-semibold mb-2">Courses</h2>
        <p>{college.courses}</p>
      </div>

      <div className="border rounded-lg p-4 mt-6">
        <h2 className="text-2xl font-semibold mb-2">Placements</h2>
        <p>{college.placements}</p>
      </div>

      <div className="border rounded-lg p-4 mt-6">
        <h2 className="text-2xl font-semibold mb-2">Closing Rank</h2>
        <p>{college.closingRank}</p>
      </div>
    </div>
  );
}
