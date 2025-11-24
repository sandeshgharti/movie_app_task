import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetailsPage";
import Favorites from "./pages/FavoritesPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <div className="bg-[#141414]">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
