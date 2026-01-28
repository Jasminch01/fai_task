import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <div className="text-white flex items-center border-b border-[#192D71] space-x-10 px-5 mb-5 pb-3">
        <div>
          <button>Profile</button>
        </div>
        <div>
          <button>Password Setting</button>
        </div>
      </div>

      <div className="px-5">
        <p className="text-white text-xl">Profile Image</p>
        <div className="flex items-end space-x-5 text-white">
          <div>
            <Image
              src={"/profile.png"}
              className="rounded-full mt-5"
              width={102}
              height={102}
              sizes="500px"
              alt="profile"
            />
          </div>
          <div>
            <button className="bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(43,127,255,0.2)] border border-[#2B7FFF33] px-3 py-2 rounded-xl">
              Edit profile
            </button>
          </div>
        </div>
        {/* info */}
        <div className="mt-10">
          <table className="w-full max-w-2xl text-white">
            <tbody>
              <tr className="border-b border-[#192D71]">
                <td className="py-3 px-4 font-medium">Full Name:</td>
                <td className="py-3 px-4">Jane D.</td>
              </tr>
              <tr className="border-b border-[#192D71]">
                <td className="py-3 px-4 font-medium">Email:</td>
                <td className="py-3 px-4">jane@gmail.com</td>
              </tr>
              <tr className="border-b border-[#192D71]">
                <td className="py-3 px-4 font-medium">Store Name:</td>
                <td className="py-3 px-4">Ubreakfix Store</td>
              </tr>
              <tr className="border-b border-[#192D71]">
                <td className="py-3 px-4 font-medium">Store Address:</td>
                <td className="py-3 px-4">
                  123 Main Street, New York, NY 10001
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
