import CountUp from "react-countup";

interface StatisticProps {
  StatisticName: string;
  count: number;
}

const StatisticData: StatisticProps[] = [
  {
    StatisticName: "Certificates Earned",
    count: 8,
  },
  {
    StatisticName: "Articles Published",
    count: 21,
  },

  {
    StatisticName: "Tutorials Shared",
    count: 46,
  },

  {
    StatisticName: "Projects Completed",
    count: 12,
  },
];

export function StatisticsSection() {
  return (
    <section className=" px-5   py-32 md:max-w-[1400px] mx-auto  text-center ">
      <div className={"flex justify-center flex-col items-center mb-14"}>
        <h1 className={"text-4xl font-bold mb-6 pt-10"}>
          Insights and Achievements
        </h1>
        <p
          className={
            "text-sm text-center text-gray-primary mb-14 sm:max-w-[500px] "
          }
        >
          Discover the impact of my contributions through numbers
        </p>
      </div>
      <div className={"flex justify-center flex-col items-center "}>
        <Statistics />
      </div>
    </section>
  );
}

function Statistics() {
  return (
    <div className={"grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-16"}>
      {StatisticData.map((StatisticDatum) => (
        <Statistic
          statistic={StatisticDatum}
          key={StatisticDatum.StatisticName}
        />
      ))}
    </div>
  );
}

interface StatisticComponentProps {
  statistic: StatisticProps;
}

function Statistic({ statistic }: StatisticComponentProps) {
  return (
    <div className={" rounded-3xl border-2 border-white p-4 "}>
      <p className={"text-4xl font-bold mb-4"}>
        <CountUp
          duration={6}
          end={statistic.count}
          scrollSpyOnce={true}
          enableScrollSpy={true}
        />
        +
      </p>
      <p className={"text-base"}> {statistic.StatisticName}</p>
    </div>
  );
}
