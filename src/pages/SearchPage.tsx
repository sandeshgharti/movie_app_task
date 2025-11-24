import Card from "@/components/Card";
import type { Movie } from "@/types";
import { searchMovies } from "@/services/https";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { data: searchResults, isLoading: searchLoading } = useQuery({
    queryKey: ["searchMovies", query],
    queryFn: () => searchMovies(query as string),
  });

  console.log("search results", searchResults);
  console.log("Query:", query);

  return (
    <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-white">
        Search Results for <span className="text-red-500">"{query}"</span>
      </h1>
      {searchLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-10 w-10 text-white animate-spin" />
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-20">
          {searchResults.map((movie: Movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No results found. Try a different keyword.
        </div>
      )}
    </div>
  );
};

export default SearchPage;
