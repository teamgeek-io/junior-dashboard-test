import { FunctionComponent, useMemo, useState } from "react";
import { categories, productsList } from "../common/constants";

type Option = {
  name: string;
  value: string;
};

type ProductRow = {
  id: number;
  name: string;
  revenue: number;
  cost: number;
  categoryId?: number;
  currency: string;
  locale: string;
};

const options: Option[] = [
  {
    name: "Revenue (desc)",
    value: "revenue-desc",
  },
  {
    name: "Revenue (asc)",
    value: "revenue-asc",
  },
  {
    name: "Cost (desc)",
    value: "cost-desc",
  },
  {
    name: "Cost (asc)",
    value: "cost-asc",
  },
];

// Styles
const gridClasses =
  "grid grid-cols-5 border-t border-stroke dark:border-strokedark sm:grid-cols-8 2xl:px-7.5 md:place-items-center gap-5 py-6 px-7.5 lg:px-4 md:px-6 xl:px-7.5";
const idClasses = "hidden sm:flex col-span-1 items-center";
const nameClasses = "flex md:col-span-3 col-span-3 items-center";
const gridItemTextClasses = "text-sm text-black dark:text-white";
const costClasses = "hidden sm:flex items-center col-span-2";
const revenueClasses = "flex col-span-2 items-center";

const ProductRow: FunctionComponent<ProductRow> = ({
  id,
  name,
  revenue,
  cost,
  currency,
  locale,
}) => {
  return (
    <div className={gridClasses}>
      <div className={idClasses}>
        <p className={gridItemTextClasses}>{id}</p>
      </div>
      <div className={nameClasses}>
        <p className={gridItemTextClasses}>{name}</p>
      </div>
      <div className={costClasses}>
        <p className={gridItemTextClasses}>
          {cost.toLocaleString(locale, {
            style: "currency",
            currency: currency,
          })}
        </p>
      </div>
      <div className={revenueClasses}>
        <p className={gridItemTextClasses}>
          {revenue.toLocaleString(locale, {
            style: "currency",
            currency: currency,
          })}
        </p>
      </div>
    </div>
  );
};

const TopProductsCard = () => {
  // Styles
  const totalGridClasses = "col-span-3 sm:col-span-6 md:col-span-10";
  const totalAmountClasses = "sm:justify-self-end 2xl:justify-self-center";

  // Language codes for locale can be found here: https://www.w3schools.com/tags/ref_language_codes.asp
  const locale = "en-US";
  const currency = "USD";

  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [activeButton, setActiveButton] = useState<number | null>(0);
  const [selectedSortBy, setSelectedSortBy] = useState(options[0].value);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortBy(e.target.value);
  };

  const sortProducts = (productsList: any, sortBy: string) => {
    let sortedProducts;

    if (!Array.isArray(productsList)) {
      sortedProducts = [];
    } else {
      switch (sortBy) {
        case "revenue-desc":
          sortedProducts = [...productsList].sort(
            (a, b) => b.salesRevenue - a.salesRevenue
          );
          break;
        case "revenue-asc":
          sortedProducts = [...productsList].sort(
            (a, b) => a.salesRevenue - b.salesRevenue
          );
          break;
        case "cost-asc":
          sortedProducts = [...productsList].sort((a, b) => a.cost - b.cost);
          break;
        case "cost-desc":
          sortedProducts = [...productsList].sort((a, b) => b.cost - a.cost);
          break;
        default:
          sortedProducts = [...productsList];
      }
    }

    return sortedProducts;
  };

  // useMemo ensures that sortedProducts is recomputed when selectedSortBy changes
  const sortedProducts = useMemo(
    () => sortProducts(productsList, selectedSortBy),
    [productsList, selectedSortBy]
  );

  // Total Revenue for category
  const totalRevenue = useMemo(() => {
    return sortedProducts
      ?.filter((product) => product.categoryId === selectedCategory)
      .reduce((total, product) => total + parseFloat(product.salesRevenue), 0);
  }, [sortedProducts, selectedCategory]);

  // Total Profit for category
  const totalProfit = useMemo(() => {
    return sortedProducts
      ?.filter((product) => product.categoryId === selectedCategory)
      .reduce(
        (total, product) => total + (product.salesRevenue - product.cost),
        0
      );
  }, [sortedProducts, selectedCategory]);

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex-col sm:flex-row py-6 px-7.5 lg:px-4 md:px-6 xl:px-7.5 items-start justify-between sm:w-full">
        <h4 className="text-xl font-semibold text-black dark:text-white mb-4">
          Top Products
        </h4>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 md:gap-4 ">
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveButton(index);
                    setSelectedCategory(index + 1);
                  }}
                  className={`rounded py-1 px-3 text-xs font-medium ${
                    index === activeButton
                      ? "dark:bg-boxdark shadow-card"
                      : "text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark "
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="relative z-20 inline-block">
            <select
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
              value={selectedSortBy}
              onChange={handleChange}
            >
              {options.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  className="dark:border-strokedark dark:bg-boxdark"
                >
                  {option.name}
                </option>
              ))}
            </select>
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2 dark:text-stroke text-opacity-0">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
                fill="#637381"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill=""
                />
                <path
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill=""
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className={gridClasses}>
        <div className={idClasses}>
          <p className="font-medium">Id</p>
        </div>
        <div className={nameClasses}>
          <p className="font-medium">Name</p>
        </div>
        <div className={costClasses}>
          <p className="font-medium">Cost</p>
        </div>
        <div className={revenueClasses}>
          <p className="font-medium">Revenue</p>
        </div>
      </div>

      {sortedProducts
        ?.filter((product) => product.categoryId === selectedCategory)
        .map((product, index) => (
          <ProductRow
            key={index}
            id={product.id}
            name={product.name}
            revenue={product.salesRevenue}
            cost={product.cost}
            currency={currency}
            locale={locale}
          />
        ))}
      <div className="flex sm:justify-end border-t border-stroke dark:border-strokedark px-2 pt-4 sm:pt-6 pb-8">
        <div className="grid grid-cols-5 ml-5 sm:ml-0 sm:grid-cols-8 lg:py-5 xl:px-2 2xl:px-12 sm:gap-5 sm:place-items-center md:grid-cols-12">
          <div className={totalGridClasses}>
            <p className="font-medium">Total Category Revenue:</p>
          </div>
          <div className={totalAmountClasses}>
            <p className="font-bold">
              {totalRevenue.toLocaleString(locale, {
                style: "currency",
                currency: currency,
              })}
            </p>
          </div>
          <div className={totalGridClasses}>
            <p className="font-medium">Total Category Profit:</p>
          </div>
          <div className={totalAmountClasses}>
            <p className="font-bold">
              {totalProfit.toLocaleString(locale, {
                style: "currency",
                currency: currency,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductsCard;
