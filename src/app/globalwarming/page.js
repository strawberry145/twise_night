"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const LineChart = dynamic(() => import("/src/app/globalwarming/LineChart.js"), {
  ssr: false, 
});

const globalWaringPage = () => {
  const [loading, setLoading]= useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <>
    <div className="bg-customBackGroundColor bg-cover bg-center w-screen h-screen flex justify-center items-center">
      <div className="w-full m-20">
        <LineChart />

      </div>
    </div>
    {loading ? "":<Link href="/onboarding" className="bg-[url('/assets/nextButton.png')] absolute bg-cover w-44 h-20 right-10 bottom-4" /> }
    
    
    </>
  )
};

export default globalWaringPage;
