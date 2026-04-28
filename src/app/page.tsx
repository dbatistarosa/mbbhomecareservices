import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoWeServe from "@/components/WhoWeServe";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoWeServe />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
