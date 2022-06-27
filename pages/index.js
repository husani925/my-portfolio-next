import Head from "next/head";
import Image from "next/image";
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
        <a
          href="mailto:hola@humbersanchez.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.imgemail}>
            <Image
              src="/mail.svg"
              alt="Email Humber Sanchez Nieto"
              width={40}
              height={20}
            />
            <b>hola@humbersanchez.com</b>
          </span>
        </a>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Patrocinado por
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
