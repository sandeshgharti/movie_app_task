import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="sticky bg-black/50 top-0 w-full flex items-center justify-between gap-2 z-50">
      <div className="container flex justify-between  mx-auto p-4 items-center">
        <Link to="/" className="font-bold text-gray-400">
          XAV<span className="text-red-500">Technologies</span>
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
        <div className="relative">
          <Input
            type="search"
            className="ml-auto rounded-2xl focus:ring-2 focus:ring-red-400 pl-10"
            placeholder="Titles, people, genres..."
          />
          <SearchIcon className="absolute left-3 top-2 text-gray-400 h-5 w-5" />
        </div>
      </div>
    </nav>
  );
}
