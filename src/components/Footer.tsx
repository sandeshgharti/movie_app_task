const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-gray-500 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Sandesh Gharti. Data provided by TMDB.
      </p>
    </footer>
  );
};

export default Footer;
