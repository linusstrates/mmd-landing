import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Products } from "@/components/Products";
import { Partners } from "@/components/Partners";
import { CtaBand } from "@/components/CtaBand";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Stats />
      <Products />
      <Partners />
      <CtaBand />
      <Contact />
      <Footer />
    </>
  );
}
