import ContactSection from "../components/ContactSection/ContactSection";
import FaqSection from "../components/FAQSection/FaqSection";
import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import HeroSection from "../components/HeroSection/HeroSection";
import UnderMaintenance from "../components/modals/UnderMaintenance";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <FeedbackSection />
      <FaqSection />
      <UnderMaintenance />
    </>
  );
};

export default HomePage;
