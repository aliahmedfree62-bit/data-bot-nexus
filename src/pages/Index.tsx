import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Activator from "@/components/Activator";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen relative">
      <Topbar />
      <Navigation />
      <Hero />
      <Benefits />
      <Activator />
      <Blog />
      <Testimonials />
      <FooterBanner />
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-cyan border-2 border-black text-black shadow-lg hover:bg-cyan/90 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default Index;
