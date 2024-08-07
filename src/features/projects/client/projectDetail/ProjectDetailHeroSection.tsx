import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { Link } from "react-router-dom";
import { TProject } from "@/data/projects.ts";

export function ProjectDetailHeroSection({ project }: { project: TProject }) {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-5 sm:py-32">
        <div className={"grid grid-cols-1  gap-10 sm:grid-cols-2"}>
          <div className={"flex flex-col justify-between"}>
            <div className={"mb-12 sm:mb-0"}>
              <h1 className={"mb-8 text-5xl  md:text-6xl "}>{project.title}</h1>
              <p
                className={
                  "mb-6 max-w-[600px] text-sm text-gray-primary sm:mb-12 md:text-base"
                }
              >
                {project.description}
              </p>
            </div>
            <div className={" flex items-center gap-2"}>
              {project.links.map((link) => {
                return (
                  <Link to={link.link}>
                    <Button className={" font-bold"}>{link.name}</Button>
                  </Link>
                );
              })}
            </div>
          </div>

          <img
            src={project.imagePath}
            alt=""
            className={"mb-12 w-full  sm:mb-0 sm:w-[500px] md:w-[600px]"}
          />
        </div>
      </section>
    </RevealCenter>
  );
}
