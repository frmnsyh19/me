"use client";

import React, { useState } from "react";
import { Kontak } from "./Navbar";
import { Navbar } from "./Resume";
import { ABout } from "./Biodata";
import { Resume } from "./Work";
import { Project } from "./Project";

export const Container = () => {
  const [show, setShow] = useState<string>("about");

  return (
    <div className=" w-full flex flex-col gap-4">
      <Navbar setShow={setShow} show={show} />
      {show === "about" && <ABout />}
      {show === "resume" && <Resume />}
      {show === "work" && <Project />}
      {show === "contact" && <Kontak />}
    </div>
  );
};
