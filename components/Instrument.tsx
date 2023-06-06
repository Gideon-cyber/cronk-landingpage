import Image from "next/image";
import React from "react";

const Instrument = () => {
  const instruments = [
    {
      icon: "https://crogecoin.com/icons/bridge-icon.svg",
      title: "Bridge",
      description:
        "Buy and sell popular digital currencies, keep track of them in the one place.",
    },
    {
      icon: "https://crogecoin.com/icons/cross-icon.svg",
      title: "Cross Chain Swap",
      description:
        "Stay on top of the markets with the Cryptolly app for Android or iOS.",
    },
    {
      icon: "https://crogecoin.com/icons/dapp-icon.svg",
      title: "Dapp",
      description: "Our decentralized apps for our Cronos and Croge community",
    },
    {
      icon: "https://crogecoin.com/icons/chart-icon.svg",
      title: "Chart",
      description: "Here is our live chart for our fellow chart enthusiasts:  ",
    },
    {
      icon: "https://crogecoin.com/icons/news-icon.svg",
      title: "News",
      description: "Stay up to date on all things Croge and Cronos!",
    },
    {
      icon: "https://crogecoin.com/icons/nft-contest-icon.svg",
      title: "Partnership",
      description:
        "Our main goal is to have several projects built on the Cronos chain in the coming months.",
    },
  ];
  return (
    <div className="w-full py-[3rem] bg-black">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="flex flex-col gap-8 text-center w-[90%] md:w-[70%] mx-auto">
          <h3 className="font-bold text-[28px] leading-[110%] md:text-[56px] md:leading-[64px]">
            Croge instruments
          </h3>
          <span className="font-normal text-base text-[#C4C4C4]">
            Croge has a variety of features that make it the best place to start
            trading
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
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-[18px] leading-[120%] font-bold">
                    {instrument.title}
                  </h4>
                  <p className="text-[14px] leading-[24px] text-instrument-card-text">
                    {instrument.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instrument;
