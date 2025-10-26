import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRightIcon } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      image: "https://www2.lurity.com/sites/default/files/titulka-lurity.jpeg",
      date: "03 APRIL 2024",
      title:
        "LURITY: The future of digital OOH advertising is an omnichannel marketing approach",
      excerpt:
        "When Tomas Tiefenbach, CEO of Lurity, founded his first digital billboard company in 2016, he had no idea that it would grow into an international DO...",
    },
    {
      image: "https://www2.lurity.com/sites/default/files/WcKZr5Mt9.png",
      date: "08 JANUARY 2024",
      title: "Strategies, Advertising Agencies 2023",
      excerpt:
        "Advertising agencies 2023: What was the year 2023 like?\n\nRead the full published supplement Strategies, A...",
    },
    {
      image: "https://www2.lurity.com/sites/default/files/tt_0.png",
      date: "14 NOVEMBER 2023",
      title: 'Stratégie: "The future of OOH is omnichannel"',
      excerpt:
        "Interview with Tomas Tiefenbach, CEO of Lurity.\n\nUnaware of media trends, they say OOH is dead. But the reality is different, the OOH market is ex...",
    },
  ];

  const logos = [
    "/forbes.png",
    "/strategies.png",
    "/startitup.png",
    "/ta3.svg",
    "/trend.png",
    "/eva.png",
    "/mediaguru.png",
    "/mediaguru.png",
  ];

  return (
    <section className="bg-secondary py-12">
      <div className=" mx-auto ">
        <section className="py-20 bg-yellow px-10 mb-16 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-start gap-10 lg:px-24">
            {/* Text Section */}
            <div className="flex md:flex-col">
              <h2 className="font-bold  text-[32px] lg:text-[46px] leading-none text-nowrap md:mr-16 xl:mr-28 text-left">
                Lurity {""}
              </h2>
                <span className="font-bold text-[32px] lg:text-[46px] leading-none text-nowrap md:mr-16 xl:mr-28 text-left">in the media</span>
            </div>

            {/* Logos Grid */}
            <div className="hidden max-w-full flex-1 md:grid grid-cols-4 gap-x-5 gap-y-2 ">
              {logos.map((logo, index) => (
                <div key={index} className="w-full grid">
                  <img
                    src={logo}
                    alt={`Media logo ${index + 1}`}
                    className="w-full h-14 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Logos Grid on mobile Only */}
            <div className=" md:hidden ">
              <div className="max-w-full flex-1 grid grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-2 ">
                {logos.slice(0, 6).map((logo, index) => (
                  <div key={index} className="w-full grid">
                    <img
                      src={logo}
                      alt={`Media logo ${index + 1}`}
                      className="w-full h-14 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="w-full flex items-center justify-between gap-x-5 ">
                {logos.slice(6).map((logo, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row items-center justify-between "
                  >
                    <img
                      src={logo}
                      alt={`Media logo ${index + 1}`}
                      className="w-full h-14 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 overflow-y-auto scrollbar-hide">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-cyan transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="font-bold px-8 py-6 text-lg rounded-lg bg-yellow hover:bg-yellow/90 hover:text-black hover:border-yellow"
          >
            All articles
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
