import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import HeroSectionAboutUs from "@/components/landing/HeroSectionAboutus";
import WhoWeAreSection from "@/components/landing/WhoAreWeSection";

const AboutUs = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      <main>
        <HeroSectionAboutUs />
        <WhoWeAreSection />
        {/* <MissionVisionSection />
        <CoreValuesSection />
        <WhyChooseUsSection />
        <CallToActionSection /> */}
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
