import Card from "@/components/Card";
import type { Movie } from "@/types";
import { HeartOff } from "lucide-react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favMovies = useSelector((state: any) => state.myFavorites.favMovies);
  console.log("fav movies", favMovies);
  return (
    <div className="min-h-screen container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold text-white mb-8">My Favorites</h1>

      {favMovies.length > 0 ? (
        <div className="flex gap-3 flex-wrap ">
          {favMovies.map((movie: Movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <HeartOff className="h-16 w-16 mb-4 opacity-50" />
          <p className="text-xl">Your Favorites list is empty.</p>
          <p className="text-sm">
            Start adding movies to build your collection.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
