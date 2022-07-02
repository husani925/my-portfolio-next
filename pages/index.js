import Head from "next/head";
import Image from "next/image";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Humber Sanchez | Home</title>
        <meta
          name="description"
          content="Humber Sanchez Nieto, Ing. de sistemas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          className={styles.imglogo}
          src="/humber-perfil.jpg"
          alt="Humber Sanchez Nieto"
          width={150}
          height={150}
        />
        <h1 className={styles.title}>
          Welcome to <a href="#">Humber.</a>
        </h1>

        <p className={styles.description}>
          Hola!👋, mi nombre es Humber Sanchez Nieto, Ing. de Sistemas
          apasionado por la tecnología.
        </p>
        <h2>Habilidades</h2>
        <code className={styles.code}>
          <span>{`<ul>`}</span> <br />
          <span className={styles.codelist}>{`<li> NextJs </li>`}</span>
          <br />
          <span className={styles.codelist}>{`<li> Reactjs </li>`}</span>
          <br />
          <span className={styles.codelist}>{`<li> MySql </li>`}</span>
          <br />
          <span className={styles.codelist}>{`<li> Git </li>`}</span>
          <br />
          <span className={styles.codelist}>{`<li> Laravel </li>`}</span>
          <br />
          <span className={styles.codelist}>{`<li> WordPress </li>`}</span>
          <br />
          <span className={styles.codelist}>{`<li> Linux </li>`}</span>
          <br />
          <span>{`</ul>`}</span>
        </code>
        <br />
        <Navbar />
        <br />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
