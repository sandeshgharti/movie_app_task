import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="container mx-auto h-[80vh] relative overflow-hidden ">
      <img
        src="https://www.juliensauctions.com/cdn-cgi/image/width=3840,quality=75/https://cdn.sanity.io/images/ib3mo6bj/production/5126ab3c7fa2b14452a3fb6f8c4c118a793b477d-2000x1452.jpg?w=2000&h=1452&q=90&fit=crop"
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 left-0 transform text-start px-4">
        <h1 className="text-white text-5xl font-bold">Movies Name</h1>
        <p className="text-white mt-4 max-w-lg text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-2 mt-4">
          <Button variant={"outline"}>Play Trailer</Button>
          <Button>More Info</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
