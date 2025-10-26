"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Activator() {
  const tabData = [
    {
      value: "dooh",
      title: "OOH is the cheapest online activator",
      text: "Lurity is an affinity medium, at places where your customers are. A real accelerator of purchasing behavior of the target group* (OOAs Nielsen Research).",
      button: "Find out more",
      image: "https://www.lurity.com/images/hp_tab_image_1.png",
    },
    {
      value: "planning",
      title: "The only one with a self-service planning software",
      text: "Plan your campaign easily in a few steps: choose a location, timing of the campaign, upload a visual or video. Campaign ready in 7 steps.",
      button: "I'm Interested",
      image: "https://www.lurity.com/images/hp_tab_image_2.png",
    },
    {
      value: "campaign",
      title: "The only one with campaign deployment ASAP",
      text: "If everything is okay, your campaign runs within 10 minutes. Plus, you have control over the campaign status and its fulfillment anytime.",
      button: "Find out more",
      image: "https://www.lurity.com/images/hp_tab_image_3.png",
    },
  ];

  return (
    <div className="mt-5 text-center space-y-6 py-4">
      <h3 className="text-5xl font-extrabold">How we're better</h3>

      <Tabs defaultValue="dooh" className="w-full max-w-7xl mx-auto">
        {/* --- Tab Buttons --- */}
        <TabsList className="flex flex-wrap justify-center gap-3 bg-transparent">
          <TabsTrigger
            value="dooh"
            className="data-[state=active]:bg-cyan data-[state=active]:text-white bg-cyan/10 text-cyan rounded-full px-6 py-3 font-semibold text-lg transition-all"
          >
            Effective DOOH
          </TabsTrigger>

          <TabsTrigger
            value="planning"
            className="data-[state=active]:bg-magenta data-[state=active]:text-white bg-magenta/10 text-magenta rounded-full px-6 py-3 font-semibold text-lg transition-all"
          >
            Planning Software
          </TabsTrigger>

          <TabsTrigger
            value="campaign"
            className="data-[state=active]:bg-yellow data-[state=active]:text-black bg-yellow/10 text-yellow-800 rounded-full px-6 py-3 font-semibold text-lg transition-all"
          >
            Campaign Deployment
          </TabsTrigger>
        </TabsList>

        {/* --- Tab Content --- */}
        {tabData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="mt-8 px-8">
            <div className="flex flex-col md:flex-col justify-between items-start md:items-center px-4 lg:px-16 py-12">
              {/* Text Section */}
              <div className="flex flex-col md:flex-row">
                <div className="w-full font-bold text-3xl lg:text-4xl text-left my-5 pr-6">
                  <h1 className="text-3xl lg:text-4xl font-bold">
                    {tab.title}
                  </h1>
                </div>

                <div className="w-full text-left my-5 space-y-6">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {tab.text}
                  </p>
                  <Button className="w-fit bg-transparent text-black hover:bg-transparent/5 rounded-lg px-6 py-4 uppercase tracking-wide font-bold flex items-center gap-2">
                    {tab.button} <ArrowRight className="w-4 h-4 text-black" />
                  </Button>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full max-w-7xl">
                <img
                  src={tab.image}
                  alt={tab.title}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
