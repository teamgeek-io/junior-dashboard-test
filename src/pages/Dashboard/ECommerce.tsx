import CardOne from '../../components/CardOne.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardFour from '../../components/CardFour.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartFour from '../../components/ChartFour.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import jsonData from '../../data.json'
import TableDisp from '../../components/ProductsTable.tsx';
import CatTest from '../../components/CategoryTest.tsx';

const ECommerce = () => {
  const products = jsonData.products;
  const categories = jsonData.categories;
  
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
      <CatTest/>
      <div className="grid grid-cols-1 gap-5 pt-6 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7.5">
        <TableDisp />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <ChartFour />
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
