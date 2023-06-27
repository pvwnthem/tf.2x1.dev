'use client'
import Background from "@components/svg/background"
import Logo from "@components/svg/logo"
import React from "react"

export default function Title() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-48 text-wave-400 md:mb-56">
          <Logo />  
        </div>
        
      <h1 className="md:text-7xl text-6xl md:mb-56 text-wave-100 absolute font-semibold">tf.2x1.dev</h1>
      <Background />
      <div className="absolute bottom-0">
        
      </div>
    </div>
  )
}
