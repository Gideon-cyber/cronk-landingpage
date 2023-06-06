import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import axios from "axios";
import { useEffect } from "react";
import { Coin } from "../types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  setReceiveCoin,
  setSendCoin,
  setShowCoinsModal,
} from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Instrument from "../components/Instrument";
import About from "../components/About";

export default function Home() {
  const dispatch = useAppDispatch();
  const { showCoinsModal, youReceiveCoin, youSendCoin, firstCoinClicked } =
    useAppSelector((state) => state.users);

  return (
    <div
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-blackPrim lg:scrollbar-thumb-blackTert  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-blackSec text-whitePrim`}
    >
      <Head>
        <title>Cronk</title>
        <meta
          name="description"
          content="Website landing page for Cronk, a cryptocurrency exchange."
        />
      </Head>

      <main>
        <Header />
        <Hero />
        <Instrument />
        <About />
      </main>

      <footer></footer>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
