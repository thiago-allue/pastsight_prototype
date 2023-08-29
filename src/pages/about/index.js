import {Outlet} from "react-router-dom";
import React from "react";

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet/>
    </div>
  );
}