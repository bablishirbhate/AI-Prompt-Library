import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen fixed">

      <h2 className="text-2xl font-bold p-5">
        AI Prompt Library
      </h2>

      <nav className="flex flex-col">

        <Link
          to="/"
          className="p-4 hover:bg-gray-700"
        >
          Dashboard
        </Link>

        <Link
          to="/prompts"
          className="p-4 hover:bg-gray-700"
        >
          Prompt Management
        </Link>

      </nav>

    </div>
  );
};

export default Sidebar;