import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Humber Sanchez | Proyectos</title>
        <meta
          name="description"
          content="Humber Sanchez Nieto, Ing. de sistemas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mis <a href="#">Proyectos</a>
        </h1>

        {/*  <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>*/}
        <br />

        <div className={styles.grid}>
          <a href="https://quinaerp.com/" className={styles.card}>
            <h2>Quina ERP &rarr;</h2>
            <p>Sitio web informativo desarrollado con el CMS WordPress.</p>
          </a>

          <a href="https://www.gersonmedina.com/" className={styles.card}>
            <h2>Gerson Medina &rarr;</h2>
            <p>
              Portafolio web de fotografía y videos, desarrollado con ReacJs.
            </p>
          </a>

          <a href="https://jopesatools.com/" className={styles.card}>
            <h2>Jopesatools &rarr;</h2>
            <p>
              Plataforma Ecommerce de ferretería, bajo la tecnología de
              WooCommere.
            </p>
          </a>

          <a href="https://www.humbersanchez.com/" className={styles.card}>
            <h2>Humber &rarr;</h2>
            <p>
              Portafolio web minimalista y optimizado, desarrollado con NextJs.
            </p>
          </a>

          <a href="https://appflashservice.com/" className={styles.card}>
            <h2>FlashService &rarr;</h2>
            <p>PWA para el rubro de delivery, implementado con Laravel.</p>
          </a>

          <a href="https://cunia.pe/" className={styles.card}>
            <h2>Cunia &rarr;</h2>
            <p>
              Ecommerce de electrodomésticos desarrollado bajo el CMS de
              WordPress y WooCommere.
            </p>
          </a>
        </div>
        <br />
        <Navbar />
        <br />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
