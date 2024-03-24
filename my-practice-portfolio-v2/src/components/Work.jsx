import Link from "next/link";
import { Button } from "./ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProjectCard from "./ProjectCard";
import { projectData } from "@/lib/projectData";

const Work = () => {
  return (
    <section className=" mb-12 xl:mb-32">
      <div className="container flex flex-col md:flex-row">
        {/* Text : Latest Project */}
        <div className="">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            similique!
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="pt-10 md:pt-0 mx-5 md:ml-24">
          <Carousel>
            <CarouselContent>
              {/* Show only the first 4 */}
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <CarouselItem className=" md:basis-2/3" key={index}>
                    <ProjectCard project={project} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Work;
