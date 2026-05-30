import SearchBox from "./SearchBox";
import LocationFilter from "./LocationFilter";
import Link from "next/link";
import CompareButton from "./CompareButton";
import SaveButton from "./SaveButton";

type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
  overview: string;
};

async function getColleges(search: string, location: string) {
  const res = await fetch(
    `http://localhost:3000/api/colleges?search=${search}&location=${location}`,
    { cache: "no-store" },
  );

  return res.json();
}

export default async function CollegesPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    location?: string;
    c1?: string;
    c2?: string;
  }>;
}) {
  const params = await searchParams;
  const search = params.search || "";
  const location = params.location || "";

  const colleges = await getColleges(search, location);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Colleges</h1>

      <SearchBox />
      <LocationFilter />

      {params.c1 && params.c2 && (
        <Link
          href={`/compare?c1=${params.c1}&c2=${params.c2}`}
          className="inline-block mb-4 px-4 py-2 border rounded"
        >
          View Comparison
        </Link>
      )}

      <div className="grid gap-4"></div>
      <div className="grid gap-4">
        {colleges.map((college: College) => (
          <div
            key={college.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{college.name}</h2>

            <p>{college.location}</p>
            <p>Fees ₹{college.fees}</p>
            <p>⭐ {college.rating}</p>
            <p className="mt-2 text-sm text-gray-600">{college.overview}</p>
            <SaveButton id={college.id} />
            <Link
              href={`/college/${college.id}`}
              className="inline-block mt-3 px-4 py-2 border rounded"
            >
              View Details
            </Link>
            <CompareButton id={college.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
