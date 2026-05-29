"use client";

import { useRouter, useSearchParams } from "next/navigation";

const locations = [
  "",
  "Delhi",
  "Mumbai",
  "Chennai",
  "Hyderabad",
  "Kanpur",
  "Pilani",
];

export default function LocationFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) params.set("location", value);
    else params.delete("location");

    router.push(`/colleges?${params.toString()}`);
  }

  return (
    <select
      defaultValue={searchParams.get("location") || ""}
      onChange={(e) => handleChange(e.target.value)}
      className="border p-2 rounded mb-4"
    >
      <option value="">All Locations</option>

      {locations.slice(1).map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
}
