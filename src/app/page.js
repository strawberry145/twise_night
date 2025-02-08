"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading]= useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])


  return (
    <div className="bg-customBackGroundColor bg-cover bg-center w-screen h-screen flex justify-center items-center">
      <Image src='/assets/11.png' width="500" height="500"  />
      {loading ? <div className="absolute bottom-10 right-10 text-white">loading...</div> : <Link href="/globalwarming" className="bg-[url('/assets/playButton.png')] absolute bg-cover w-44 h-20 right-10 bottom-4" /> }
    
    </div>
  );
}
