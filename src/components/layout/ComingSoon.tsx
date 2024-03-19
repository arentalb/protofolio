import { SparklesCore } from "@/components/common/aceternity/Sparkles.tsx";

export function ComingSoon({ text }) {
  return (
    <section className=" mx-auto flex  flex-col items-center justify-between gap-20 px-5 pb-32 pt-8 sm:flex-row sm:pt-12 md:max-w-[1400px] ">
      <div
        className={
          "mt-8 flex flex-col items-center text-center sm:max-w-96 sm:items-start sm:text-start"
        }
      ></div>
      <div className="flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
        <h1 className="relative z-20 text-center text-4xl font-bold text-white md:text-7xl lg:text-9xl">
          {text}
        </h1>
        <div className="relative h-40 w-[40rem]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </section>
  );
}
