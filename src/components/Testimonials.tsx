"use client";
import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  image: string;
  name: string;
  position: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    image: "https://www.lurity.com/customerReviews/ZSS.png",
    name: "Marek Lukoťka",
    position: "CMO, Železničná spoločnosť Slovensko",
    quote:
      "I really appreciate the connection of the online and offline world. It is also interesting for me that we know how many and what people really saw our OOH advertising, which is quite complicated with other OOH media.",
  },
  {
    image: "https://www.lurity.com/customerReviews/orange.png",
    name: "Radka Petricova",
    position: "Media Coordinator, Orange Slovensko",
    quote:
      "The concept itself caught my attention, especially because it's a Slovak product. At Lurity, I appreciate the UI interface, which is very user-friendly and intuitive.",
  },
  {
    image: "https://www.lurity.com/customerReviews/profit_365.png",
    name: "Ing. Tomáš Krajčovič",
    position: "Marketing & Sales Manager, PROFIT 365",
    quote:
      "The speed with which we can create an advertising campaign and adjust it on the go brings flexibility to the world of OOH advertising.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Sarah Johnson",
    position: "Brand Manager, Nova Media",
    quote:
      "The planning software is incredibly easy to use. We saw immediate improvements in ad reach.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "James Lee",
    position: "Founder, VisionX",
    quote:
      "I love how fast and transparent the campaign deployment process is. Highly recommended!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Maria Gonzalez",
    position: "Operations Head, AdLink",
    quote:
      "Customer service is top-notch. Lurity makes everything effortless and professional.",
  },
];

export default function TestimonialsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400; // adjust this to control scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-6xl font-bold">
            What our customers think of us
          </h2>
        </div>

        {/* Slider Wrapper */}
        <div className="relative flex items-center">
          {/* Left Arrow - hidden on small screens */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex p-3 rounded-full bg-muted hover:bg-muted/70 transition absolute left-0 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2 md:px-12"
          >
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-[300px] md:w-[400px] lg:w-[600px] flex-shrink-0 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="w-12 h-12 text-cyan opacity-20 absolute top-6 right-6" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.quote}"
                </p>
              </Card>
            ))}
          </div>

          {/* Right Arrow - hidden on small screens */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex p-3 rounded-full bg-muted hover:bg-muted/70 transition absolute right-0 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
