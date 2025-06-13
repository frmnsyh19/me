import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
export const Biodata = () => {
  return (
    <div className=" w-full lg:w-[25rem] rounded-2xl bg-slate-800 shadow-2xl p-4 flex flex-col gap-4">
      <div className=" w-full flex justify-center items-center">
        <img
          src="/porto.png"
          className=" bg-cover rounded-2xl w-full h-80 object-cover"
          alt=""
        />
      </div>
      <div className=" w-full flex justify-center flex-col gap-1 items-center ">
        <p className=" text-2xl font-semibold">Firmansyah</p>
        <p className=" text-center text-2xl text-gray-400">Web Development</p>
      </div>
      <div className=" w-full flex flex-col gap-3 mt-3 bg-slate-600 p-3 rounded-2xl">
        {/* email */}
        <div className=" w-full flex flex-row gap-2 items-center border-b pb-2 border-white">
          <div className=" p-2  rounded-lg shadow-2xl bg-slate-700">
            <MdOutlineMailOutline className=" text-2xl text-red-400" />
          </div>
          <div className=" flex flex-col ">
            <p className=" text-gray-400">Email</p>
            <p className="">19.firmann@gmail.com</p>
          </div>
        </div>
        {/* no hp */}
        <div className=" w-full flex flex-row gap-2 items-center border-b pb-2 border-white">
          <div className=" p-2  rounded-lg shadow-2xl bg-slate-700">
            <IoPhonePortraitOutline className=" text-2xl text-cyan-400" />
          </div>
          <div className=" flex flex-col ">
            <p className=" text-gray-400">Phone</p>
            <p className="">+62 814 1335 9387</p>
          </div>
        </div>
        {/*  */}
        <div className=" w-full flex flex-row gap-2 items-center border-b pb-2 border-white">
          <div className=" p-2  rounded-lg shadow-2xl bg-slate-700">
            <CiLocationOn className=" text-2xl text-green-400" />
          </div>
          <div className=" flex flex-col ">
            <p className=" text-gray-400">Location</p>
            <p className="">Petukangan Utara, South Jakarta, Indonesia</p>
          </div>
        </div>
        {/*  */}
        <div className=" w-full flex flex-row gap-2 items-center border-b pb-2 border-white">
          <div className=" p-2  rounded-lg shadow-2xl bg-slate-700">
            <MdOutlineDateRange className=" text-2xl text-purple-400" />
          </div>
          <div className=" flex flex-col ">
            <p className=" text-gray-400">Birthday</p>
            <p className="">Oct 09, 1999</p>
          </div>
        </div>
      </div>
    </div>
  );
};
