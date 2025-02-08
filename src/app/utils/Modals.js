
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import Question1Component from "./Question1Component";
import Question2Component from "./Question2Component";
import useStore from "@/app/store/store";

const NasaMission = (props) => {

  const { offModal } = props;

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-3/4 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-yellow-700 rounded-lg relative">
          <div className="w-full h-full px-20 py-5 bg-yellow-400 rounded-lg flex flex-col">
            <div className="text-7xl pb-5 text-white text-center">MISSION</div>
            <div className="w-full h-full pb-5 flex flex-col border-dashed border-2 border-yellow-800">
              <div className="text-5xl p-3 text-center">
                You are the mayor of <a className="font-bold text-amber-800">Tunisia</a>.<br />
                <br />
                As a mayor, think of a way
                <br /> to reduce carbon dioxide emission.
                <br /> You must adjust the <a className="font-bold">ENERGY & MONEY</a>
                <br /> as follows
              </div>
              <div className="flex flex-row justify-center mt-auto">
                <div className="text-5xl p-3 text-center px-10 font-bold">
                  <a className="text-white">ENERGY</a> over 80
                </div>
                <div className="text-5xl p-3 text-center px-10 font-bold">
                  <a className="text-white">MONEY</a> over 60
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute w-16 h-16 top-4 right-4 bg-[url('/assets/cancel.png')] bg-cover rounded-lg hover:scale-110"
            onClick={offModal}
          ></button>
        </div>
      </div>
    </div>
  );
};

const Guide = (props) => {
  const { offModal } = props;

  const [selectCity, setSelectCity] = useState(true);
  const [selectInfra, setSelectInfra] = useState(false);

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-5/6 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-green-800 rounded-lg relative">
          <div className="w-full h-full px-20 py-5 bg-green-500 rounded-lg flex flex-col">
            <div className="text-7xl pb-5 text-white text-center">GUIDE</div>
            <div className="w-full flex flex-row justify-start">
              <div
                className={`w-48 h-16 flex justify-center items-center ${
                  selectCity === true ? `bg-yellow-300` : `bg-yellow-100`
                }  border-solid border-[4px] border-yellow-800 hover:scale-105 rounded-lg`}
                onClick={() => {
                  setSelectCity(true);
                  setSelectInfra(false);
                }}
              >
                <div className="text-3xl">About City</div>
              </div>
              <div
                className={`w-48 h-16 flex justify-center items-center ${
                  selectInfra === true ? `bg-yellow-300` : `bg-yellow-100`
                } border-solid border-[4px] border-yellow-800 hover:scale-105 rounded-lg`}
                onClick={() => {
                  setSelectCity(false);
                  setSelectInfra(true);
                }}
              >
                <div className="text-3xl">About Infra</div>
              </div>
            </div>
            {selectCity && <CityComponent />}
            {selectInfra && <InfraComponent />}
          </div>
          <button
            className="absolute w-16 h-16 top-4 right-4 bg-[url('/assets/cancel.png')] bg-cover rounded-lg hover:scale-110"
            onClick={offModal}
          ></button>
        </div>
      </div>
    </div>
  );
};

const CityComponent = () => {
  return (
    <div className="w-full h-full py-12 px-20 flex flex-row justify-center items-center bg-yellow-100 border-solid border-[4px] border-yellow-800 rounded-lg">
      <Image src="/assets/earth.png" width="400" height="400" className="p-8" />
      <div className="flex flex-col justify-start items-center ml-32 w-[800px] h-full bg-white border-solid border-black border-[4px]">
        <div className="text-6xl p-8">sousse</div>
        <div className="text-xl text-center p-12">
        A coastal gem bathed in Mediterranean sun, where history and modernity collide. Sousse thrives on tourism and trade, yet faces challenges with urban expansion and environmental sustainability. The golden beaches and historic medina stand as testaments to its rich past, but rising pollution and infrastructure strain demand a balance between growth and preservation. Can Sousse maintain its charm while embracing a greener future?
        </div>
      </div>
    </div>
  );
};

const InfraComponent = () => {
  return (
    <div className="w-full h-full p-4 flex flex-row justify-center items-center bg-yellow-100 border-solid border-[4px] border-yellow-800 rounded-lg">
      <Image src="/assets/guideimage.png" width="1379" height="534" className="w-full h-full" />
    </div>
  );
};

const BonusQuiz = (props) => {
  const { offModal } = props;
  const [quizStep, setQuizStep] = useState(1)
  const toggleIsFinish = useStore((state) => state.toggleIsFinish)

  const handlebeforeStep = () => {
    setQuizStep(prev => prev -1)
  }

  const handleNextStep = () => {
    setQuizStep(prev => prev +1)
  }

  const handleCloseFinishClick = () => {
    toggleIsFinish()
    offModal();
  };

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-3/4 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-blue-700 rounded-lg relative" >
          <button   className={`absolute bottom-0 right-12 w-16 h-16 bg-cover ${quizStep === 1 ? 'bg-[url("/assets/button/play_back_disabled.png")]' : 'bg-[url("/assets/button/play_back.png")]'}`}
  onClick={handlebeforeStep}
  disabled={quizStep === 1}/>
          <button className={`absolute bottom-0 right-0 w-16 h-16 ${quizStep === 7 ? 'bg-[url("/assets/button/play_arrow_disabled.png")]' : 'bg-[url("/assets/button/play_arrow.png")]'} bg-cover`} onClick={handleNextStep} disabled={quizStep >= 7} />
          <div className="w-full h-full bg-blue-500 rounded-lg flex-row justify-center items-center" >
            <div className="h-30 flex justify-center relative">
          <Image src={`/assets/bonusQuiz/bonusQuizSub.png`} width="400" height="200" className="my-8" />
          <button className="absolute w-10 h-10 right-4 top-4 bg-[url('/assets/bonusQuiz/closeButton.png')] bg-cover" onClick={handleCloseFinishClick} />

            </div>
            <div className="flex justify-center">
          {quizStep <5 && <Image src={`/assets/bonusQuiz/bonusQuizModal-${quizStep}.png`} width="1000" height="800" className="my-8" /> }
          {quizStep === 5 && <Question1Component />}
          {quizStep === 6 && <Question2Component />}
          {quizStep === 7 && <Image src={`/assets/bonusQuiz/bonusQuizModal-${quizStep}.png`} width="1000" height="800" className="my-8" /> }
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
};

const Congrats = (props) => {
  const { offModal } = props;

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center"
      onClick={offModal}
    >
      <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
      <div
        className="w-3/4 h-3/4 p-5 z-10 bg-white rounded-lg flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full pb-16 bg-pink-500 rounded-lg">
          <div className="w-full h-full bg-pink-400 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};


const ModalComponent = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex justify-center items-center h-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      {children}
    </Modal>
  );
};

export { NasaMission, Guide, BonusQuiz, Congrats, ModalComponent };

