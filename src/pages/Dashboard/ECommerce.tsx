import { useQuery } from "@tanstack/react-query";
import Loader from "../../common/Loader/index.tsx";
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
import TopProductsCard from "../../components/TopProductsCard.tsx";

const ECommerce = () => {
  const getStats = async () => {
    const response = await fetch(
      "https://j5l5hqnix6.execute-api.af-south-1.amazonaws.com/dev/stats"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { status, isLoading, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getStats,
  });

  if (isLoading) {
    return <Loader />;
  }
  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne
          totalViews={data.total_views.amount}
          changePercentage={data.total_views.change_percent}
        />
        <CardTwo
          totalProfit={data.total_profit.amount}
          changePercentage={data.total_profit.change_percent}
        />
        <CardThree
          totalProductSales={data.total_product_sales.amount}
          changePercentage={data.total_product_sales.change_percent}
        />
        <CardFour
          totalUsers={data.total_users.amount}
          changePercentage={data.total_users.change_percent}
        />
      </div>

      <div className="mt-4 col-span-12 xl:col-span-8 md:mt-6 md:gap-6 2xl:mt-7.5">
        <TopProductsCard />
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
