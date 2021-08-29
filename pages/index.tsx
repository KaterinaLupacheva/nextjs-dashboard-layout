import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import { Container } from "../styles/styled";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Nextjs Dashboard Layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </Container>
  );
};

export default Home;
