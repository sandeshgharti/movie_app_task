import Hero from "@/components/Hero";
import Rows from "@/components/Rows";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "@/utils/https";
import { useQuery } from "@tanstack/react-query";

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
      {trendingMoviesLoading && <p>Loading...</p>}
      {trendingMoviesError && <p>Error loading movies</p>}
      {!trendingMoviesLoading && !trendingMoviesError && (
        <Rows title="Trending Now" movies={trendingMovies} />
      )}

      {popularMoviesLoading && <p>Loading...</p>}
      {popularMoviesError && <p>Error loading popular movies</p>}
      {!popularMoviesLoading && !popularMoviesError && (
        <Rows title="Popular on XAV" movies={popularMovies} />
      )}

      {topRatedMoviesLoading && <p>Loading...</p>}
      {topRatedMoviesError && <p>Error loading top rated movies</p>}
      {!topRatedMoviesLoading && !topRatedMoviesError && (
        <Rows title="Top Rated" movies={topRatedMovies} />
      )}
    </div>
  );
};

export default HomePage;
