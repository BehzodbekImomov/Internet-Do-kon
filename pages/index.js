import { Inter } from "next/font/google";
import Intro from "@/components/Intro";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Products from "@/components/Products";
import Shop from "@/components/Shop";
import GlobalBlog from "@/components/GlobalBlog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>SLIKROUTE</title>
      </Head>
      <Intro />
      <Products/>
      <Shop/>
      <GlobalBlog/>
    </>
  );
}
