import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOW IT WORKS", path: "/how-it-works" },
    { name: "PORTAL", path: "/portal" },
    { name: "PRICE", path: "/price" },
    { name: "FORMATS", path: "/formats" },
    { name: "CLIENTS", path: "/clients" },
    { name: "DOWNLOAD", path: "/download" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        className={`fixed left-0 right-0 z-40 border-b border-border transition-all duration-500 ${
          isScrolled ? "top-0 bg-background shadow-md" : "top-12 bg-background"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-4 h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://www.lurity.com/logo.jpg"
                alt="Lurity Logo"
                className="h-10 w-auto max-w-[178px]"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden w-full lg:flex items-center justify-between gap-4 text-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-semibold text-black hover:text-cyan transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Launch Button (Desktop) */}
            <div className="hidden lg:block">
              <Button className="bg-cyan hover:bg-cyan/80 text-black font-bold px-5 py-7 rounded-sm shadow-md">
                LAUNCH CAMPAIGN
              </Button>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <button
              className="lg:hidden text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu --- */}
        <div
          className={`lg:hidden bg-black border-t border-border absolute left-0 w-full transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-white hover:text-cyan transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Button
              onClick={() => setMenuOpen(false)}
              className="bg-cyan w-9/12 hover:bg-cyan/80 text-black font-bold px-6 rounded-sm shadow-md"
            >
              LAUNCH CAMPAIGN
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer so content isn’t hidden behind navbar */}
      <div className="md:h-[40px] lg:h-[80px]" />
    </nav>
  );
};

export default Navigation;
