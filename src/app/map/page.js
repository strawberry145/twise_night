"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useStore from "@/app/store/store";
import {
  NasaMission,
  Guide,
  BonusQuiz,
  Congrats,
  ModalComponent,
} from "@/app/utils/Modals";

const GreenBeltComponent = ({ onBuild, onCancel }) => {
  
  return (
    <div className="absolute top-[150px] right-[670px] w-[300px] h-[150px] bg-[#f5e6c4] rounded-xl shadow-lg p-4 text-center">
      <div className="text-lg font-bold text-green-700 mb-2">GREEN BELT</div>
      <div className="text-sm font-semibold mb-4">
        ENERGY +20 &nbsp;&nbsp;&nbsp; MONEY -30
      </div>
      <div className="flex justify-between">
        <button
          className="w-1/2 p-2 bg-yellow-300 hover:bg-yellow-400 rounded-l-md font-semibold"
          onClick={onBuild}
        >
          BUILD
        </button>
        <button
          className="w-1/2 p-2 bg-gray-300 hover:bg-gray-400 rounded-r-md font-semibold"
          onClick={onCancel}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default function Map() {
  const [modalState, setModalState] = useState(0);

  const [showCongrats, setShowCongrats] = useState(false); 
  const offModal = () => setModalState(0);

  const [showComponent, setShowComponent] = useState(false);
  const [buttonImage, setButtonImage] = useState("/assets/greenPlace.png");
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [showCongratsTextModal, setShowCongratsTextModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const money = useStore((state) => state.money);
  const energy = useStore((state) => state.energy)
  const isFinish = useStore((state) => state.isFinish)
  const decreaseMoney = useStore((state) => state.decreaseMoney);
  const increaseEnergy = useStore((state) => state.increaseEnergy)

  const handleButtonClick = () => {
    if (buttonImage !== "/assets/builtGreenPlace.png") {
      setShowComponent(true);
    }
  };

  const handleBuildClick = () => {
    setButtonImage("/assets/builtGreenPlace.png");
    setShowComponent(false);
    increaseEnergy(20);
    decreaseMoney(30);
  };

  const handleCancelClick = () => {
    setShowComponent(false);
  };

  const handleCongratsNext = () => {
    setShowCongratsModal(false);
    setShowCongratsTextModal(true);
  };

  const handleCongratsTextNext = () => {
    setShowCongratsTextModal(false);
    setShowThankYouModal(true);
  };

  useEffect(() => {
    if (isFinish) {
      const timer = setTimeout(() => {
        setShowCongratsModal(true); 
        setShowCongrats(true); 
      }, 2500);
      
      return () => clearTimeout(timer); 
    }
  }, [isFinish]); 
  
  if (isFinish) {
    return <div className="bg-[url('/assets/bonusQuiz/bonusQuizEnding.png')] bg-cover bg-center w-screen h-screen">

     <ModalComponent
        isOpen={showCongratsModal}
        onRequestClose={() => setShowCongratsModal(false)}
      >
        <div className="w-[85vw] h-[70vh] relative flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/assets/congrats.png"
              alt="Congrats"
              layout="fill"
              objectFit="contain"
            />
            <button
              className="absolute bottom-[27px] right-[225px] w-[40px] h-[40px] text-transparent bg-transparent border-none cursor-pointer"
              onClick={handleCongratsNext}
            >
              ▶
            </button>
          </div>
        </div>
      </ModalComponent>

      <ModalComponent
        isOpen={showCongratsTextModal}
        onRequestClose={() => setShowCongratsTextModal(false)}
      >
        <div className="w-[85vw] h-[70vh] relative flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/assets/congratsText.png"
              alt="Congrats"
              layout="fill"
              objectFit="contain"
            />
            <button
              className="absolute bottom-[27px] right-[225px] w-[40px] h-[40px] text-transparent bg-transparent border-none cursor-pointer"
              onClick={handleCongratsTextNext}
            >
              ▶
            </button>
          </div>
        </div>
      </ModalComponent>

      <ModalComponent
        isOpen={showThankYouModal}
        onRequestClose={() => setShowThankYouModal(false)}
      >
        <div className="w-[85vw] h-[70vh] relative flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/assets/thank_you.png"
              alt="Thank You"
              layout="fill"
              objectFit="contain"
            />
            <button
              className="absolute bottom-[27px] right-[225px] w-[40px] h-[40px] text-transparent bg-transparent border-none cursor-pointe"
              onClick={() => setShowThankYouModal(false)}
            >
              ▶
            </button>
          </div>
        </div>
      </ModalComponent>
    </div>
  }
  

  return (
    <>
      <div className="bg-[url('/assets/mainMap.png')] bg-cover bg-center w-screen h-screen">
        <div className="absolute top-10 right-10 bg-slate-300 w-[400px] h-30 rounded-lg opacity-80">
          <div className="m-4 mx-6 text-black text-lg font-bold ">
            <div className="flex justify-between gap-4">
              <div className="h-8">Energy</div>
              <div className="w-[260px] h-8 bg-slate-200 rounded-xl">
                <div className={`h-full bg-green-500 rounded-xl`}  style={{ width: `${energy*2.6}px` }} />
              </div>
            </div>
            <div className="mt-2 flex justify-between gap-4">
              <div className="h-8">Money</div>
              <div className="w-[260px] h-8 bg-slate-200 rounded-xl">
                <div className={`h-full bg-yellow-500 rounded-xl`} style={{ width: `${money*2.6}px` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="absolute top-40 left-60 w-12 h-12 bg-[url('/assets/grayPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute bottom-40 left-[100px] w-12 h-12 bg-[url('/assets/grayPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute top-80 right-60 w-12 h-12 bg-[url('/assets/greenPlace.png')] bg-cover rounded-lg text-white" />
      <button
        className="absolute top-[310px] right-[800px] w-12 h-12 bg-cover rounded-lg text-white"
        style={{ backgroundImage: `url(${buttonImage})` }}
        onClick={handleButtonClick}
      />
      {showComponent && (
        <GreenBeltComponent
          onBuild={handleBuildClick}
          onCancel={handleCancelClick}
        />
      )}
      <button className="absolute bottom-[1300px] left-[120px] w-12 h-12 bg-[url('/assets/yellowPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute top-[400px] right-[700px] w-12 h-12 bg-[url('/assets/yellowPlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute bottom-[120px] right-60 w-12 h-12 bg-[url('/assets/bluePlace.png')] bg-cover rounded-lg text-white" />
      <button className="absolute bottom-[120px] left-60 w-12 h-12 bg-[url('/assets/bluePlace.png')] bg-cover rounded-lg text-white" />
      <button
        className="absolute right-20 top-60 w-[164px] h-[130px] bg-[url('/assets/nasaMission.png')] bg-cover hover:scale-110"
        onClick={() => setModalState(1)}
      />
      <button
        className="absolute right-20 bottom-40 w-[164px] h-20 bg-[url('/assets/guide.png')] bg-cover hover:scale-110"
        onClick={() => setModalState(2)}
      />
      <button className="absolute left-20 top-60 w-[164px] h-20 bg-[url('/assets/build.png')] bg-cover hover:scale-110" />
      <button
        className="absolute left-20 bottom-40 w-[164px] h-[130px] bg-[url('/assets/bonusQuiz.png')] bg-cover hover:scale-110"
        onClick={() => setModalState(3)}
      />

      {modalState === 1 && <NasaMission offModal={offModal}></NasaMission>}
      {modalState === 2 && <Guide offModal={offModal}></Guide>}
      {modalState === 3 && <BonusQuiz offModal={offModal}></BonusQuiz>}
      {modalState === 4 && <Congrats offModal={offModal}></Congrats>}
    </>
  );
}
