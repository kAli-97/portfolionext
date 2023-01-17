import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Atemurtas from "../components/Atemurtas";
import About from "../components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#343a40] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="sec" className="snap-start">
        <Atemurtas />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <Head>
        <title>ALİ TEMURTAŞ</title>
      </Head>
    </div>
  );
}
