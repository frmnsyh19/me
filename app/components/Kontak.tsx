"use client";

import { TextField } from "@mui/material";
import React, { useState } from "react";

export const Kontak = () => {
  const [rows, setRows] = useState<number>(1);

  return (
    <div className="w-full flex flex-col rounded-2xl gap-6 p-4 lg:p-7 bg-slate-800 shadow-2xl">
      <div className=" w-full flex justify-center items-center">
        <p className="text-4xl font-semibold">Get In Touch</p>
      </div>
      <div className=" w-full flex flex-col gap-7 bg-slate-600  p-7 rounded-3xl">
        <TextField
          variant="standard"
          label="name"
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": {
              marginTop: "-7px",
              color: "white",
              fontSize: "19px", // ubah ukuran font label di sini
            },
            "& .MuiInputLabel-shrink": {
              fontSize: "16px", // kalau label mengecil (shrink)
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
        />

        <TextField
          variant="standard"
          label="email"
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": {
              marginTop: "-7px",
              color: "white",
              fontSize: "19px", // ubah ukuran font label di sini
            },
            "& .MuiInputLabel-shrink": {
              fontSize: "16px", // kalau label mengecil (shrink)
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
        />
        <TextField
          id="standard-multiline-static"
          label="message"
          multiline
          rows={rows}
          onClick={() => setRows(3)}
          onFocus={() => setRows(3)}
          onBlur={() => setRows(1)}
          variant="standard"
          sx={{
            input: { color: "white" },
            "& .MuiInputLabel-root": {
              marginTop: "-7px",
              color: "white",
              fontSize: "19px", // ubah ukuran font label di sini
            },
            "& .MuiInputLabel-shrink": {
              fontSize: "16px", // kalau label mengecil (shrink)
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
        />
        <button className=" btn btn-lg rounded-full text-lg">Submit</button>
      </div>
    </div>
  );
};
