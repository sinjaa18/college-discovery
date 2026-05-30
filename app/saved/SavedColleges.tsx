"use client";

import { useEffect, useState } from "react";

type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function SavedColleges() {
  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const ids: number[] = JSON.parse(
      localStorage.getItem("saved-colleges") || "[]",
    );

    const res = await fetch("/api/colleges");
    const data: College[] = await res.json();
    console.log(await res.text());

    setColleges(data.filter((x) => ids.includes(x.id)));
  }

  if (colleges.length === 0) {
    return <p>No saved colleges</p>;
  }

  return (
    <div className="grid gap-4">
      {colleges.map((college) => (
        <div key={college.id} className="border rounded p-4">
          <h2 className="font-semibold">{college.name}</h2>

          <p>{college.location}</p>
          <p>₹{college.fees}</p>
          <p>⭐ {college.rating}</p>
        </div>
      ))}
    </div>
  );
}
