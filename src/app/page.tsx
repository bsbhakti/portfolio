import { Button } from "@/components/shadcn-ui/components/ui/button";
import Card from "@/components/pages/projects_card";

export default function Home() {
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
      <section className="flex flex-col items-center justify-center h-screen text-center gap-6">
        <h1 className="text-5xl font-bold">Hi, I’m Bhakti</h1>
        <p className="text-xl max-w-xl text-gray-600">I exist</p>
      </section>
      <a href="#portfolio">Go to Portfolio</a>
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
    </div>
  );
}
