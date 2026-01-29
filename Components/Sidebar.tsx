"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { GoGear } from "react-icons/go";

const menus = [
  {
    page: "Dashboard Overview",
    link: "/dashboard-overview",
  },
  {
    page: "Call Logs",
    link: "/call-logs",
  },
  {
    page: "Appointments",
    link: "/appointments",
  },
  {
    page: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile sidebar Menu Icon */}
      <div className="xl:hidden absolute top-5 right-2 z-10">
        <button
          onClick={toggleSidebar}
          className="p-2"
        >
          <FaBars className="text-xl" color="white" />
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`fixed xl:relative 2xl:w-[15%] h-screen shadow-right border-r border-[#2B7FFF33] bg-[#111B3C] transform transition-transform duration-300 ease-in-out top-0 z-20 ${
          isSidebarOpen
            ? "translate-x-0 w-[50%]"
            : "-translate-x-full xl:translate-x-0"
        }`}
      >
        <div className="h-screen px-2 flex flex-col justify-between">
          <div>
            <div className="xl:pt-24 pt-16 flex justify-center">
              <Link href={"/dashboard-overview"} onClick={handleMenuItemClick}>
                <div className="p-3 rounded-xl bg-linear-to-t from-[#00FF88] to-[#00D4FF]">
                  <Image
                    className="rounded-full size-8"
                    src={"/logo.png"}
                    alt="user-image"
                    width={100}
                    height={100}
                  />
                </div>
              </Link>
            </div>

            {/* Menu Links */}
            <div className="pt-7">
              {menus.map((menu, idx) => (
                <li key={idx} className="list-none mb-4">
                  <Link
                    href={menu.link}
                    className={`flex items-center text-white xl:gap-x-5 gap-x-3 xl:px-5 px-3 py-3 transition-all duration-300 rounded-xl  ${
                      pathname === menu.link
                        ? "bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(43,127,255,0.2)] border border-[#2B7FFF33]"
                        : "border border-transparent hover:bg-white/5 hover:backdrop-blur-3xl hover:shadow-[0_8px_32px_0_rgba(43,127,255,0.2)]"
                    }`}
                    onClick={handleMenuItemClick}
                  >
                    {menu.link === "/dashboard-overview" && (
                      <AiFillHome className="ml-2 xl:text-3xl text-xl" />
                    )}
                    {menu.link === "/call-logs" && (
                      <IoCallOutline className="ml-2 xl:text-3xl text-xl" />
                    )}
                    {menu.link === "/appointments" && (
                      <CiCalendar className="ml-2 xl:text-3xl text-xl" />
                    )}
                    {menu.link === "/settings" && (
                      <GoGear className="ml-2 xl:text-3xl text-xl" />
                    )}
                    <span>{menu.page}</span>
                  </Link>
                </li>
              ))}
            </div>
          </div>

          {/* Logout Button */}
          <div className="xl:pb-10 flex items-center">
            <button className="flex items-center w-full gap-5 cursor-pointer px-5 py-3 rounded-lg text-[#FF1100]">
              <MdOutlineLogout className="ml-2" size={30} color="white" />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
