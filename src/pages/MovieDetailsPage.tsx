import Rows from "@/components/Rows";
import { toggleFavorite } from "@/store/slices";
import type { Movie } from "@/types";
import { fetchMovieById } from "@/services/https";
import { useQuery } from "@tanstack/react-query";
import {
  Calendar,
  Clock,
  Heart,
  Loader2,
  PlayCircle,
  Star,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: movie,
    isLoading: moviesDetailsLoading,
    error: moviesDetailsError,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(id as string),
  });

  const dispatch = useDispatch();

  const toggleFavorites = () => {
    dispatch(toggleFavorite(movie));
  };

  const favMovies = useSelector(
    (state: { myFavorites: { favMovies: Movie[] } }) =>
      state.myFavorites.favMovies
  );

  const isFav = favMovies.find(
    (favMovie: { id: number }) => favMovie.id === Number(id)
  );

  const trailer = movie?.videos.results.find(
    (vid: { type: string; site: string }) =>
      vid.type === "Trailer" && vid.site === "YouTube"
  );
  return (
    <div className="min-h-screen bg-[#141414] -mt-20">
      {moviesDetailsLoading && (
        <div className="flex items-center justify-center py-40">
          <Loader2 className="h-10 w-10 text-white animate-spin" />
        </div>
      )}
      {moviesDetailsError && (
        <div className="flex items-center justify-center py-40">
          <p className="text-white">Error loading movie details.</p>
        </div>
      )}
      {movie && (
        <div>
          <div className="relative min-h-[60vh] md:min-h-[70vh] w-full">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#141414]/70 backdrop-blur-[2px]" />
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-to-t from-[#141414] via-[#141414]/20 to-transparent" />
            </div>

            <div className="relative flex items-center justify-center p-4 md:p-8">
              <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 mt-20">
                {/* poster */}
                <div className="shrink-0 w-48 md:w-80 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* info */}
                <div className="flex-1 space-y-6 text-white">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                      {movie.title}
                    </h1>
                    <p className="text-xl text-gray-400 italic">
                      {movie.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-300">
                    <span className="flex items-center gap-1 text-yellow-400 font-bold">
                      <Star className="h-4 w-4 fill-current" />{" "}
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {movie.runtime} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />{" "}
                      {movie.release_date?.split("-")[0]}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre: { id: number; name: string }) => (
                      <span
                        key={genre.id}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors">
                        {genre.name}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed max-w-3xl">
                      {movie.overview}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-4">
                    {trailer && (
                      <Link
                        to={`https://www.youtube.com/watch?v=${trailer.key}`}
                        target="_blank"
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all">
                        <PlayCircle className="h-5 w-5" /> Watch Trailer
                      </Link>
                    )}
                    <button
                      onClick={toggleFavorites}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all border ${
                        isFav
                          ? "bg-white text-black border-white hover:bg-gray-200"
                          : "bg-transparent text-white border-gray-500 hover:border-white"
                      }`}>
                      <Heart
                        className={`h-5 w-5 ${isFav ? "fill-black" : ""}`}
                      />
                      {isFav ? "Remove from Fav" : "Add to Fav"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 relative z-50">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-red-600">Top Casts</h2>
              <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {movie.credits.cast
                  .slice(0, 10)
                  .map(
                    (actor: {
                      id: number;
                      profile_path: string | null;
                      name: string;
                      character: string;
                    }) => (
                      <div
                        key={actor.id}
                        className="min-w-[120px] w-[120px] space-y-2">
                        <div className="w-full aspect-2/3 rounded-lg overflow-hidden bg-gray-800">
                          {actor.profile_path ? (
                            <img
                              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                              alt={actor.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                              <span>No Image</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm truncate">
                            {actor.name}
                          </p>
                          <p className="text-gray-400 text-xs truncate">
                            {actor.character}
                          </p>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
            {movie.similar.results.length > 0 && (
              <Rows movies={movie.similar.results} title="Similar Movies" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
