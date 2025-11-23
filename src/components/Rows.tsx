import { useRef } from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Movie } from "@/types";

type PropsType = {
  title: string;
  movies: Movie[];
};

const Rows: React.FC<PropsType> = ({ title, movies }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-red-500 text-3xl font-bold mb-2">{title}</h1>

      <div className="relative group">
        <div
          className="flex gap-2 overflow-x-scroll overflow-y-hidden no-scrollbar"
          ref={scrollContainerRef}>
          <div className="flex gap-2">
            {movies?.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        <ControlButtons
          scrollContainerRef={
            scrollContainerRef as React.RefObject<HTMLDivElement>
          }
        />
      </div>
    </div>
  );
};

const ControlButtons = ({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement> | null;
}) => {
  const handleScrollLeft = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        onClick={handleScrollLeft}
        className="absolute h-full top-0 hidden group-hover:flex px-2 bottom-0 bg-black/80  items-center cursor-pointer left-0 z-20">
        <ChevronLeft className="h-8 w-8 text-white" />
      </div>
      <div
        onClick={handleScrollRight}
        className="absolute h-full top-0 hidden group-hover:flex px-2 bottom-0 bg-black/80  items-center cursor-pointer right-0 z-20">
        <ChevronRight className="h-8 w-8 text-white" />
      </div>
    </>
  );
};

export default Rows;
