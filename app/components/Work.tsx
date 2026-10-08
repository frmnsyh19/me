import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
export const Resume = () => {
  return (
    <div className=" w-full flex flex-col rounded-2xl gap-6 p-4 lg:p-7 bg-slate-800 shadow-2xl">
      <div className=" w-full flex flex-col lg:flex-row gap-6">
        <div className=" w-full lg:w-[50%] flex flex-col gap-5 text-slate-100">
          <div className=" flex flex-row gap-2 items-center">
            <MdCastForEducation className=" text-3xl" />
            <p className=" text-2xl font-bold">Education</p>
          </div>
          <div className="w-full border border-slate-100 flex flex-col p-3 rounded-2xl gap-2">
            <p className=" text-slate-100 text-xl">
              Sistem Informasi - Sarjana
            </p>
            <p className=" text-xl text-slate-100">Universitas Nusa Mandiri</p>
            <p className=" text-xl text-gray-500">2022 - 2023</p>
          </div>
          <div className="w-full border border-slate-100 flex flex-col p-3 rounded-2xl gap-2">
            <p className=" text-slate-100 text-xl">
              Sistem Informasi - Diploma
            </p>
            <p className=" text-xl text-slate-100">
              Universitas Bina Sarana Informatika
            </p>
            <p className=" text-xl text-gray-500">2018 - 2021</p>
          </div>
        </div>
        <div className=" w-full lg:w-[50%] flex flex-col gap-5 text-slate-100">
          <div className=" flex flex-row gap-2 items-center">
            <MdOutlineWorkHistory className=" text-3xl" />
            <p className=" text-2xl font-bold">Experience</p>
          </div>
          <div className="w-full border border-slate-100 flex flex-col p-3 rounded-2xl gap-2">
            <div className="w-100 flex flex-row gap-2 items-center">
              <img src="/skill/dwikalogo.jpg" className=" w-11" alt="" />
              <p className=" text-slate-100 text-xl">PT. Duta Wisata Kautsar</p>
            </div>

            <p className=" text-xl text-slate-100">Freelance Web Developer</p>
            <p className=" text-xl text-gray-500">November 2024 - Juli 2025</p>
          </div>
          <div className="w-full border border-slate-100 flex flex-col p-3 rounded-2xl gap-2">
            <div className="w-100 flex flex-row gap-2 items-center">
              <img src="/skill/marunilogo.jpg" className=" w-11" alt="" />
              <p className=" text-slate-100 text-xl">PT. Maruni Daya Sakti</p>
            </div>
            <p className=" text-xl text-slate-100">IT Programmer</p>
            <p className=" text-xl text-gray-500">September 2025 - Juli 2026</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <p className=" text-2xl font-bold">Knowledge</p>
        <div className=" w-full flex justify-rounded flex-wrap gap-3 p-1">
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">Laravel</div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">
            Codigneter
          </div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">
            React Js
          </div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">Next Js</div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">
            Express Js
          </div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">Golang</div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">
            Bootstrap
          </div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">
            TailwindCSS
          </div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">Redux</div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">MySQL</div>
          <div className="badge badge-lg bg-slate-600 p-4 text-lg">
            PostgreSQL
          </div>
        </div>
      </div>
      <a
        href="/firman.pdf"
        download
        className=" mt-3 btn btn-outline  btn-lg w-full rounded-full  text-xl">
        <MdOutlineFileDownload className=" text-3xl" />
        Download CV
      </a>
    </div>
  );
};
