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

export const Instrument = () => {
  const instruments = [
    {
      icon: Picture1,
      title: "Bridge",
      description:
        "Buy and sell popular digital currencies, keep track of them in the one place.",
    },
    {
      icon: Picture2,
      title: "Bridge to join CROnk",
      description:
        "Swap from any +16 EVM chains on xyFinance to $CROnk! Start farming today!",
    },
    {
      icon: Picture3,
      title: "Enter Lottery",
      description:
        "Enter ANY of the 5 lottery pools CROnk Lotto has to offer! Lottery pools include: CROnk, VVS, TONIC, WCRO, CROGE, PEPE",
    },
    {
      icon: Picture4,
      title: "Chart",
      description: "Here is our live chart for our fellow chart enthusiasts:  ",
    },
    {
      icon: Picture5,
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
          <h3 className="font-bold text-[28px] leading-[110%] md:text-[56px] md:leading-[64px]">
            The CROnk MEMEcosystem
          </h3>
          <span className="font-normal text-base text-[#C4C4C4]">
            Experience all of what CROnk has to offer!
          </span>
          <div className="flex flex-col gap-5 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:px-5">
            {instruments.map((instrument, index) => (
              <div
                className="h-full p-8 flex flex-col gap-8 bg-blackTert/50 rounded-[10px] backdrop-blur-[2px]"
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
