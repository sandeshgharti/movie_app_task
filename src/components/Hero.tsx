import type { Movie } from "@/types";
import { Info } from "lucide-react";
import { Link } from "react-router-dom";

type HeroProps = {
  movie: Movie;
};

const Hero: React.FC<HeroProps> = ({ movie }) => {
  if (!movie) {
    return null;
  }
  return (
    <div className=" -mt-20 h-[90vh] relative overflow-hidden ">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 h-full w-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-start px-4">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            {movie.title || movie.name}
          </h1>
          <p className="mt-2 text-lg text-gray-200 line-clamp-3 md:line-clamp-none max-w-2xl drop-shadow-md">
            {movie.overview}
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link
              to={`/movie/${movie.id}`}
              className="flex items-center gap-2 bg-red-600 backdrop-blur-md text-white px-6 py-2.5 rounded hover:bg-red-700 transition-colors font-semibold">
              <Info className="h-5 w-5" /> More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
