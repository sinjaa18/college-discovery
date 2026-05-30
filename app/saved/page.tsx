import Link from "next/link";
import SavedColleges from "./SavedColleges";

export default function SavedPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Saved Colleges</h1>

      <SavedColleges />

      <Link
        href="/colleges"
        className="inline-block mt-4 border px-4 py-2 rounded"
      >
        Back to Colleges
      </Link>
    </div>
  );
}
