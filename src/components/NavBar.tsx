import { Heart, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  console.log("search term", searchTerm);
  return (
    <nav className="sticky bg-black/50 top-0 w-full flex items-center justify-between gap-2 z-100">
      <div className="container flex justify-between  mx-auto p-4 items-center">
        <Link to="/" className="font-bold text-gray-400 text-lg">
          SG<span className="text-red-500">Stream</span>
        </Link>
        <div className="hidden md:flex text-white">
          <ul className="flex space-x-6 ml-10">
            <Link to="/">
              <li className="hover:text-red-400 cursor-pointer">Home</li>
            </Link>
            <Link to="/favorites">
              <li className="hover:text-red-400 cursor-pointer">My Fav</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/favorites" className="md:hidden text-white mr-4">
            <Heart className="h-6 w-6" />
          </Link>
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-auto rounded-2xl text-white focus:ring-2 focus:ring-red-400 pl-10 w-32 md:w-64"
              placeholder="Titles, people, genres..."
            />
            <SearchIcon className="absolute left-3 top-2 text-gray-400 h-5 w-5" />
          </form>
        </div>
      </div>
    </nav>
  );
}
