import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold text-blue-600">
            CollegeFinder
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link
            to="/bookmarks"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Bookmarks
          </Link>

          <Link
            to="/compare"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Compare
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;