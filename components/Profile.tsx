"use client";
import React, { useState } from "react";
import Image from "next/image";
import SidebarLayout from "@/components/sidebar";
import profile from "@/public/profile.png";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleChange = (e: { target: { name: string; value: any; }; }) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <SidebarLayout>
      <div className="flex flex-1 p-4 md:p-10 bg-gray-100 dark:bg-neutral-900 flex-col gap-4">
        <h2 className="text-2xl font-bold">Profile</h2>
        <div className="bg-[#202022] rounded-lg p-[2.85rem] flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
            <Image src={profile} alt="Profile Picture" className="rounded-full h-[15rem] w-[15rem]" />
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg w-full">Upload</button>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <div>
              <label className="block text-white">Name</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-lg bg-neutral-800 text-white"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="block text-white">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-lg bg-neutral-800 text-white"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-white">Bio</label>
              <textarea
                name="bio"
                value={userInfo.bio}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded-lg bg-neutral-800 text-white"
                placeholder="Bio"
              />
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg self-start">Save</button>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Profile;
