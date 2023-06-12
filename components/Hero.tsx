import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackgroundImage from "../public/banner.jpeg";
import { Button } from "./Button";
import { motion } from "framer-motion";

type Props = {};

export const Hero = ({}: Props) => {
  return (
    <div className="max-w-7xl md:h-screen mx-auto w-full pt-[3rem] pb-[4rem] bg-hero-pattern bg-center">
      <div className="flex items-center flex-col justify-center gap-5 h-full">
        <div className="flex items-center flex-col gap-5 justify-center md:flex-row w-[90%] md:w-[70%]">
          {/*Left*/}
          <motion.div
            initial={{
              opacity: 0,
              y: 200,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 md:px-0 flex items-start flex-col gap-5 text-center md:text-left"
          >
            <h1 className="text-[24px] leading-[140%] md:text-[30px] md:leading-[46px] font-bold">
              WELCOME TO CRONK!
            </h1>
            <p className="text-[1rem] leading-[1.5rem] md:leading-[32px]">
              Where blockchain innovation, community spirit, and a good laugh
              merge to redefine the crypto experience
            </p>
            {/* <div className="flex items-center flex-col md:flex-row gap-3 w-full">
              <Button text="Cronk Twitter" onClick={() => {}} bg />
              <Button
                text="Cronk Medium"
                onClick={() => {}}
                bg={false}
                color="#fff"
              />
            </div> */}
            <div className="flex items-center flex-col w-full md:flex-row gap-3">
              <Link
                href="https://medium.com/@cronktoshicronkamoto"
                target="_blank"
                className="rounded-full border-[2px] w-full md:w-auto md:rounded-[8px]  px-11 py-3 flex items-center justify-center whitespace-nowrap gap-2 bg-black border-black"
              >
                <Icon icon="bi:medium" />
                <span className="">Cronk Medium</span>
              </Link>
              <Link
                href="https://twitter.com/cronkcro"
                target="_blank"
                className="rounded-full border-[2px] w-full md:w-auto md:rounded-[8px]  px-11 py-3 flex items-center justify-center whitespace-nowrap gap-2"
              >
                <Icon icon="bxl:twitter" />
                <span className="">Cronk Twitter</span>
              </Link>
            </div>
          </motion.div>
          {/* Right */}
          <motion.div
            initial={{
              y: -200,
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="px-4 flex items-center justify-center"
          >
            <Image src={BackgroundImage} alt="image" width={700} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
