"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { ABout } from "./ABout";
import { Resume } from "./Resume";

export const Container = () => {
  const [show, setShow] = useState<string>("about");

  return (
    <div className=" w-full flex flex-col gap-2">
      <Navbar setShow={setShow} show={show} />
      {show === "about" && <ABout />}
      {show === "resume" && <Resume />}
    </div>
  );
};
