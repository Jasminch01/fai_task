"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  const pathName = usePathname();
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

  const currentPage = menus.find((menu) => menu.link === pathName);
  const navTitle = currentPage ? currentPage.page : "";

  return (
    <div>
      <div className="p-5 z-10 flex justify-between items-center">
        <div>
          <p className="text-3xl text-white transform transition-all duration-300"> {navTitle}</p>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <IoMdNotificationsOutline color="white" size={30} />
          </div>
          <Link href={'/settings'}>
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
