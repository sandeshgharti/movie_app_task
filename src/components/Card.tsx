import { Film, Heart, Star } from "lucide-react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/store/slices";
import type { Movie } from "@/types";

type CardProps = {
  movie: Movie;
};

const Card = ({ movie }: CardProps) => {
  const dispatch = useDispatch();

  const toggleFavorites = () => {
    dispatch(toggleFavorite(movie));
  };
  const handleFavClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorites();
  };

  const favMovies = useSelector(
    (state: { myFavorites: { favMovies: Movie[] } }) =>
      state.myFavorites.favMovies
  );

  const isFav = favMovies.find((favMovie: Movie) => favMovie.id === movie.id);

  if (!movie) {
    return null;
  }
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative block w-40 h-64 aspect-2/3 bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105  hover:z-10 shadow-lg">
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
        <Button
          onClick={handleFavClick}
          variant={"outline"}
          className={`w-full ${
            isFav
              ? "bg-red-600 text-white hover:text-white border-red-600 hover:bg-red-700"
              : ""
          }`}>
          <Heart className="h-3 w-3" />
          {isFav ? "Remove" : "Add to Fav"}
        </Button>
      </div>
    </Link>
  );
};

export default Card;
