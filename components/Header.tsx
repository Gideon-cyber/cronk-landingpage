import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { Button } from "./Button";

type Props = {};

export const Header = (props: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[0] py-4 z-[100] w-full bg-blackSec h-full">
      <nav className="flex justify-center items-center max-w-7xl mx-auto py-2 px-5 md:h-[63px] bg-greyPrim backdrop-blur-xl text-blackPrim border border-[#ebeef1] w-[90%] rounded-3xl">
        <div className="flex items-center flex-wrap justify-between w-full gap-1 transition-all duration-300">
          <span className="font-b-600 font-Bebas md:text-[20px]">
            <Link href="#">Cronkcro</Link>
          </span>
          <div className="flex items-center gap-1 md:hidden">
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
            className={`w-full md:w-auto md:basis-0 border border-blackTert md:border-none rounded-[4px] px-[1rem] py-[0.5rem] transition-all duration-500 ${
              open ? "" : "hidden md:block"
            }  `}
          >
            <ul
              className={`items-center flex flex-col md:flex-row gap-[10px] md:gap-3 bg-blackSec md:bg-transparent text-[16px] md:h-[19px] w-auto md:pt-0 transition-all 
          `}
            >
              <li className="navItem">
                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:telegram" />
                </Link>
              </li>
              <li className="navItem">
                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:discord-alt" />
                </Link>
              </li>
              <li className="navItem">
                <Link href="#" className="text-[22px]">
                  <Icon icon="bxl:twitter" />
                </Link>
              </li>
              <li className="navItem">
                <Link href="/">Instruments</Link>
              </li>
              <li className="navItem">
                <Link href="/about" className="" style={{}}>
                  About
                </Link>
              </li>
              <li className="navItem whitespace-nowrap">
                <Link href="/services">How Buy</Link>
              </li>
              <li className="navItem whitespace-nowrap">
                <Link href="/services">Why Cronkcro</Link>
              </li>
              <li className="navItem whitespace-nowrap">
                <Link href="/services">Tokonomics</Link>
              </li>
              <li className="navItem whitespace-nowrap">
                <Link href="/services">Roadmap</Link>
              </li>

              {/* <li className=""> */}
              {/* <Link href="/contact"> */}
              <Button text="Buy Cron/Cronkcro" bg onClick={() => {}} />
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