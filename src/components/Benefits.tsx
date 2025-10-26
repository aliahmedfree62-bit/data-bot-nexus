import { MapPin, Target, Clock, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Top places",
      description: "We are where the most people are",
    },
    {
      icon: Target,
      title: "Choose locations",
      description: "From hundreds of DOOH in the Czech or Slovak Republic.",
    },
    {
      icon: Clock,
      title: "Timing",
      description: "You plan when and how long the campaign will run.",
    },
    {
      icon: ImageIcon,
      title: "Visual or spot?",
      description: "Or multiple for a campaign? Change anytime.",
    },
  ];

  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start ">
        {/* Left Column: Heading + Button */}
        <div className="flex flex-col items-start space-y-10">
          <h2 className="text-5xl lg:text-6xl font-black text-left leading-tight">
            Why should you have Lurity in your campaign?
          </h2>

          <Button className="bg-magenta hover:bg-magenta/90 text-black font-bold px-6 py-8 text-lg rounded-sm shadow-cyan flex items-center group">
            I'M INTERESTED
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right Column: Benefits Grid */}
        <div className="grid md:grid-cols-2 grid-rows-2 gap-8 lg:mt-0">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-transparent p-8 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-magenta rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
