import CallTrands from "@/Components/Dashboard/CallTrands";
import RecentActivityRepairRequest from "@/Components/Dashboard/RecentActivityRepairRequest";
import StatisticCards from "@/Components/Dashboard/StatisticCards";

const DashboardPage = () => {
  return (
    <div>
      <div className="px-5">
        <StatisticCards />
        <CallTrands />
        <RecentActivityRepairRequest />
      </div>
    </div>
  );
};

export default DashboardPage;
