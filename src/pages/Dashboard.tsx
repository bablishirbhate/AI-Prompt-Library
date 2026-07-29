import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-70 w-full min-h-screen bg-gray-100 dark:bg-gray-800">

        <Navbar />

        <div className="p-6 text-black dark:text-white">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <DashboardCard
              title="Total Prompts"
              value={0}
            />

            <DashboardCard
              title="Favorite Prompts"
              value={0}
            />

            <DashboardCard
              title="Categories"
              value={10}
            />

            <DashboardCard
              title="Recently Added"
              value={0}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;