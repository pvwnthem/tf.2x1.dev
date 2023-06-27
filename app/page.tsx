'use client'
import { Navbar } from "@components/navigation/navbar";
import Info from "@components/pages/info";
import Title from "@components/pages/title";
import Background from "@components/svg/background";
import React from "react";

export default function Home() {
  return (
   <div className="bg-background">
    <Navbar />
    <Title />
    <Background />
    <Info />
   </div>
   
  )
}
