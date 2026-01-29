"use client";
import Image from "next/image";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakfix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
  });
  const [profileImage, setProfileImage] = useState("/profile.png");
  const [activetab, setActiveTab] = useState("profile");

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="text-white flex items-center border-b relative border-[#192D71] space-x-10 mb-5 ">
        <div>
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 px-2 transition-colors relative cursor-pointer text-white xl:text-2xl ${
              activetab === "profile"
                ? "text-[#2B7FFF]"
                : ""
            }`}
          >
            Profile
            {activetab === "profile" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2B7FFF]"></span>
            )}
          </button>
        </div>
        <div>
          <button
            onClick={() => setActiveTab("password")}
            className={`pb-3 px-2 transition-colors relative  cursor-pointer text-white xl:text-2xl ${
              activetab === "password"
                ? "text-[#2B7FFF] "
                : ""
            }`}
          >
            Password Setting
            {activetab === "password" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2B7FFF]"></span>
            )}
          </button>
        </div>
      </div>

      <div className="">
        <p className="text-white text-xl">Profile Image</p>
        <div className="flex items-end space-x-5 text-white">
          <div className="relative">
            <Image
              src={profileImage}
              className="rounded-full mt-5"
              width={102}
              height={102}
              sizes="500px"
              alt="profile"
            />
            {isEditMode && (
              <label
                htmlFor="profile-image-upload"
                className="absolute bottom-0 right-0 bg-[#7AA3CC] p-2 rounded-xl cursor-pointer"
              >
                <FiEdit size={20} />
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <div className="flex space-x-3">
            {!isEditMode && (
              <button
                onClick={handleEdit}
                className="bg-white/5 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(43,127,255,0.2)] border border-[#2B7FFF33] px-3 py-2 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
              >
                Edit profile
              </button>
            )}
          </div>
        </div>
        {/* info */}
        <div className="mt-10">
          {isEditMode ? (
            <div>
              <div className="w-full text-white">
                <div className="flex">
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <label className="py-3 px-4 font-medium">
                        Full Name:
                      </label>
                      <div className="py-3 px-4">
                        <input
                          type="text"
                          value={profileData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          className="bg-white/5 border border-[#2B7FFF33] rounded-lg px-3 py-2 w-full focus:outline-none focus:border-[#2B7FFF] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <label className="py-3 px-4 font-medium">Email:</label>
                      <div className="py-3 px-4">
                        <input
                          type="email"
                          value={profileData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="bg-white/5 border border-[#2B7FFF33] rounded-lg px-3 py-2 w-full focus:outline-none focus:border-[#2B7FFF] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full text-white">
                <div className="flex">
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <label className="py-3 px-4 font-medium">
                        Store Name:
                      </label>
                      <div className="py-3 px-4">
                        <input
                          type="text"
                          value={profileData.storeName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          className="bg-white/5 border border-[#2B7FFF33] rounded-lg px-3 py-2 w-full focus:outline-none focus:border-[#2B7FFF] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <label className="py-3 px-4 font-medium">
                        Store Address:
                      </label>
                      <div className="py-3 px-4">
                        <input
                          type="email"
                          value={profileData.storeAddress}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="bg-white/5 border border-[#2B7FFF33] rounded-lg px-3 py-2 w-full focus:outline-none focus:border-[#2B7FFF] transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <table className="w-full max-w-2xl text-white">
              <tbody>
                <tr className="border-b border-[#192D71]">
                  <td className="py-3 px-4 font-medium">Full Name:</td>
                  <td className="py-3 px-4">{profileData.fullName}</td>
                </tr>
                <tr className="border-b border-[#192D71]">
                  <td className="py-3 px-4 font-medium">Email:</td>
                  <td className="py-3 px-4">{profileData.email}</td>
                </tr>
                <tr className="border-b border-[#192D71]">
                  <td className="py-3 px-4 font-medium">Store Name:</td>
                  <td className="py-3 px-4">{profileData.storeName}</td>
                </tr>
                <tr className="border-b border-[#192D71]">
                  <td className="py-3 px-4 font-medium">Store Address:</td>
                  <td className="py-3 px-4">{profileData.storeAddress}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        {isEditMode && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleSave}
              className="bg-[#00C950] w-93.25 py-2 rounded-xl cursor-pointer hover:bg-[#00C950]/80 transition-colors font-bold text-white"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
