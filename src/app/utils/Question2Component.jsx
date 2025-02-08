import Image from "next/image";

export default function Question2Component({setQuizStep}) {
  const buttonClick = () => {
    setQuizStep(prev => prev +1)
  }
  return <div className="w-[1200px] h-[500px] relative " >
    <Image src="/assets/bonusQuiz/Question1.png" width="600" height="300" className="absolute left-1/2 transform -translate-x-1/2" />
    <div className="w-full h-full m-4 mt-[76px] border-solid border-black rounded-xl border-8 z-10 bg-white flex flex-col justify-center gap-4">
      <div className="mt-20 text-2xl font-bold text-center">
      According to IPCC, what plays the biggest role in Earth's climate change?

      </div>
      <textarea placeholder="Type here..." className="border-2 border-solid border-blue-600 w-[1000px] h-80 ml-20 text-base p-4 "/>
      
    </div>
  </div>
}
