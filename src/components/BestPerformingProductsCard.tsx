import React, { useEffect, useState } from "react";

const BestPerformingProductsCard = () => {
  const [select, setSelect] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);

  const initialValue = 0;

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

  // Sort products by descending revenue
  let sortedByRevenueDescending = toggle
    ? sortedProducts
    : products.sort((a, b) => {
        return b.salesRevenue - a.salesRevenue;
      });

  const handleChange = (e: any) => {
    setSelect(e.target.value);
  };

  const filteredSalesRevenueCategoryById = sortedByRevenueDescending.filter(
    (product) => Number(select) === product.categoryId && product.salesRevenue
  );

  // useEffect(() => {
  //   console.log("select-2", select);

  //   console.log(
  //     "filteredSalesRevenueCategoryById",
  //     filteredSalesRevenueCategoryById
  //   );
  //   const allSalesRevenue = filteredSalesRevenueCategoryById.map(
  //     (product) => product.salesRevenue
  //   );
  //   console.log("allSalesRevenue", allSalesRevenue);

  //   console.log("totalRevenue", totalRevenue);

  //   // return () => {
  //   //   second
  //   // }
  // }, [select]);

  const handleToggle = (i: any) => {
    console.log("i: ", i);

    if (i === 2) {
      toggle ? setToggle(false) : handleAscendingRevenueToggle(products, true);
      console.log("toggle click-2: ", toggle);
    } else if (i === 3) {
      toggle
        ? handleAscendingToggle(products, false)
        : handleDescendingToggle(products, true);
    }
  };

  let titles = Object.keys(sortedByRevenueDescending[select]);
  let rows = Object.values(filteredSalesRevenueCategoryById);
  titles.pop();
  console.log("rows", rows);

  const totalRevenue = rows.reduce(
    (accumulator, currentValue) => accumulator + currentValue.salesRevenue,
    initialValue
  );

  const totalCost = rows.reduce(
    (accumulator, currentValue) => accumulator + currentValue.cost,
    initialValue
  );

  const totalProfit = totalRevenue - totalCost;

  console.log("totalRevenue", totalRevenue);

  const handleAscendingToggle = (arrOfProducts: any, bool: Boolean) => {
    setToggle(bool);

    let sorted = products.sort((a, b) => {
      return a.cost - b.cost;
    });

    setSortedProducts(sorted);
  };

  const handleDescendingToggle = (arrOfProducts: any, bool: Boolean) => {
    setToggle(bool);

    let sorted = products.sort((a, b) => {
      return b.cost - a.cost;
    });

    setSortedProducts(sorted);
  };

  const handleAscendingRevenueToggle = (arrOfProducts: any, bool: Boolean) => {
    setToggle(bool);

    let sorted = arrOfProducts.sort((a: any, b: any) => {
      return a.salesRevenue - b.salesRevenue;
    });

    setSortedProducts(sorted);
  };

  return (
    <div className="w-1/2 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
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
                  onClick={() => handleToggle(i)}
                >
                  {title === "salesRevenue" ? "Revenue" : title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((rowValues, i) => {
              let cells = Object.values(rowValues);
              cells.pop();

              return (
                <tr key={i} className=" dark:bg-gray-900 dark:border-gray-700">
                  {cells.map((cell, i) => {
                    return (
                      <td
                        key={i}
                        scope="row"
                        className="px-6 py-4 dark:text-white"
                      >
                        {i === 2 || i === 3 ? `$ ${cell}` : cell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div></div>
      </div>

      <div>
        <h3>Total Revenue</h3>
        <p>$ {totalRevenue}</p>
      </div>
      <div>
        <h3>Total Profit</h3>
        <p>$ {totalProfit}</p>
      </div>
    </div>
  );
};

export default BestPerformingProductsCard;
