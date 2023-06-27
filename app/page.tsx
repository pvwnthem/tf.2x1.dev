'use client'
import Wrapper from "@components/auth/Wrapper";
import RedirectIfAuth from "@components/auth/redirectIfAuth";
import { Navbar } from "@components/navigation/navbar";
import Info from "@components/pages/info";
import Title from "@components/pages/title";
import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const session = useSession()
  return (
   <div className="bg-background">
    <Wrapper session={session}>
        <Navbar />
        <Title />
        <div id="info">
          <Info />
        </div>
    </Wrapper>
   </div>
   
  )
}
 