import { Terminal } from "@/components/common/Terminal.tsx";
import { Button } from "@/components/common/ui/button.tsx";

export function HeroSection() {
  function collaborateHandler() {
    console.log("Let's Collaborate");
  }

  return (
    <section className=" px-5 pt-8  pb-32 sm:pt-12 md:max-w-[1400px] mx-auto flex flex-col justify-between gap-20 items-center sm:flex-row ">
      <div
        className={
          "flex flex-col items-center text-center mt-8 sm:items-start sm:text-start sm:max-w-96"
        }
      >
        <h1 className={"text-5xl font-bold mb-6"}>
          Your Gateway to Innovation
        </h1>
        <p className={" text-sm mb-14 text-gray-primary font-bold"}>
          Welcome to my world of creativity and code, where every line brings
          ideas to life.
        </p>

        <Button onClick={collaborateHandler}>Let's Collaborate</Button>
      </div>
      <Terminal />
    </section>
  );
}