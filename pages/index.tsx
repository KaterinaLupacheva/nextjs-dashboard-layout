import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Container } from "../styles/styled";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Nextjs Dashboard Layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
