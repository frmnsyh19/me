"use client";

// test
import React from "react";

export const ABout = () => {
  return (
    <div className=" w-full flex flex-col rounded-2xl gap-8 p-4 lg:p-7 bg-slate-800 shadow-2xl">
      <div className=" w-full flex flex-col gap-3">
        <p className=" capitalize text-2xl font-bold">About Me</p>
        <div className=" w-full flex flex-col gap-3">
          <span>
            {`I am a passionate and detail-oriented Web Developer with a Bachelor's degree in Information Systems from Universitas Nusa Mandiri. I specialize in building modern, responsive, and dynamic web applications using technologies such as Laravel, Next.js, and React.js. `}
          </span>
          <span className="">
            My academic background combined with hands-on experience has
            equipped me with a solid understanding of both front-end and
            back-end development. I am committed to writing clean, efficient
            code and continuously improving my skills to stay current with the
            latest trends and best practices in web development.
          </span>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-3">
        <p className=" text-2xl font-bold">Languages and Tools</p>
        <div className=" w-full flex flex-wrap justify-center gap-5 lg:gap-1 p-2 bg-base-200 shadow-2xl rounded-2xl">
          <div
            data-tip="html"
            className="tooltip tooltip-bottom w-12 p-2 shadow-2xl bg-base-100 rounded-2xl">
            <img src="/skill/html.png" className=" w-full" alt="" />
          </div>
          <div
            data-tip="CSS"
            className=" tooltip tooltip-bottom w-12 p-2 flex justify-center items-center shadow-2xl bg-base-100 rounded-2xl">
            <img src="/skill/CSS.png" className=" w-6" alt="" />
          </div>
          <div
            className=" w-12 p-2 shadow-2xl bg-base-100 rounded-2xl tooltip tooltip-bottom"
            data-tip="javascript">
            <img src="/skill/js.jpg" className=" w-full" alt="" />
          </div>
          <div
            className=" w-12 p-2 shadow-2xl bg-base-100 rounded-2xl tooltip tooltip-bottom"
            data-tip="typescript">
            <img src="/skill/typescript.png" className=" w-full" alt="" />
          </div>
          <div
            className=" w-12 tooltip tooltip-bottom p-2 shadow-2xl flex justify-center items-center bg-base-100 rounded-2xl"
            data-tip="php">
            <img src="/skill/php.png" className=" w-14" alt="" />
          </div>
          <div
            className="tooltip tooltip-bottom w-12 p-2 shadow-2xl bg-base-100 rounded-2xl"
            data-tip="jquery">
            <img src="/skill/jquery.png" className=" w-full" alt="" />
          </div>
          <div
            className=" w-12 tooltip tooltip-bottom p-2 shadow-2xl flex justify-center items-center bg-base-100 rounded-2xl"
            data-tip="tailwind">
            <img src="/skill/tailwind.png" className=" w-14" alt="" />
          </div>
          <div
            className=" w-12 p-2 shadow-2xl flex justify-center items-center bg-base-100 rounded-2xl tooltip tooltip-bottom"
            data-tip="bootstrap">
            <img src="/skill/Bootstrap.png" className=" w-14" alt="" />
          </div>
          <div
            className=" w-12 p-2 shadow-2xl bg-base-100 rounded-2xl tooltip tooltip-bottom"
            data-tip="laravel">
            <img src="/skill/laravel.png" className=" w-full" alt="" />
          </div>
          <div
            className=" w-12 p-2 shadow-2xl bg-base-100 rounded-2xl tooltip tooltip-bottom flex justify-center items-center"
            data-tip="CodeIgniter">
            <img src="/skill/CI3png.png" className=" w-full" alt="" />
          </div>
          <div
            className=" tooltip tooltip-bottom w-12 p-2 shadow-2xl bg-base-100 rounded-2xl"
            data-tip="reactjs">
            <img src="/skill/react.png" className=" w-full" alt="" />
          </div>
          <div
            className=" w-12 p-2 shadow-2xl flex justify-center items-center bg-base-100 tooltip tooltip-bottom rounded-2xl"
            data-tip="expressjs">
            <img src="/skill/express.png" className=" w-full" alt="" />
          </div>
          <div
            className=" tooltip tooltip-bottom w-12 p-2 shadow-2xl bg-base-100 rounded-2xl"
            data-tip="nextjs">
            <img src="/skill/nextjs.png" className=" w-full" alt="" />
          </div>
          <div
            className=" tooltip tooltip-bottom w-12 p-2 shadow-2xl bg-base-100 rounded-2xl flex justify-center items-center"
            data-tip="golang">
            <img src="/skill/golangnew.png" className=" w-full" alt="" />
          </div>
          <div
            className=" w-12 p-2 shadow-2xl bg-base-100 rounded-2xl tooltip tooltip-bottom"
            data-tip="mysql">
            <img src="/skill/mysql.png" className=" w-full" alt="" />
          </div>
          <div
            className="tooltip tooltip-bottom w-12 p-2 shadow-2xl bg-base-100 rounded-2xl"
            data-tip="postgresql">
            <img src="/skill/postgresql.png" className=" w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
