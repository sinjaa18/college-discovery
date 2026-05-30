"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CompareButton({ id }: { id: number }) {
  const router = useRouter();
  const params = useSearchParams();

  const c1 = params.get("c1");
  const c2 = params.get("c2");

  function handleClick() {
    if (!c1) {
      router.push(`/colleges?c1=${id}`);
      return;
    }

    if (!c2 && c1 !== String(id)) {
      router.push(`/colleges?c1=${c1}&c2=${id}`);
      return;
    }

    router.push(`/compare?c1=${c1}&c2=${c2}`);
  }

  return (
    <button onClick={handleClick} className="border px-3 py-2 rounded ml-2">
      Compare
    </button>
  );
}
