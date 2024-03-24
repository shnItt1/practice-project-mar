"use client";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviewData = [
  {
    avatar: "https://placehold.co/400",
    name: "Name 1",
    job: "Career 1",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, veniam.",
  },
  {
    avatar: "https://placehold.co/400",
    name: "Name 2",
    job: "Career 2",
    review: "Lorem ipsum dolor sit amet.",
  },
  {
    avatar: "https://placehold.co/400",
    name: "Name 3",
    job: "Career 3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, distinctio libero.",
  },
  {
    avatar: "https://placehold.co/400",
    name: "Name 4",
    job: "Career 4",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quibusdam incidunt laborum iste amet sunt!",
  },
  {
    avatar: "https://placehold.co/400",
    name: "Name 5",
    job: "Career 5",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cum consectetur at saepe minus optio minima odio. Repellat, eaque nobis.",
  },
];

const Reviews = () => {
  return (
    <section className=" mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Carousel className="mx-5 md:mx-24">
          <CarouselContent>
            {reviewData.map((person, index) => {
              return (
                <CarouselItem className=" md:basis-[450px]" key={index}>
                  <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                    <CardHeader className="p-0 mb-10">
                      <div className="flex items-center gap-x-4">
                        {/* Image */}
                        {/* <Image
                          src={person.avatar}
                          width={70}
                          height={70}
                          alt=""
                          priority
                        /> */}
                        <img
                          className="w-[70px] h-[70px] rounded-full"
                          src={person.avatar}
                          alt=""
                        />
                        {/* Name */}
                        <div className="flex flex-col">
                          <CardTitle>{person.name}</CardTitle>
                          <p>{person.job}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardDescription className="text-lg text-muted-foreground">
                      {person.review}
                    </CardDescription>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
