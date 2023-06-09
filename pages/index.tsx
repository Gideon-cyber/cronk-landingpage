import { GetServerSideProps } from "next";
import Head from "next/head";
import {
  Header,
  Hero,
  Instrument,
  About,
  Why,
  Buy,
  Footer,
} from "../components/";
import { useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const aboutRef = useRef(null);
  const instrumentRef = useRef(null);
  const heroRef = useRef(null);
  const buyRef = useRef(null);
  const whyRef = useRef(null);

  const allRefs = {
    aboutRef,
    instrumentRef,
    heroRef,
    buyRef,
    whyRef,
  };

  return (
    // <div
    //   className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-blackPrim lg:scrollbar-thumb-blackTert  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-blackSec text-whitePrim`}
    // >
    <div className="overflow-clip text-Inter bg-blackSec text-whitePrim">
      <Head>
        <title>Cronk</title>
        <meta
          name="description"
          content="Website landing page for Cronk, a cryptocurrency exchange."
        />
      </Head>
      {/* // <main> */}
      <Header allRefs={allRefs} />
      <section ref={heroRef} id="hero">
        <Hero />
      </section>
      <section ref={instrumentRef} id="instrument">
        <Instrument />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={buyRef} id="buy">
        <Buy />
      </section>
      <section ref={whyRef} id="why">
        <Why />
      </section>

      <Footer />
      {/* // </main> */}

      <ToastContainer autoClose={2000} />
    </div>

    // </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
