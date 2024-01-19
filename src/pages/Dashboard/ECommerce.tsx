import { CardFive } from "../../components/CardFive.tsx";
import CardFour from "../../components/CardFour.tsx";
import CardOne from "../../components/CardOne.tsx";
import CardThree from "../../components/CardThree.tsx";
import CardTwo from "../../components/CardTwo.tsx";
import ChartOne from "../../components/ChartOne.tsx";
import ChartThree from "../../components/ChartThree.tsx";
import ChartTwo from "../../components/ChartTwo.tsx";
import ChatCard from "../../components/ChatCard.tsx";
import MapOne from "../../components/MapOne.tsx";
import TableOne from "../../components/TableOne.tsx";
import Loader from "../../common/Loader/index.tsx";
import { useQuery } from "react-query";
import { StatsContext } from "../../context/dashboard-stats.tsx";

async function handleFetchStats() {
  // @ts-ignore
  const data = await fetch(import.meta.env.VITE_STATS_ENDPOINT);
  return await data.json();
}

const ECommerce = () => {
  const { isLoading, error, data } = useQuery("stats", handleFetchStats);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {error ? (
        <div>Unable to fetch Stats From API</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <StatsContext.Provider value={data}>
            <CardOne />
            <CardTwo />
            <CardThree />
            <CardFour />
          </StatsContext.Provider>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <CardFive />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
