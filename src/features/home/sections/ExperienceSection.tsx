import { Link } from "react-router-dom"; // import { calsans } from "@/fonts/calsans";
import { TracingBeam } from "@/components/aceternity/TracingBeam.tsx";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

interface ExperienceProp {
  title: string;
  date: string;
  description: string;
  link: string;
}

const ExperienceData: ExperienceProp[] = [
  {
    title: "Frontend Developer - Kitn for IT Solution",
    date: "March 2024 - Present",
    description:
      'As a Frontend Developer at Kitn for IT Solution, I had the opportunity to work on an exciting project called "Pweist." This project involved developing a multi-user system management application designed specifically for markets.',
    link: "https://kitn.net/",
  },
  {
    title: "Team Member - Bnchina & Bnchina Academy",
    date: "January 2024 - Present",
    description:
      "As a team member at Bnchina & Bnchina Academy since January 2024, I have been part of an exciting journey to revolutionize responsible software development. At Bnchina, we ignite careers and encourage our team members to lead the way in transforming the industry. Our mission is to seamlessly bridge the gap left by uninspiring designs, ensuring that every interaction reflects innovation and user-centric excellence.",
    link: "https://bnchina.co/",
  },
  {
    title: "Independent Technology Practice",
    date: "January 2020 - Present",
    description:
      "During my independent technology practice from 2020 to now, I engaged in diverse projects spanning software development, web design, consulting, and research. This period fostered autonomy, creativity, and continuous learning, allowing me to deliver tailored solutions while pushing the boundaries of innovation in technology.",
    link: "https://github.com/arentalb",
  },
];

export function ExperienceSection() {
  return (
    <RevealCenter delay={0.3}>
      <section className=" mx-auto  px-5 pb-32 md:max-w-[1400px] ">
        <div className={"mb-16 flex flex-col items-center justify-center"}>
          <h1 className={"mb-6 text-center text-4xl font-bold"}>
            From Projects to Progress
          </h1>
          <p
            className={
              "mb-14 text-center text-sm font-bold   text-gray-primary sm:max-w-[500px] "
            }
          >
            Embark on an immersive journey through the dynamic chapters of my
            career, where each project represents a milestone of innovation and
            creativity
          </p>
        </div>
        <Experiences />
      </section>
    </RevealCenter>
  );
}

function Experiences() {
  return (
    <TracingBeam>
      <div className="relative mx-auto ml-4 flex w-full flex-col gap-24 px-6 pt-4 antialiased">
        {ExperienceData.map((item) => (
          <Experience experience={item} key={item.title} />
        ))}
      </div>
    </TracingBeam>
  );
}

interface ExperienceComponentProps {
  experience: ExperienceProp;
}

function Experience({ experience }: ExperienceComponentProps) {
  return (
    <div
      className={
        " flex w-full justify-between  rounded-3xl border-2 border-white  p-8 sm:p-16 "
      }
    >
      <div>
        <p className={"mb-16 text-2xl  sm:mb-6 sm:text-3xl"}>
          {experience.title}
        </p>
        <p className={"text-base text-gray-primary sm:mb-14 sm:text-lg "}>
          {experience.date}
        </p>
        <p className={"hidden sm:block sm:max-w-[750px]"}>
          {experience.description}
        </p>
      </div>
      <div className={" flex min-w-6  max-w-8  items-end sm:items-start"}>
        <Link to={experience.link}>
          <img src="/icons/externalLink.svg" alt="link for experiance detail" />
        </Link>
      </div>
    </div>
  );
}
