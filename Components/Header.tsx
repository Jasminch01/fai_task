import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <div className="py-7 px-5 mb-5 flex justify-between items-center bg-[#111B3C]">
        <div>
          <p className="text-3xl text-white">Dashboard overview</p>
        </div>
        <div className="flex items-center gap-10">
          <div>
            <IoMdNotificationsOutline  color="white" size={30}/>
          </div>
          <Image
            src="/profile.png"
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
