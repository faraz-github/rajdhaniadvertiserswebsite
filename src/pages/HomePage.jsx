import ContactSection from "../components/ContactSection/ContactSection";
import FeedbackSection from "../components/FeedbackSection/FeedbackSection";
import HeroSection from "../components/HeroSection/HeroSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PortfolioSection />
      <ContactSection />
      <FeedbackSection />
    </>
  );
};

export default HomePage;
