import Image from "next/image";
import DevImg from "./DevImg";
import Developer2 from "@/app/about/developer.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Shanachon Ittiwarakit",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+099 000 0000 ",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shanachon.ittiwarakit@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 1992",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Degree on Fine and Applied Art",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Thailand",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University 1",
        qualification: "ex 1",
        years: "2017-2020",
      },
      {
        university: "University 2",
        qualification: "ex 2",
        years: "2017-2020",
      },
      {
        university: "University 3",
        qualification: "ex 3",
        years: "2017-2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Axion",
        position: "2D Artist",
        years: "2017-2020",
      },
      {
        company: "B",
        position: "2D Artist",
        years: "2017-2020",
      },
      {
        company: "C",
        position: "2D Artist",
        years: "2017-2020",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML,CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript,PHP",
      },
      {
        name: "Back-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgURL: "./about/vscode.svg",
      },
      {
        imgURL: "./about/figma.svg",
      },
      {
        imgURL: "./about/notion.svg",
      },
      {
        imgURL: "./about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className=" container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Images */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles=" bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc={Developer2}
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto " value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto "
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto " value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className=" text-lg mt-12 xl:mt-8">
                {/* Personal Tab */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>

                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <h3 className="text-primary">Language Skills</h3>
                      <div className=" border-b border-border"></div>
                      <p>Thai, English</p>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications Tab */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience & Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <section className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, position, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[2px] bg-border relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <p className=" font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </p>
                                    <p className="text-lg leading-none text-muted-foreground mb-4 ">
                                      {position}
                                    </p>
                                    <p className="text-base font-medium">
                                      {years}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </section>

                      {/* Education */}
                      <section className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium my-2">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[2px] bg-border relative ml-2">
                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <p className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </p>
                                    <p className="text-lg leading-none text-muted-foreground mb-4 ">
                                      {qualification}
                                    </p>
                                    <p className="text-base font-medium">
                                      {years}
                                    </p>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </section>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills Tab */}
                <TabsContent value="skills">
                  <section className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use</h3>
                    {/* Skills */}
                    <div className=" mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <h3 className="font-medium">{name}</h3>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tool list */}
                      <div className="flex justify-center gap-x-8 xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgURL } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgURL}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
