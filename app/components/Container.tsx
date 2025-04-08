"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { ABout } from "./ABout";
import { Resume } from "./Resume";
import { Work } from "./Work";
import { Kontak } from "./Kontak";

export const Container = () => {
  const [show, setShow] = useState<string>("about");

  return (
    <div className=" w-full flex flex-col gap-4">
      <Navbar setShow={setShow} show={show} />
      {show === "about" && <ABout />}
      {show === "resume" && <Resume />}
      {show === "work" && <Work />}
      {show === "contact" && <Kontak />}
    </div>
  );
};
