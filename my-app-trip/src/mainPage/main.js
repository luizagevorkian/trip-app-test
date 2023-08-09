import React from "react";
import Header from "../components/homepage/header/Header";
import "./main.css";
import Body from "../components/homepage/body/Body";

export default function Mainpage() {
  return (
    <div className="mainpage">
      <div>
        <Header />
        <Body />
      </div>
    </div>
  );
}
