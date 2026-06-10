import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import What from "@/components/What";
import Services from "@/components/Services";
import Availability from "@/components/Availability";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <UseCases />
        <What />
        <Services />
        <Availability />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
