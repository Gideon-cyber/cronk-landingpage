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
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Loader from "../public/loader.gif";

export default function Home() {
  const aboutRef = useRef(null);
  const instrumentRef = useRef(null);
  const heroRef = useRef(null);
  const buyRef = useRef(null);
  const whyRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const allRefs = {
    aboutRef,
    instrumentRef,
    heroRef,
    buyRef,
    whyRef,
  };

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    // <div
    //   className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar-track-blackPrim lg:scrollbar-thumb-blackTert  lg:scrollbar-thumb-rounded-xl lg:scrollbar-thin text-Inter bg-blackSec text-whitePrim`}
    // >
    <div className="overflow-clip text-Inter bg-white text-whitePrim">
      <Head>
        <title>Cronk</title>
        <meta
          name="description"
          content="Website landing page for Cronk, a cryptocurrency exchange."
        />
      </Head>
      {/* // <main> */}
      <div>
        {loading ? (
          <div className="w-full h-screen flex items-center justify-center">
            <Image src="/loader.gif" alt="loader" width={400} height={400} />
          </div>
        ) : (
          <div className="overflow-clip text-Inter bg-blackSec text-whitePrim">
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

            <Footer allRefs={allRefs} />
            {/* // </main> */}

            <ToastContainer autoClose={2000} />
          </div>
        )}
      </div>
    </div>

    // </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
