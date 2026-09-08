import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import LogoBar from "@/components/LogoBar/LogoBar";
import Features from "@/components/Features/Features";
import Industries from "@/components/Industries/Industries";
import Integrations from "@/components/Integrations/Integrations";
import Calculator from "@/components/Calculator/Calculator";
import FAQ from "@/components/FAQ/FAQ";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <Industries />
        <Integrations />
        <Calculator />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
