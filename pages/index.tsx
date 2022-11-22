import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Services from "../components/Services";
export default function Home() {
  return (
    <div>
      <Head>
        <title>saltwatercode</title>
        <meta name="description" content="Saltwatercode" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
