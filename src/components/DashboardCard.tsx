interface Props {
  title: string;
  value: number;
}

const DashboardCard = ({ title, value }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-500 text-lg">
        {title}
      </h3>

      <h1 className="text-4xl font-bold mt-3">
        {value}
      </h1>
    </div>
  );
};

export default DashboardCard;