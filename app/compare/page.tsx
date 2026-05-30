import { prisma } from "@/lib/prisma";

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{
    c1?: string;
    c2?: string;
  }>;
}) {
  const params = await searchParams;

  const c1 = params.c1
    ? await prisma.college.findUnique({
        where: { id: Number(params.c1) },
      })
    : null;

  const c2 = params.c2
    ? await prisma.college.findUnique({
        where: { id: Number(params.c2) },
      })
    : null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Compare Colleges</h1>

      {c1 && c2 && (
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              <td className="border p-3 font-semibold">Name</td>
              <td className="border p-3">{c1.name}</td>
              <td className="border p-3">{c2.name}</td>
            </tr>

            <tr>
              <td className="border p-3 font-semibold">Location</td>
              <td className="border p-3">{c1.location}</td>
              <td className="border p-3">{c2.location}</td>
            </tr>

            <tr>
              <td className="border p-3 font-semibold">Fees</td>
              <td className="border p-3">₹{c1.fees}</td>
              <td className="border p-3">₹{c2.fees}</td>
            </tr>

            <tr>
              <td className="border p-3 font-semibold">Rating</td>
              <td className="border p-3">{c1.rating}</td>
              <td className="border p-3">{c2.rating}</td>
            </tr>

            <tr>
              <td className="border p-3 font-semibold">Placements</td>
              <td className="border p-3">{c1.placements}</td>
              <td className="border p-3">{c2.placements}</td>
            </tr>

            <tr>
              <td className="border p-3 font-semibold">Closing Rank</td>
              <td className="border p-3">{c1.closingRank}</td>
              <td className="border p-3">{c2.closingRank}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
