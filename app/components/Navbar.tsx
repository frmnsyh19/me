"use client";

import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";

type props = {
  show: string;
  setShow: (value: string) => void;
};

export const Navbar: React.FC<props> = ({ setShow, show }) => {
  console.log(show);

  return (
    <div className=" w-full flex flex-row justify-around p-4 rounded-2xl bg-slate-800">
      <div
        className={`flex flex-row gap-2 items-center  cursor-pointer ${
          show === "about" ? "text-blue-500" : "text-slate-100"
        }`}
        onClick={() => setShow("about")}>
        <FaRegUser className={` text-xl`} />
        <p className=" text-lg lg:block hidden">About</p>
      </div>
      <div
        className={`flex flex-row gap-2 items-center  cursor-pointer ${
          show === "resume" ? "text-blue-500" : "text-slate-100"
        }`}
        onClick={() => setShow("resume")}>
        <IoDocumentTextOutline className=" text-2xl " />
        <p className=" text-lg lg:block hidden ">Resume</p>
      </div>
      <div
        className={`flex flex-row gap-2 items-center  cursor-pointer ${
          show === "work" ? "text-blue-500" : "text-slate-100"
        }`}
        onClick={() => setShow("work")}>
        <MdOutlineWorkOutline className=" text-2xl " />
        <p className=" text-lg lg:block hidden ">Work</p>
      </div>
      <div
        className={`flex flex-row gap-2 items-center  cursor-pointer ${
          show === "contact" ? "text-blue-500" : "text-slate-100"
        }`}
        onClick={() => setShow("contact")}>
        <MdOutlineContactPhone className=" text-2xl " />
        <p className=" text-lg lg:block hidden ">Contact</p>
      </div>
    </div>
  );
};
