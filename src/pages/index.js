import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillSets from "./components/Skills";
import ExpList from "./components/Experiences";
import { Divider } from "./components/Util";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Amir Ubay - QA Engineer</title>
        <meta
          name="description"
          content="Ubaidillah Amir Quality Assurance Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <SkillSets />
        <Divider />
        <ExpList />
        <Footer />
      </main>
    </>
  );
}
