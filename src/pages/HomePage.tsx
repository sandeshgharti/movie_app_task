import Hero from "@/components/Hero";
import Rows from "@/components/Rows";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "@/utils/https";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const HomePage = () => {
  // Fetch Trending Movies
  const {
    data: trendingMovies,
    isLoading: trendingMoviesLoading,
    error: trendingMoviesError,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchTrendingMovies,
  });

  // Fetch Popular Movies
  const {
    data: popularMovies,
    isLoading: popularMoviesLoading,
    error: popularMoviesError,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  // Fetch Top Rated Movies
  const {
    data: topRatedMovies,
    isLoading: topRatedMoviesLoading,
    error: topRatedMoviesError,
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });
  return (
    <div className="min-h-screen bg-[#141414] pb-25">
      <Hero movie={trendingMovies?.[0] || null} />
      {trendingMoviesLoading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-10 w-10 text-white animate-spin" />
        </div>
      )}
      {trendingMoviesError && <p>Error loading movies</p>}
      {!trendingMoviesLoading && !trendingMoviesError && (
        <Rows title="Trending Now" movies={trendingMovies} />
      )}

      {popularMoviesLoading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-10 w-10 text-white animate-spin" />
        </div>
      )}
      {popularMoviesError && <p>Error loading popular movies</p>}
      {!popularMoviesLoading && !popularMoviesError && (
        <Rows title="Popular on XAV" movies={popularMovies} />
      )}

      {topRatedMoviesLoading && (
        <div className="flex justify-center py-20">
          <Loader2 className="h-10 w-10 text-white animate-spin" />
        </div>
      )}
      {topRatedMoviesError && <p>Error loading top rated movies</p>}
      {!topRatedMoviesLoading && !topRatedMoviesError && (
        <Rows title="Top Rated" movies={topRatedMovies} />
      )}
    </div>
  );
};

export default HomePage;
