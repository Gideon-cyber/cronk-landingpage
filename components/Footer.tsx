import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/logo.jpeg";
import { handleScrollToSection } from "../utils";

interface Props {
  allRefs: any;
}

export const Footer = ({ allRefs }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <footer className="w-full bg-blackSec py-[3rem]">
      <div className="flex items-center flex-col justify-center max-w-7xl mx-auto w-full gap-9 px-5">
        <div className="flex items-start flex-col md:flex-row gap-4 justify-between w-full">
          <span
            className="font-b-600 font-Bebas md:text-[20px] cursor-pointer flex items-center gap-2"
            onClick={() => handleScrollToSection(allRefs?.heroRef, setOpen)}
          >
            {/* <Link href="#"> */}
            <Image src={Logo} alt="logo" width={40} />
            <span>Cronkcro</span>
            {/* </Link> */}
          </span>
          <div className="flex items-start text-[14px] gap-6">
            <div className="flex items-start flex-col text-[14px] gap-4">
              <Link
                href="https://medium.com/@cronktoshicronkamoto"
                className="flex items-center gap-2"
                target="_blank"
              >
                <span>Medium Profile</span>
                <Icon icon="ph:link" />
              </Link>
              <Link
                href="https://app.withmantra.com/loans/pool/0xb99c7e9abf010254a3c1fa0df1c1fd1d5baac8fddb4fe3732823cf681ad33c8d?chain_id=25"
                className="flex items-center gap-2"
                target="_blank"
              >
                <span>Nft Lending</span>
                <Icon icon="ph:link" />
              </Link>
              <Link
                href="http://cronklotto.com/"
                className="flex items-center gap-2"
                target="_blank"
              >
                <span>CROnk Lotto</span>
                <Icon icon="ph:link" />
              </Link>
              <Link
                href="https://cronk.netlify.app/"
                className="flex items-center gap-2"
                target="_blank"
              >
                <span>Meme machine v1</span>
                <Icon icon="ph:link" />
              </Link>
            </div>
            <div className="flex items-start flex-col text-[14px] gap-4">
              <Link href="" className="flex items-center gap-2" target="_blank">
                <span>Secondary markets</span>
                <Icon icon="ph:link" />
              </Link>
              <Link
                href="https://app.xy.finance/?fromTokenAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&sourceChainId=56&toTokenAddress=0x35bEC47922B187d819C3d71CE872086F22F60477&targetChainId=25&amount&slippage=9"
                className="flex items-center gap-2"
                target="_blank"
              >
                <span>Bridge to CROnk</span>
                <Icon icon="ph:link" />
              </Link>
              <Link href="" className="flex items-center gap-2" target="_blank">
                <span>Swap/farm cronk</span>
                <Icon icon="ph:link" />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://t.me/CROnkCoin"
              className="text-[22px]"
              target="_blank"
            >
              <Icon icon="bxl:telegram" />
            </Link>

            <Link
              href="https://discord.com/invite/26kwVU6NBY"
              className="text-[22px]"
              target="_blank"
            >
              <Icon icon="bxl:discord-alt" />
            </Link>

            <Link
              href="https://twitter.com/cronkcro"
              className="text-[22px]"
              target="_blank"
            >
              <Icon icon="bxl:twitter" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="w-full h-[2px] bg-blackTert"></div>
          <span className="text-[12px] leading-[20px] text-white/30">{`Copyright © ${new Date().getFullYear()}. CronkCro`}</span>
        </div>
      </div>
    </footer>
  );
};
