import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundImage from "../public/image8.jpeg";
import Button from "./Button";

type Props = {};

const Hero = ({}: Props) => {
  const dispatch = useAppDispatch();
  const {
    youReceiveCoin: receiveCoin,
    youSendCoin: sendCoin,
    showCoinsModal,
    firstCoinClicked,
  } = useAppSelector((state) => state.users);

  return (
    <div className="max-w-7xl md:h-screen mx-auto w-full py-[3rem] bg-hero-pattern bg-center">
      <div className="flex items-center flex-col justify-center gap-5 h-full">
        <div className="flex items-center flex-col gap-5 md:gap-0 justify-center md:flex-row w-[90%] md:w-[70%]">
          {/*Left*/}
          <div className="px-4 md:px-0 flex items-start flex-col gap-5 text-center md:text-left">
            <h1 className="text-[24px] leading-[140%] md:text-[30px] md:leading-[46px] font-bold">
              CronkCro is a peer-to-peer digital asset favoured by reptiles
              worldwide
            </h1>
            <p className="text-[1rem] leading-[1.5rem] md:leading-[32px]">
              Croge is an open source, peer-to-peer digital asset, on the Cronos
              blockchain, favored by reptiles worldwide.
            </p>
            <div className="flex items-center flex-col md:flex-row gap-3 w-full">
              <Button text="MORE INFO" onClick={() => {}} bg />
              <Button
                text="WHITEPAPER"
                onClick={() => {}}
                bg={false}
                color="#fff"
              />
            </div>
          </div>
          {/* Right */}
          <div className="px-4 flex items-center justify-center">
            <Image src={BackgroundImage} alt="image" width={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
