import CallDetails from "@/Components/CallLogs/CallDetails";
import CallList from "@/Components/CallLogs/CallList";
import { IoMdArrowDropdown } from "react-icons/io";

const CallLogsPage = () => {
  return (
    <div>
      <div className="px-5">
        {/* Search and Filters */}
        <div className="mb-6 flex xl:flex-row flex-col gap-4 items-center justify-between">
          <div className="xl:flex-1 w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by phone number or issue..."
                className="w-full bg-[#0F172B80] text-white px-4 py-3 pl-10 rounded-lg border border-[#2B7FFF33] focus:outline-none"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="xl:flex-1 w-full">
            <div className="flex xl:flex-row flex-col xl:justify-end gap-4">
              <div className="relative">
                <select className="bg-[#0F172B80] text-white px-4 py-3 pr-10 rounded-lg border border-[#2B7FFF33] appearance-none cursor-pointer focus:outline-none w-full sm:w-auto">
                  <option value="">All Types</option>
                  <option value="inbound">Inbound</option>
                  <option value="outbound">Outbound</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <IoMdArrowDropdown color="white" />
                </div>
              </div>

              <div className="relative">
                <select className="bg-[#0F172B80] text-white px-4 py-3 pr-10 rounded-lg border border-[#2B7FFF33] appearance-none cursor-pointer focus:outline-none w-full sm:w-auto">
                  <option value="">All Issues</option>
                  <option value="screen-repair">Screen Repair</option>
                  <option value="water-damage">Water Damage</option>
                  <option value="charging-port">Charging Port</option>
                  <option value="speaker-issue">Speaker Issue</option>
                  <option value="software-issue">Software Issue</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <IoMdArrowDropdown color="white" />
                </div>
              </div>

              <div className="relative">
                <select className="bg-[#0F172B80] text-white px-4 py-3 pr-10 rounded-lg border border-[#2B7FFF33] appearance-none cursor-pointer focus:outline-none w-full sm:w-auto">
                  <option value="">All Time</option>
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="this-week">This Week</option>
                  <option value="last-week">Last Week</option>
                  <option value="this-month">This Month</option>
                  <option value="last-month">Last Month</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <IoMdArrowDropdown color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-5 space-y-5">
          <div className="flex-1">
            <CallList />
          </div>
          <div className="flex-1">
            <CallDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogsPage;
