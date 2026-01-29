import { CgArrowsExchangeAlt } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";
import { FaRobot } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

const StatisticCards = () => {
  const callMetrics = [
    {
      title: "Total Calls Today",
      value: "1,234",
      percentage: "+12.5%",
      icon: FiPhone,
    },
    {
      title: "AI Handled Calls",
      value: "987",
      percentage: "+15.3%",
      icon: FaRobot,
    },
    {
      title: "Warm Transfer",
      value: "156",
      percentage: "+8.7%",
      icon: CgArrowsExchangeAlt,
    },
    {
      title: "Appointment Booked",
      value: "432",
      percentage: "+10.2%",
      icon: CiCalendar,
    },
    {
      title: "Failed or Missed Calls",
      value: "89",
      percentage: "-5.4%",
      icon: IoCloseCircleOutline,
    },
    {
      title: "Avg Call Duration",
      value: "3:45",
      percentage: "+2.1%",
      icon: LuClock3,
    },
  ];
  return (
    <div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5 mb-5">
        {callMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-[#0F172B80] border border-[#2B7FFF33] px-6 py-5 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#90A1B9] text-sm mt-4">{metric.title}</h3>
                <p className="text-2xl text-white mt-2">{metric.value}</p>
                <span
                  className={`text-sm font-semibold ${metric.percentage.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                >
                  {metric.percentage}
                </span>
              </div>
              <div
                className={`p-3  bg-linear-to-t ${metric.icon === FiPhone ? "from-[#2B7FFF] to-[#00B8DB]" : ""} ${metric.icon === FaRobot ? "from-[#AD46FF] to-[#F6339A]" : ""} ${metric.icon === CgArrowsExchangeAlt ? "from-[#FF6900] to-[#FB2C36]" : ""} ${metric.icon === CiCalendar ? "from-[#00C950] to-[#00BC7D]" : ""} ${metric.icon === IoCloseCircleOutline ? "from-[#FB2C36] to-[#FF2056]" : ""} ${metric.icon === LuClock3 ? "from-[#615FFF] to-[#2B7FFF]" : ""} rounded-lg`}
              >
                <metric.icon size={32} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticCards;
