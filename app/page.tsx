'use client'
import { Navbar } from "@components/navigation/navbar";
import Background from "@components/svg/background";
import React from "react";

export default function Home() {
  return (
   <div className="bg-background">
    <Navbar />
    <Background />
   </div>
   
  )
}
