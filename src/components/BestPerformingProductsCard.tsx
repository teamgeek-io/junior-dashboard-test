import React, { useState } from "react";

const BestPerformingProductsCard = () => {
  const [select, setSelect] = useState(0);
  const products = [
    {
      id: 1,
      name: "Nike air force ones",
      salesRevenue: 5000,
      cost: 100,
      categoryId: 1,
    },
    {
      id: 2,
      name: "I love shirts print",
      salesRevenue: 18982,
      cost: 100,
      categoryId: 2,
    },
    {
      id: 3,
      name: "Adidas shoes",
      salesRevenue: 123,
      cost: 100,
      categoryId: 1,
    },
    {
      id: 4,
      name: "Batman funko-pop",
      salesRevenue: 199,
      cost: 100,
      categoryId: 3,
    },
    {
      id: 5,
      name: "Mona Lisa",
      salesRevenue: 1428,
      cost: 100,
      categoryId: 4,
    },
    {
      id: 6,
      name: "Plain white T",
      salesRevenue: 82,
      cost: 100,
      categoryId: 2,
    },
    {
      id: 7,
      name: "Plain green T",
      salesRevenue: 901,
      cost: 100,
      categoryId: 2,
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Sneakers",
    },
    {
      id: 2,
      name: "T-shirts",
    },
    {
      id: 3,
      name: "Figurines",
    },
    {
      id: 4,
      name: "Art",
    },
  ];

  const handleChange = (e: any) => {
    setSelect(e.target.value);
  };

  let titles = Object.keys(products[select]);
  let rows = Object.values(products[select]);
  let popTitles = titles.pop();
  let popRows = rows.pop();
  console.log("rows: ", rows);
  console.log("titles: ", titles);

  const initialValue = 0;

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <label>
        Categories:
        <select
          name="categories"
          className="p-2 ml-4 rounded-sm dark:bg-boxdark dark:border-stroke"
          value={select}
          onChange={handleChange}
        >
          {categories.map((categorie) => (
            <option
              key={categorie?.id}
              value={categorie?.id}
              className="rounded-sm"
            >
              {categorie.name}
            </option>
          ))}
        </select>
      </label>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 dark:bg-boxdark">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {titles.map((title: string, i: number) => (
                <th
                  key={i}
                  scope="col"
                  className="px-6 py-3 w-[25%]"
                >
                  {title === "salesRevenue" ? "Revenue" : title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className=" dark:bg-gray-900 border-b dark:border-gray-700">
              {rows.map((data, i) => (
                <td key={i} scope="row" className="px-6 py-4 dark:text-white">
                  {i === 2 || i === 3 ? `$ ${data}` : data}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
    </div>
  );
};

export default BestPerformingProductsCard;
