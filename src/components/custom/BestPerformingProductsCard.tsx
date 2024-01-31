import { FunctionComponent } from "react";

type ProductRow = {
  id: number;
  name: string;
  revenue: string;
  cost: number;
};

const ProductRow: FunctionComponent<ProductRow> = ({
  id,
  name,
  revenue,
  cost,
}) => {
  return (
    <div className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
      <div className="col-span-1 flex items-center">
        <p className="text-sm text-black dark:text-white">{id}</p>
      </div>
      <div className="col-span-3 hidden items-center sm:flex">
        <p className="text-sm text-black dark:text-white">{name}</p>
      </div>
      <div className="col-span-2 flex items-center">
        <p className="text-sm text-black dark:text-white">{revenue}</p>
      </div>
      <div className="col-span-2 flex items-center">
        <p className="text-sm text-black dark:text-white">${cost}</p>
      </div>
    </div>
  );
};

type TopProductsCardProps = {
  products?: ProductRow[];
};

const TopProductsCard = ({ products }: TopProductsCardProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Id</p>
        </div>
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Revenue</p>
        </div>
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Cost</p>
        </div>
      </div>

      <ProductRow id={1} name="Product1" cost={12} revenue="24" />
    </div>
  );
};

export default TopProductsCard;
