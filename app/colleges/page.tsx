import SearchBox from "./SearchBox";
import LocationFilter from "./LocationFilter";

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

      <div className="grid gap-4">
        {colleges.map((college: College) => (
          <div key={college.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{college.name}</h2>

            <p>{college.location}</p>
            <p>Fees ₹{college.fees}</p>
            <p>⭐ {college.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
