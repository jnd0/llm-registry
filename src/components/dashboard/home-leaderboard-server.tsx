import { benchmarks, models } from "@/lib/registry-data";
import { parseLeaderboardQueryParams, queryLeaderboardModels } from "@/lib/leaderboard-query";
import { HomeLeaderboardLazy } from "@/components/dashboard/home-leaderboard-lazy";

interface HomeLeaderboardServerProps {
  params: {
    domain?: string;
    license?: string;
    q?: string;
    sort?: string;
    dir?: string;
    page?: string;
    pageSize?: string;
    source?: string;
    verification?: string;
  };
}

export function HomeLeaderboardServer({ params }: HomeLeaderboardServerProps) {
  const queryParams = parseLeaderboardQueryParams(params, benchmarks);
  const leaderboard = queryLeaderboardModels(models, benchmarks, queryParams);

  return (
    <HomeLeaderboardLazy
      data={leaderboard.rows}
      benchmarks={benchmarks}
      activeCategory={null}
      activeCategorySlug={null}
      totalRows={leaderboard.total}
      currentPage={leaderboard.page}
      totalPages={leaderboard.totalPages}
      pageSize={leaderboard.pageSize}
      sortBy={leaderboard.sortBy}
      sortDir={leaderboard.sortDir}
      searchQuery={leaderboard.query}
      license={leaderboard.license}
      domain={leaderboard.domain}
      sourcesFilter={leaderboard.sources}
      verificationFilter={leaderboard.verification}
    />
  );
}
