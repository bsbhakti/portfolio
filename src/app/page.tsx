import { Button } from "@/components/shadcn-ui/components/ui/button";
import Card from "@/components/pages/projects_card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/shadcn-ui/components/ui/carousel";
import {
  SiPython,
  SiAwslambda,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiKotlin,
  SiSwift,
  SiPostgresql,
} from "react-icons/si";

export default function Home() {
  const icons = [1, 2, 3, 4, 5];

  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with Next.js and Tailwind.",
      image: "/portfolio.png",
      link: "https://your-portfolio.com",
    },
    {
      title: "Portfolio Website1",
      description: "My personal portfolio built with Next.js and Tailwind.",
      image: "/portfolio.png",
      link: "https://your-portfolio.com",
    },
    {
      title: "Portfolio Website2",
      description: "My personal portfolio built with Next.js and Tailwind.",
      image: "/portfolio.png",
      link: "https://your-portfolio.com",
    },
    {
      title: "Portfolio Website3",
      description: "My personal portfolio built with Next.js and Tailwind.",
      image: "/portfolio.png",
      link: "https://your-portfolio.com4",
    },
  ];
  return (
    <div>
      <section
        id="hero"
        className="flex md:flex-row justify-between h-screen md:px-20 gap-0"
      >
        <div className="flex flex-row h-full w-1/2">
          <section className=" md:w-1/2 m-0 p-0">
            <h1 className="absolute top-1/2 text-center items-center  text-7xl top-1/2 font-bold p-0">
              Hi, I’m{" "}
              <span
                className="m-0 p-0 text-center"
                style={{ color: "#605dc8" }}
              >
                Bhakti
              </span>
            </h1>
            <p className="text-xl text-center max-w-xl  m-0 p-0">I exist</p>
          </section>
          <div className="relative w-1/2 h-3/4">
            <img
              src="/img/6.png"
              className="absolute w-1/5 -translate-x-1/2 -translate-y-1/2 top-3/4 left-3/4"
            ></img>
          </div>
        </div>

        <div className="relative w-1/2 h-3/4 ">
          <img
            src="img/7.png"
            alt="Profile"
            className="absolute w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {icons.map((i) => {
              const n = icons.length;
              const angle = (Math.PI / (n - 1)) * i - 10;
              const x = Math.cos(angle) * 200;
              const y = Math.sin(angle) * 200;
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  }}
                >
                  <img
                    src={`img/${i}.png`}
                    className="animate-wiggle w-20 h-20"
                    style={{
                      animationDelay: `${Math.random() * 1.2}s`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* <img src="img/me.png" className="w-1/5 h-1/3" /> */}
      </section>

      <section id="portfolio" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl text-center font-bold mb-8">Projects</h2>
        <div className="flex flex-col mx-auto gap-6 max-w-4xl">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      <section id="things i do" className="mx-auto py-20 px-6 md:px-20">
        <Carousel
          orientation="horizontal"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-1/3 pl-4">
              {/* {projects.map((project) => ( */}
              <Card
                key="{project.title}"
                title="{project.title}"
                description="{project.description}"
                image="{project.image}"
                link="{project.link}"
              />
              {/* ))} */}
            </CarouselItem>

            <CarouselItem className="basis-1/3 pl-4">
              {/* {projects.map((project) => ( */}
              <Card
                key="{project.title}1"
                title="{project.title}2"
                description="{project.description}2"
                image="{project.image}2"
                link="{project.link}2"
              />
              {/* ))} */}
            </CarouselItem>

            <CarouselItem className="basis-1/3 pl-4">
              {/* {projects.map((project) => ( */}
              <Card
                key="{project.title}3"
                title="{project.title}3"
                description="{project.description}3"
                image="{project.image}3"
                link="{project.link}3"
              />
              {/* ))} */}
            </CarouselItem>

            <CarouselItem className="basis-1/3 pl-4">
              {/* {projects.map((project) => ( */}
              <Card
                key="{project.title}4"
                title="{project.title}4"
                description="{project.description}4"
                image="{project.image}4"
                link="{project.link}4"
              />
              {/* ))} */}
            </CarouselItem>
            <CarouselItem className="basis-1/3 pl-4">
              {/* {projects.map((project) => ( */}
              <Card
                key="{project.title}5"
                title="{project.title}5"
                description="{project.description}5"
                image="{project.image}5"
                link="{project.link}5"
              />
              {/* ))} */}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
