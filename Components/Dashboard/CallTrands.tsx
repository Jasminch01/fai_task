"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import { arimo } from "@/fonts/font";

const data = [
  { name: "Mon", calls: 48 },
  { name: "Tue", calls: 60 },
  { name: "Wed", calls: 55 },
  { name: "Thu", calls: 70 },
  { name: "Fri", calls: 73 },
  { name: "Sat", calls: 89 },
  { name: "Sun", calls: 50 },
];
const CallTrands = () => {
  return (
    <div className="w-full rounded-xl bg-[#0F172B80] border border-[#2B7FFF33] p-10">
      <div className="flex items-center justify-between">
        <div className={`text-white ${arimo.className}`}>
          <p className="text-white text-xl">Call Trends - This Week</p>
          <p className="text-sm text-[#90A1B9]">Total: 472 calls</p>
        </div>
        <div>
          <select className="bg-[#1D293D] text-white px-3 py-2 rounded-lg border border-[#2B7FFF33]">
            <option>This Week</option>
            <option>Last Week</option>
            <option>This Month</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>
      <AreaChart
        style={{
          width: "100%",
          maxHeight: "30vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="4 3"
          stroke="#2B7FFF33"
          stopOpacity={0.1}
        />
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis
          width="auto"
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
          stroke="#ffffff"
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="calls"
          stroke="#3B82F6"
          fill="url(#colorCalls)"
        />
        <RechartsDevtools />
      </AreaChart>
    </div>
  );
};

export default CallTrands;
