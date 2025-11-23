import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function NavBar() {
  return (
    <nav className="sticky bg-transparent top-0 w-full flex items-center justify-between gap-2 z-50">
      <div className="flex justify-between container mx-auto p-4 items-center">
        <div className="font-bold">
          XAV<span className="text-red-400">Technologies</span>
        </div>
        <div className="hidden md:flex text-white">
          <ul className="flex space-x-6 ml-10">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="hover:text-red-400 cursor-pointer">Movies</li>
            <li className="hover:text-red-400 cursor-pointer">TV Shows</li>
            <li className="hover:text-red-400 cursor-pointer">Actors</li>
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
