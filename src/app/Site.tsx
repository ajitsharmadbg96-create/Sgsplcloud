import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSlider } from "./components/HeroSlider";
import { ProductLogos } from "./components/ProductLogos";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { MailSolution } from "./components/MailSolution";
import { VideoSection } from "./components/VideoSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { loadSiteData, type SiteData } from "./store";

export default function Site() {
  const [data, setData] = useState<SiteData>(loadSiteData());

  useEffect(() => {
    const update = () => setData(loadSiteData());
    window.addEventListener("sitedata", update);
    return () => window.removeEventListener("sitedata", update);
  }, []);

  return (
    <div className="min-h-screen font-['Inter']">
      <Navbar settings={data.settings} contact={data.contact} />
      <HeroSlider />
      <ProductLogos />
      <Services services={data.services} />
      <About about={data.about} />
      <WhyUs />
      <MailSolution />
      <VideoSection />
      <Contact contact={data.contact} />
      <Footer settings={data.settings} contact={data.contact} services={data.services} />
    </div>
  );
}
