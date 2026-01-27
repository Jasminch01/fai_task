import { arimo } from "@/fonts/font";

const RecentActivityRepairRequest = () => {
  const recentActivities = [
    {
      id: 1,
      title: "AI booked appointment for iPhone 13 screen repair",
      time: "2min ago",
      status: "completed",
    },
    {
      id: 2,
      title: "AI scheduled consultation for MacBook battery replacement",
      time: "15min ago",
      status: "pending",
    },
    {
      id: 3,
      title: "AI confirmed appointment for Samsung Galaxy water damage",
      time: "1hr ago",
      status: "completed",
    },
    {
      id: 4,
      title: "AI rescheduled iPad Pro display repair",
      time: "2hr ago",
      status: "rescheduled",
    },
    {
      id: 5,
      title: "AI booked walk-in for iPhone 14 charging port issue",
      time: "3hr ago",
      status: "completed",
    },
    {
      id: 6,
      title: "AI cancelled appointment for Google Pixel screen replacement",
      time: "5hr ago",
      status: "cancelled",
    },
    {
      id: 7,
      title: "AI confirmed appointment for Apple Watch battery service",
      time: "Yesterday",
      status: "completed",
    },
    {
      id: 8,
      title: "AI booked urgent repair for iPhone 12 speaker malfunction",
      time: "Yesterday",
      status: "in-progress",
    },
  ];
  return (
    <div className="flex items-stretch space-x-5 justify-between mt-10">
      <div className="px-10 py-5 rounded-xl bg-[#0F172B80] border border-[#2B7FFF33] flex-1">
        <p className={`text-white text-2xl ${arimo.className}`}>Recent Activity</p>
        <div>
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="mt-4 flex items-baseline space-x-4 bg-[#1D293D80] py-2 px-5 rounded-lg"
            >
              <div
                className={`size-2 rounded-full ${activity.status === "completed" ? "bg-green-500" : activity.status === "pending" ? "bg-yellow-500" : activity.status === "rescheduled" ? "bg-blue-500" : activity.status === "cancelled" ? "bg-red-500" : "bg-purple-500"}`}
              ></div>
              <div>
                <p className="text-white">{activity.title}</p>
                <p className="text-gray-400 text-sm">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 rounded-xl bg-[#0F172B80] border border-[#2B7FFF33] flex-1">
        <p className={`text-white text-2xl ${arimo.className}`}>Top Repair Requests</p>
      </div>
    </div>
  );
};

export default RecentActivityRepairRequest;
