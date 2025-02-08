"use client"
import Image from "next/image";
import { useState } from "react";

export default function Question1Component() {


  const [isHovered, setIsHovered] = useState(0);
  const [clicked, setClicked ] = useState(false);

  return <div className="w-[1200px] h-[500px] relative " >
    <Image src="/assets/bonusQuiz/Question1.png" width="600" height="300" className="absolute left-1/2 transform -translate-x-1/2" />
    <div className="w-full h-full m-4 mt-[76px] border-solid border-black rounded-xl border-8 z-10 bg-white flex flex-col justify-center gap-4">
      <div className="mt-20 text-2xl font-bold text-center">
        Which of the Following is not true about solar cycles?
      </div>
      <div className="flex flex-row items-center justify-center gap-10">
        <button className="rounded-full w-20 h-20 font-bold text-[50px] border-solid border-2 border-blue-400 items-center justifty-center hover:bg-blue-600 hover:text-white" onMouseEnter={() => setIsHovered(1)} onMouseLeave={() => setIsHovered(0)}>
        &nbsp; 1 
        </button>
        <div className={`text-xl font-bold w-[800px] border-blue-400 border-2 p-4 ${isHovered === 1 && "bg-blue-600 text-white"} ${clicked && "bg-gray-400"}`}  >
          The Warming over the last few decaces is too rapid to be linked to changes in Earth's orbit, and too large to be caused by soalr activity.
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-10">
        <button className="rounded-full w-20 h-20 font-bold text-[50px] border-solid border-2 border-blue-400 hover:bg-blue-600 hover:text-white items-center justifty-center" onMouseEnter={() => setIsHovered(2)} onMouseLeave={() => setIsHovered(0)}>
          
        &nbsp; 2 
        </button>
        <div className={`text-xl font-bold w-[800px] border-blue-400 border-2 p-4 ${isHovered === 2 ? "bg-blue-600 text-white" : "" } ${clicked && "bg-gray-400"}`}   >
          upcoming Geospace Dynamics Constellation Mission will provide valuable insights into Solar Cycle 26.
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-10 ">
        <button className={`rounded-full w-20 h-20 font-bold text-[50px] border-solid border-2 border-blue-400 hover:bg-blue-600 hover:text-white items-center justifty-center ${clicked && "bg-blue-600 text-white"}`} onClick={() => setClicked(true)} onMouseEnter={() => setIsHovered(3)} onMouseLeave={() => setIsHovered(0)}>
          
        &nbsp; 3
        </button>
        <div className={`text-xl font-bold w-[800px] border-blue-400 border-2 p-4 ${isHovered === 3 ? "bg-blue-600 text-white" : "" } ${clicked && "bg-blue-600 text-white"}` }  >
          The Current scientific consensus is that long and short-term variations in solar activity play a major role in Earth's climate.
        </div>
      </div>

    </div>
  </div>
}
