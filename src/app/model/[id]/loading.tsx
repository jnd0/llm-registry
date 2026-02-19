import { Skeleton } from "@/components/ui/skeleton";

export default function ModelLoading() {
  return (
    <div className="space-y-4 pb-12">
      <nav className="hidden sm:flex items-center gap-1">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-3 w-3 mx-1" />
        <Skeleton className="h-4 w-32" />
      </nav>

      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-16 sm:hidden" />
        <Skeleton className="h-8 w-20" />
      </div>

      <section className="rounded-2xl border border-border bg-card/50 px-5 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-20 rounded-full" />
              <Skeleton className="h-5 w-24 rounded-full" />
            </div>
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-4 w-48" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-28 rounded-full" />
              <Skeleton className="h-9 w-20 rounded-full" />
              <Skeleton className="h-9 w-24 rounded-full" />
            </div>
          </div>
          <Skeleton className="h-24 w-48 rounded-2xl" />
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl p-5 border border-border/40">
                <Skeleton className="h-4 w-20 mb-3" />
                <Skeleton className="h-12 w-16 mb-2" />
                <Skeleton className="h-3 w-24" />
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <Skeleton className="h-6 w-40" />
            <div className="grid gap-3 sm:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="rounded-2xl border border-border/50 p-5">
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-3 w-24" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Skeleton className="h-6 w-48" />
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="rounded-lg p-5 border border-border/40">
                  <Skeleton className="h-4 w-24 mb-4" />
                  <Skeleton className="h-10 w-12 mb-4" />
                  <Skeleton className="h-2 w-full mb-4" />
                  <Skeleton className="h-3 w-20" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-3">
          <div className="surface-card rounded-2xl p-5">
            <Skeleton className="h-8 w-24 mb-4" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i}>
                  <Skeleton className="h-3 w-16 mb-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
