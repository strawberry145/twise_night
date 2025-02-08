"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Onboarding() {
  const [openingNumber, setOpenNumber] = useState(1)
  const router = useRouter()
  
  useEffect(() => {
    if (openingNumber < 6) {
      const timer = setTimeout(() => {
        setOpenNumber(prev => prev + 1);
      }, 2500); 
      return () => clearTimeout(timer); 
    } else {
      
      router.push('/map');
    }
  }, [openingNumber, router]);


  return <>
    <div className="bg-customBackGroundColor bg-cover bg-center w-screen h-screen flex justify-center items-center ">
      <Image src='/assets/11.png' width="1000" height="1000" className="absolute opacity-50"  />
      <Image src='/assets/character.png' width="400" height="1000" className="z-10 left-80" />
      <Image src={`/assets/bubble.png`} width="500" height="500" className="z-10 mb-[400px] opacity-0 transition-opacity duration-1000 ease-in-out" onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
 />
    </div>
  </>
}