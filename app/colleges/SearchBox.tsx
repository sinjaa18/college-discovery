"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) params.set("search", value);
    else params.delete("search");

    router.push(`/colleges?${params.toString()}`);
  }

  return (
    <input
      type="text"
      placeholder="Search colleges..."
      defaultValue={searchParams.get("search") || ""}
      onChange={(e) => handleSearch(e.target.value)}
      className="border p-2 rounded w-full mb-6"
    />
  );
}
