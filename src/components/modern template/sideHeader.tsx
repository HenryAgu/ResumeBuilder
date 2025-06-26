import React, { useState } from "react";

const SideHeader = () => {
      const [profilePhoto, setProfilePhoto] = useState<string>(
        "/images/profile.png"
      );
      const [address, setAddress] = useState<string>(
        "111 1st Avenue Redmond, WA 65432 909.555.0100"
      );
      const [email, setEmail] = useState<string>("kristi@example.com");
      const [website, setWebsite] = useState("www.interestingsite.com");
  return (
    <div>
      <div className="flex items-end justify-end">
        <img
          src={profilePhoto}
          alt=""
          className="w-[207px] h-[205px] p-1 border border-black"
        />
      </div>
      <div className="pl-8 mt-10 flex flex-col">
        <p className="font-serif text-2xl font-medium">CONTACT</p>
        {/* Address */}
        <p className="text-sm font-inter font-normal mt-5 w-[70%]">{address}</p>
        <p className="text-sm font-inter font-normal w-[70%]">{email}</p>
        <p className="text-sm font-inter font-normal w-[70%]">{website}</p>
        <div className="h-[0.5px] bg-black mt-10"></div>
      </div>
    </div>
  );
};

export default SideHeader;
