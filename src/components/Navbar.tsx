import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-900 shadow p-5">

      <h1 className="text-2xl font-bold text-black dark:text-white">
        Dashboard
      </h1>

      <ThemeToggle />

    </div>
  );
};

export default Navbar;