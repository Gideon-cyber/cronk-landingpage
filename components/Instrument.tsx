import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import Picture1 from "../public/picture1.png";
import Picture2 from "../public/picture2.png";
import Picture3 from "../public/picture3.png";
import Picture4 from "../public/picture4.png";
import Picture5 from "../public/picture5.png";
import Picture6 from "../public/picture6.png";
import { motion } from "framer-motion";

export const Instrument = () => {
  const instruments = [
    {
      icon: Picture4,
      title: "Swap",
      description:
        "Buy and sell popular digital currencies, keep track of them in the one place.",
    },
    {
      icon: Picture5,
      title: "Bridge to join CROnk",
      description:
        "Swap from any +16 EVM chains on xyFinance to $CROnk! Start farming today!",
    },
    {
      icon: Picture3,
      title: "Enter Lottery",
      description:
        "Enter ANY of the 6 lottery pools CROnk Lotto has to offer! Lottery pools include: CROnk, VVS, TONIC, WCRO, CROGE, PEPE",
    },
    {
      icon: Picture2,
      title: "Chart",
      description: "Here is our live chart for our fellow chart enthusiasts:  ",
    },
    {
      icon: Picture1,
      title: "Meme machine V2 coming soon",
      description: "Stay up to date on our latest updates and news!",
    },
    {
      icon: Picture6,
      title: "Staking / Ip farms",
      description:
        "Earn $CROnk in the $CROnk single stake to help build your bag, or provide liquidity to earn $CRO! Only on crodex.app",
    },
  ];
  return (
    <div className="w-full pt-[3rem] pb-[4rem] bg-black">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="flex flex-col gap-8 text-center w-[90%] md:w-[80%] mx-auto">
          <motion.h3
            className="font-bold text-[28px] leading-[110%] md:text-[56px] md:leading-[64px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
          >
            The CROnk MEMEcosystem
          </motion.h3>
          <motion.span
            className="font-normal text-base text-[#C4C4C4]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
            }}
            // viewport={{ once: true }}
          >
            Experience all of what CROnk has to offer!
          </motion.span>
          <div className="flex flex-col gap-5 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:px-5">
            {instruments.map((instrument, index) => (
              <motion.div
                className="h-full p-8 flex flex-col gap-8 bg-blackTert/50 rounded-[10px] backdrop-blur-[2px]"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={instrument.icon}
                    alt="image"
                    width={100}
                    height={100}
                    className="object-contain rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-[18px] leading-[120%] font-bold">
                    {instrument.title === "Staking / Ip farms" ? (
                      <div className="flex items-center justify-center gap-3">
                        <Link
                          href="https://swap.crodex.app/#/rewards/boost/single/0x9451617be9DcDd3B4FE3Da1e1d3a10BeCe8Cde77"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <span>Staking</span>
                          <Icon icon="ph:link" />/
                        </Link>
                        <Link
                          href="https://swap.crodex.app/#/rewards/boost/pair/0xbd71f54e44619a3d93dc9d0588b89063b8ed9dc1"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <span>Ip farms</span>
                          <Icon icon="ph:link" />
                        </Link>
                      </div>
                    ) : instrument.title === "Swap" ? (
                      <div className="flex items-center justify-center gap-3">
                        <Link
                          href="https://swap.crodex.app/#/rewards/boost/single/0x9451617be9DcDd3B4FE3Da1e1d3a10BeCe8Cde77"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <span>Swap</span>
                          <Icon icon="ph:link" />
                        </Link>
                      </div>
                    ) : instrument.title === "Bridge to join CROnk" ? (
                      <div className="flex items-center justify-center gap-3">
                        <Link
                          href="https://app.xy.finance/?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&sourceChainId=56&toTokenAddress=0x35bEC47922B187d819C3d71CE872086F22F60477&targetChainId=25&amount=&slippage=9"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <span>Bridge to join CROnk</span>
                          <Icon icon="ph:link" />
                        </Link>
                      </div>
                    ) : instrument.title === "Enter Lottery" ? (
                      <div className="flex items-center justify-center gap-3">
                        <Link
                          href="http://cronklotto.com/"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <span>Enter Lottery</span>
                          <Icon icon="ph:link" />
                        </Link>
                      </div>
                    ) : instrument.title === "Chart" ? (
                      <div className="flex items-center justify-center gap-3">
                        <Link
                          href="https://www.dextools.io/app/en/cronos/pair-explorer/0xd7ed2af5729e7ac1c6bbcd31e3f875fa0c40bb46"
                          className="flex items-center gap-2"
                          target="_blank"
                        >
                          <span>Chart</span>
                          <Icon icon="ph:link" />
                        </Link>
                      </div>
                    ) : (
                      instrument.title
                    )}
                  </h4>
                  <p className="text-[14px] leading-[24px] text-instrument-card-text">
                    {instrument.description}
                  </p>
                  {instrument.title === "Chart" && (
                    <span className="text-[12px] text-white/30">
                      Courtesy of{" "}
                      <Link
                        className="text-white underline"
                        href="https://DEXTools.io"
                        target="_blank"
                      >
                        DEXTools.io
                      </Link>
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
