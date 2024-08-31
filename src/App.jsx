import Cases from "./components/Cases";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Konsultasi from "./components/Konsultasi";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Team from "./components/Team";
import Welcome from "./components/Welcome";

function App() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Welcome />
      <Section5 />
      <Section4 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Cases/>
      <Konsultasi/>
      <Team/>
      <Footer/>
    </main>
  );
}

export default App;
