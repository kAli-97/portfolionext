import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Atemurtas from "../components/Atemurtas";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#000000] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>ALİ TEMURTAŞ</title>
      </Head>
      <Header />
      <section id="sec" className="snap-start">
        <Atemurtas />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="footer" className="snap-end">
        <Footer />
      </section>
    </div>
  );
}
