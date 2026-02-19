"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useMergedSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParams = useCallback(
    (updates: Record<string, string | null | undefined>) => {
      const nextParams = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === undefined || value === "") {
          nextParams.delete(key);
        } else {
          nextParams.set(key, value);
        }
      });

      const currentQuery = searchParams.toString();
      const nextQuery = nextParams.toString();
      
      if (nextQuery === currentQuery) return;
      
      router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
        scroll: false,
      });
    },
    [searchParams, router, pathname]
  );

  return {
    searchParams,
    updateParams,
    getParam: (key: string) => searchParams.get(key),
    getAllParams: () => searchParams.toString(),
  };
}
