import Image from "next/image";
import styles from "./page.module.css";
import IngresoCancion from "./components/IngresoCancion";
import Titulo from "./components/Titulo";

export default function Home() {
  return (
    <>
      
      <main className={styles.main}>
        <Titulo texto={"¿Qué canción es?"}></Titulo>
        <IngresoCancion></IngresoCancion>
      </main>
    </>
  );
}
