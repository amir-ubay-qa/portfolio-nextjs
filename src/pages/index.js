import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillSets from "./components/Skills";
import ExpList from "./components/Experiences";
import ProjectList from "./components/Portfolio";
import Divider from "./components/Util";
import Footer from "./components/Footer";
import Services from "./components/Whatido";

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
        <Services />
        <Divider />
        <ExpList />
        {/* <Divider />
        <ProjectList /> */}
        <Footer />
      </main>
    </>
  );
}
