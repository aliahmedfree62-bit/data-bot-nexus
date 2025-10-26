import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  "https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVvdGVzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1567219934540-9f75f7b87552?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cXVvdGVzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1698620225002-36b415f78d57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHF1b3Rlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1641673840250-2843679337f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHF1b3Rlc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % logos.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20  overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
              Lurity
              <br />
              <span className="inline-block">Intelligent Ad.</span>
              <br />
              <span className="inline-block">step ahead.</span>
            </h1>

            <p
              className="text-base md:text-lg text-foreground/80 max-w-xl opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              Advertising network of 600 digital screens in 3 countries, at the
              busiest places with a monthly viewing of 15 million people. The
              most effective medium for online activation.
            </p>

            <div
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Button className="bg-cyan hover:bg-cyan/90 hover:scale-105 text-black font-bold px-8 py-8 text-lg rounded-lg shadow-cyan group transition-all duration-300">
                I'M INTERESTED
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Main Phone Mockup */}
            <div className="relative w-[300px] lg:w-[350px] mx-auto">
              {/* Slider Container */}
              <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
                {/* Main Image */}
                <div className="bg-black rounded-[2.5rem] aspect-[9/19] flex items-center justify-center overflow-hidden">
                  <img
                    src={logos[current]}
                    alt="Lurity"
                    className="w-full object-contain transition-all duration-700"
                  />
                </div>

                {/* Bottom Image (static) */}
                <div className="absolute w-full bg-black -bottom-0 -left-0  rounded-full  flex flex-row items-center justify-center gap-2 h-28 mt-4">
                  <img
                    src="/lurity.png"
                    alt="Lurity Body"
                    className="w-52 object-contain"
                  />
                </div>

                {/* Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute hidden left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  <ChevronLeft className="w-6 h-6 text-black" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute hidden right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              </div>
            </div>

            {/* Floating Stat Cards */}

            {/* Stats Box with Ripple Effect */}
            {/* Ripple border effect */}
            <div className="absolute z-30 left-16 -top-5 inset-0 ">
              <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute z-30 left-10 -top-10 bg-pink-600 px-8 py-4 rounded-3xl shadow-lg shadow-pink-700/40">
              <div className="flex flex-col items-center justify-around h-24">
                <div className="text-xs font-semibold mb-1">VIEWS PER YEAR</div>
                <div className="text-4xl font-black">55 mil.</div>
              </div>
            </div>

            {/* Stats Box with Ripple Effect */}
            {/* Ripple border effect */}
            <div className="absolute z-30 top-[36%] -right-6">
              <div className="bg-gray-400 w-24 px-16 py-10 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute z-30 top-1/3 -right-12  bg-lime px-8 py-4 rounded-3xl shadow-lg shadow-pink-700/40">
              <div className="flex flex-col items-center justify-around h-24">
                <div className="text-xs font-semibold mb-1">
                  VIEWS PER MONTH
                </div>
                <div className="text-4xl font-black">15mil.</div>
              </div>
            </div>

            {/* Stats Box with Ripple Effect */}
            {/* Ripple border effect */}
            <div className="absolute z-30 bottom-8 -left-8">
              <div className="bg-gray-400 w-20 px-12 py-12 h-24 rounded-md border-2 border-transparent opacity-60 animate-border-expand"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute z-30 bottom-5 -left-12 bg-yellow px-8 py-4 rounded-3xl shadow-lg shadow-pink-700/40">
              <div className="flex flex-col items-center justify-around h-24">
                <div className="text-xs font-semibold mb-1">SCREENS </div>
                <div className="text-4xl font-black">600</div>
              </div>
            </div>

            {/* Floating People Images */}
            <div
              className="absolute top-1/3 -left-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float delay-300"
              style={{ animationDelay: "0.3s" }}
            >
              <img
                src="/1.png"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute top-4 -right-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float"
              style={{ animationDelay: "0.7s" }}
            >
              <img
                src="/2.jpg"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute bottom-4 -right-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src="/3.jpg"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Dots */}
            <div
              className="absolute top-1/4 left-20 w-4 h-4 bg-cyan rounded animate-float"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="absolute z-30 bottom-52 left-0 w-4 h-4 bg-blue-700 rounded animate-float"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute z-30 top-0 right-24 w-4 h-4 bg-lime rounded animate-float"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute z-30 bottom-48 right-10 w-5 h-5 bg-yellow rounded animate-float"
              style={{ animationDelay: "1.1s" }}
            ></div>
            <div
              className="absolute z-30 bottom-40 -right-10 w-3 h-3 bg-magenta rounded animate-float"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <section className="relative mt-2 py-20 bg-gradient-magenta">
        <div className="mx-auto flex flex-col items-start px-6 lg:px-40 lg:flex-row lg:items-center xl:pr-40">
          {/* <!-- Image Section --> */}
          <div className="image-container mb-6 w-full sm:w-auto lg:mb-0 lg:mr-10">
            <img
              src="https://www2.lurity.com/sites/default/files/dooh.jpg"
              alt="OOH is growing globally"
              className="tab-image w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* <!-- Text Section --> */}
          <div className="text-start md:text-start">
            <p className="font-medium uppercase text-black/80 mb-2">
              22 OCTOBER 2025
            </p>

            <h2 className="font-bold text-[24px] leading-none text-gray-900 md:text-[36px]">
              OOH is growing globally – and it’s DOOH that’s driving it forward.
            </h2>

            {/* <!-- Button --> */}
            <div className="action-container mt-4">
              <button className="web-button flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[--why-banner-bg-color] px-6 py-[18px]  uppercase tracking-widest text-black font-bold shadow-md transition-all hover:opacity-90">
                <span>Read more</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
