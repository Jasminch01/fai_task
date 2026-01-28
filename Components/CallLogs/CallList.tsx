import { arimo } from "@/fonts/font";
import { BsDot } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";

const CallList = () => {
  const callLogs = [
    {
      id: 1,
      phoneNumber: "+1 (555) 123-4567",
      duration: "4:32",
      time: "09:15 AM",
      date: "2024-01-28",
      issueType: "Screen Repair",
      callType: "AI Resolved",
      outcome: "Appointment Booked",
    },
    {
      id: 2,
      phoneNumber: "+1 (555) 234-5678",
      duration: "3:18",
      time: "10:45 AM",
      date: "2024-01-28",
      issueType: "Battery Replacement",
      callType: "Warm Transfer",
      outcome: "Quote Provided",
    },
    {
      id: 3,
      phoneNumber: "+1 (555) 345-6789",
      duration: "2:45",
      time: "11:30 AM",
      date: "2024-01-28",
      issueType: "Water Damage",
      callType: "Appointment",
      outcome: "Escalated to Technician",
    },
    {
      id: 4,
      phoneNumber: "+1 (555) 456-7890",
      duration: "5:12",
      time: "02:20 PM",
      date: "2024-01-27",
      issueType: "Display Repair",
      callType: "Dropped",
      outcome: "Appointment Booked",
    },
    {
      id: 5,
      phoneNumber: "+1 (555) 567-8901",
      duration: "1:58",
      time: "03:45 PM",
      date: "2024-01-27",
      issueType: "Charging Port",
      callType: "AI Resolved",
      outcome: "Appointment Booked",
    },
  ];
  return (
    <div>
      <div className="bg-[#0F172B80] rounded-xl pt-5 h-auto border border-[#2B7FFF33]">
        <div className="border-b border-[#2B7FFF33] px-5 pb-3">
          <p className={`text-white text-xl ${arimo.className}`}>Call List</p>
        </div>
        <div className="overflow-hidden">
          {callLogs.map((log) => (
            <div
              key={log.id}
              className="border-b border-[#2B7FFF33] px-5 py-3 space-y-3"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center space-x-5">
                  <div className="bg-linear-to-t from-[#2B7FFF] to-[#00B8DB] p-3 rounded-lg">
                    <FiPhone color="white" size={20} />
                  </div>
                  <div>
                    <p className={`text-white text-base`}>{log.phoneNumber}</p>
                    <p className={`text-[#90A1B9] text-xs flex items-end`}>
                      {log.date} <BsDot /> {log.time}
                    </p>
                  </div>
                </div>
                <div
                  className={` bg-linear-to-t border ${log.callType === "AI Resolved" ? "from-[#00C95033] to-[#00BC7D33]  border-[#00C9504D]" : ""} ${log.callType === "Warm Transfer" ? "from-[#FF690033] to-[#FB2C3633] border-[#FF69004D]" : ""} ${log.callType === "Appointment" ? "from-[#2B7FFF33] to-[#00B8DB33] border-[#2B7FFF33]" : ""} ${log.callType === "Dropped" ? "from-[#FF150033] to-[#FB2C3633] border-[#FF69004D]" : ""} px-2 py-1 rounded`}
                >
                  <p className={`${log.callType === "AI Resolved" ? "text-[#00C950]" : ""} ${log.callType === "Warm Transfer" ? "text-[#FF8904]" : ""} ${log.callType === "Appointment" ? "text-[#51A2FF]" : ""} ${log.callType === "Dropped" ? "text-[#FF0404]" : ""}`}>{log.callType}</p>
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <div className="flex items-center space-x-2">
                  <LuClock3 color="white" />
                  <p className={`text-white`}>{log.duration}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <SiTicktick className="text-[#90A1B9]" />
                  <p className="text-[#90A1B9]">
                    {log.outcome}
                  </p>
                </div>
                <div className="bg-[#2B7FFF33] text-white px-2 py-1 rounded">
                  <p>Screen</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallList;
