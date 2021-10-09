import React, { useEffect, useState } from "react";
import "./header.scss";
import image from "../../assets/sriram_normal.jpg";
import bwimage from "../../assets/sriram_bnw.jpg";

export default function Header() {
  return (
    <div className="header-container">
      <h1>SR</h1>
      <h2>Sriram</h2>
    </div>
  );
}
