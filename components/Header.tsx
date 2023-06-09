import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { Button } from "./Button";
import Logo from "../public/logo.jpeg";
import Image from "next/image";
import { handleScrollToSection } from "../utils";

type Props = {
  allRefs: any;
};

export const Header = ({ allRefs }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <header className="sticky top-[0] py-4 z-[100] w-full bg-blackSec h-full">
      <nav className="flex justify-center items-center max-w-7xl mx-auto py-2 px-5 md:h-[63px] bg-greyPrim backdrop-blur-xl text-blackPrim border border-[#ebeef1] w-[90%] rounded-3xl relative">
        <div className="flex items-center flex-wrap justify-between w-full gap-1 transition-all duration-300">
          <span
            className="font-b-600 font-Bebas md:text-[20px] cursor-pointer flex items-center gap-2"
            onClick={() => handleScrollToSection(allRefs?.heroRef, setOpen)}
          >
            {/* <Link href="#"> */}
            <Image src={Logo} alt="logo" width={40} />
            <span>Cronkcro</span>
            {/* </Link> */}
          </span>
          <div className="flex items-center gap-1">
            <div
              className="border rounded-[4px] border-blackTert p-[0.45rem] text-[1.4rem]"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Icon icon="bx:menu-alt-right" />
            </div>
          </div>
          <div
            className={`w-full md:w-[400px] md:basis-0 border border-blackTert md:border-none rounded-[4px] px-[1rem] py-[0.5rem] transition-all duration-500 bg-white absolute h-screen ${
              open ? "right-0 top-[63px]" : "-right-[1400px] top-[63px]"
            }  `}
          >
            <ul
              className={`items-center flex flex-col gap-[10px] md:gap-3 md:bg-transparent text-[16px] w-auto md:pt-0 transition-all 
          `}
            >
              <li className="navItem flex items-center gap-5">
                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:telegram" />
                </Link>

                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:discord-alt" />
                </Link>

                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:twitter" />
                </Link>
              </li>

              <li
                className="navItem"
                onClick={() =>
                  handleScrollToSection(allRefs?.instrumentRef, setOpen)
                }
              >
                {/* <Link href="/#instrument"> */}
                CROnk MEMEcosystem
                {/* </Link> */}
              </li>
              <li
                className="navItem"
                onClick={() =>
                  handleScrollToSection(allRefs?.aboutRef, setOpen)
                }
              >
                {/* <Link href="/#about" className="" style={{}}> */}
                About Cronkcro
                {/* </Link> */}
              </li>
              <li
                className="navItem whitespace-nowrap"
                onClick={() => handleScrollToSection(allRefs?.buyRef, setOpen)}
              >
                {/* <Link href="/#buy"> */}
                Swap to Cronk
                {/* </Link> */}
              </li>
              <li
                className="navItem whitespace-nowrap"
                onClick={() => handleScrollToSection(allRefs?.whyRef, setOpen)}
              >
                {/* <Link href="/#why"> */}
                Lending Pool
                {/* </Link> */}
              </li>
              {/* <li className="navItem whitespace-nowrap">
                <Link href="/services">Tokonomics</Link>
              </li> */}
              {/* <li className="navItem whitespace-nowrap">
                <Link href="/services">Roadmap</Link>
              </li> */}

              {/* <li className=""> */}
              {/* <Link href="/contact"> */}
              <Button
                text="Buy CROnk on crodex"
                bg
                onClick={() => {
                  handleLinkClick("https://crodex.app/swap");
                }}
              />
              {/* </Link> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

// export default Header;
