import DashboardGraph from "../../components/graphs/DashboardGraph";

export default function Dashboard() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <p className="text-gray-500 mb-6">
        An easy way to manage sales with precision.
      </p>

      {/* Content Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Net Income</h3>
          <p className="text-3xl font-bold">$193,000</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Return</h3>
          <p className="text-3xl font-bold">$32,000</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Update</h3>
          <p>Sales revenue increased 40% in 1 week.</p>
        </div>
        <div>
          <DashboardGraph />
        </div>
      </div>
    </div>
  );
}
