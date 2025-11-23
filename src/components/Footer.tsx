const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-gray-500 text-sm border-t border-gray-800">
      <p>
        &copy; {new Date().getFullYear()} Sandesh Gharti. Data provided by TMDB.
      </p>
    </footer>
  );
};

export default Footer;
