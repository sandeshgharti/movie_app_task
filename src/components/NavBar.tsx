import { Heart, SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function NavBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const { scrollYProgress } = useScroll();

  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
    setSearchTerm("");
  };

  console.log("search term", searchTerm);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  return (
    <motion.nav
      style={{ backgroundColor }}
      className="sticky top-0 w-full flex items-center justify-between gap-2 z-200">
      <div className="container flex justify-between  mx-auto p-4 items-center">
        <Link to="/" className="font-bold text-gray-400 text-lg">
          SG<span className="text-red-500">Stream</span>
        </Link>
        <div className="hidden md:flex text-white">
          <ul className="flex space-x-6 ml-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-red-500"
              }>
              <li className="hover:text-red-500 cursor-pointer">Home</li>
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-white hover:text-red-500"
              }>
              <li className="hover:text-red-500 cursor-pointer">My Fav</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 md:hidden mr-4"
                : " md:hidden text-white mr-4 hover:text-red-500"
            }>
            <Heart className="h-6 w-6" />
          </NavLink>
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
    </motion.nav>
  );
}
