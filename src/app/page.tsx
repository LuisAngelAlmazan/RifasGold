import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoRifa from "./components/InfoRifa";
import Navbar from "./components/Navbar";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";

export default function Home() {
  return (
    <>
     
      <main>
        <Hero />
        <InfoRifa/>
        <PreguntasFrecuentes/>
      </main>
     
    </>
  );
}
