import { Film, Star } from "lucide-react";

type CardProps = {
  movie: {
    id: number;
    title: string;
    name?: string;
    poster_path: string | null;
    backdrop_path: string | null;
    overview: string;
    vote_average: number;
    release_date: string;
    genre_ids?: number[];
  };
};

const Card = ({ movie }: CardProps) => {
  if (!movie) {
    return null;
  }
  return (
    <div className="group relative block w-full h-64 aspect-2/3 bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
        <Film className="h-12 w-12 text-gray-600 mb-2" />
        <span className="text-gray-500 text-sm">{movie.title}</span>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-sm line-clamp-2 leading-tight mb-1">
          {movie.title || movie.name}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
          <span className="flex items-center text-yellow-400">
            <Star className="h-3 w-3 fill-current mr-1" />
            {movie.vote_average.toFixed(1)}
          </span>
          <span>{movie.release_date?.split("-")[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
