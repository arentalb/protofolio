import { Button } from "@/ui/ui/button.tsx";
import { Link } from "react-router-dom";
import { MovingCards } from "@/ui/aceternity/MovingCards.tsx";
import { RevealCenter } from "@/ui/animations/RevealCenter.tsx";

interface ProjectProp {
  title: string;
  description: string;
  link: string;
}

const projectData: ProjectProp[] = [
  {
    title: "My Portfolio - React ProjectCard ",
    description:
      "Discover my personal portfolio website, a home of my skills, experiences, and projects. Crafted with React and spiced up with animations using Framer Motion and React Spring. Enjoy smooth navigation with React Router and sleek styling with Tailwind CSS. TypeScript ensures code quality while Vite powers fast development. Each design element is meticulously created from scratch using Figma for a unique visual experience.",
    link: "/",
  },
  {
    title: "Shoply - E-commerce ",
    description:
      "Shoply is an Angular-based e-commerce practice project designed to help developers improve their skills in Angular development. It is not intended for production use and currently utilizes local arrays for data storage. The long-term plan involves integrating a backend using Spring Boot in Java to enhance functionality.",
    link: "https://github.com/arentalb/shoply-angular",
  },
  {
    title: "Collaborative Task Manager",
    description:
      "Manage tasks with ease using the Angular Firebase Task Manager app. Features include user authentication, task management, user-specific task lists, and user profile viewing.",
    link: "https://github.com/arentalb/taskmanger-angular",
  },
  {
    title: "LaslesVPN - Angular Website",
    description:
      "LaslesVPN is a website homepage built using Angular and custom CSS. Currently, it's a static representation without functional components. The project was generated with Angular CLI version 17.0.7, showcasing modern development practices.",
    link: "https://github.com/arentalb/LaslesVPN-css",
  },
];

export function ProjectSection() {
  return (
    <RevealCenter>
      <section className=" mx-auto   px-5 py-12 md:max-w-[1400px]">
        <div className={"mb-24 flex flex-col items-center justify-center"}>
          <p
            className={
              "mb-14 max-w-[75%] text-center text-base font-bold text-gray-primary sm:max-w-[500px] "
            }
          >
            Dive into the diverse range of projects that showcase my skills and
            passion for innovation.
          </p>
          <Button className={"font-bold"}>
            <Link to={"https://github.com/arentalb?tab=repositories"}>
              View All Projects
            </Link>
          </Button>
        </div>
        <MovingCards items={projectData} direction="right" speed="slow" />
      </section>
    </RevealCenter>
  );
}