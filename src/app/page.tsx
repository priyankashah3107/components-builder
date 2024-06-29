"use client";
import React, { useState } from "react";
import RightSideBar from "@components/Sidebar";
import Image from "next/image";
import MyHome from "../components/MyHome"
export default function Home() {
  const [formData, setFormData] = useState({
    // heading: "Welcome to",
    // description:
    //   "Anim aute id magna aliqua ad ad non deserunt sunt.ua ad ad non deserunt sunt...",
    // image:
    //   "https://liftlearning.com/wp-content/uploads/2020/09/default-image-300x169.png",
    // headingspan: "Hero Title Span",
    // afterheadingspan: "",
    // id: "",
    // alt: "Image Alt",
    // buttons: [{ name: "Contact", url: "" }],
    
  });





  const updateFormData = (newFormData: any) => {
    setFormData(newFormData);
  };

  

  return (
      <>

      


    <div className=" border border-black mr-80">

    <MyHome />

      <RightSideBar formData={formData} updateFormData={updateFormData} />
    </div>
    </>
  );
}
