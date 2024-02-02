import React, { useEffect, useState } from "react";

const BestPerformingProductsCard = () => {
  const [select, setSelect] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([])

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

  let sortedByRevenueDescending = products.sort((a, b) => {
    return b.salesRevenue - a.salesRevenue;
  })

  console.log("sortedByRevenueDescending: ", sortedByRevenueDescending);
  

  const handleChange = (e: any) => {
    setSelect(e.target.value);
  };

  const filteredSalesRevenueCategoryById = sortedByRevenueDescending.filter(
    (product) => Number(select) === product.categoryId && product.salesRevenue
  );

  console.log("select-1", select);
  console.log("SalesRevenue", filteredSalesRevenueCategoryById);

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
  //   const totalRevenue = allSalesRevenue.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     initialValue
  //   );

  //   console.log("totalRevenue", totalRevenue);

  //   // return () => {
  //   //   second
  //   // }
  // }, [select]);

  // let filteredProducts = products.filter(
  //   (product) => select !== product.categoryId
  // );

  useEffect(() => {}, [select]);

  const handleToggle = (i: any) => {
    console.log("i: ", i);
    console.log("toggle click-1: ", toggle);
    console.log("products before function ternary: ", products);
    // handleAscendingDescendingToggle(products, true)

    if (i === 2) {
      toggle ? handleAscendingDescendingToggle(products, false) : handleAscendingDescendingToggle(products, true);
    } else if (i === 3) {
      toggle ? handleAscendingToggle() : handleDescendingToggle();
    }

    console.log("toggle click-1: ", toggle);

    // i === 2
    //   ? toggle
    //     ? handleAscendingToggle()
    //     : handleDescendingToggle()
    //   : i === 3
    //   ? handleAscendingToggle()
    //   : null;
  };

  let titles = Object.keys(sortedByRevenueDescending[select]);
  let rows = Object.values(filteredSalesRevenueCategoryById);
  titles.pop();

  const handleAscendingToggle = () => {
    setToggle(false);

    let sorting = products.sort((a, b) => {
      return a.salesRevenue - b.salesRevenue;
    });

    return sorting;
  };

  const handleDescendingToggle = () => {
    setToggle(true);

    let sortedDescending = products.sort((a, b) => {
      return b.salesRevenue - a.salesRevenue;
    });
    
    return sortedDescending;
  };

  const handleAscendingDescendingToggle = (arrOfProducts:any, bool:Boolean) => {
    setToggle(bool);
    console.log("bool: ", bool);
    

    let sorted = arrOfProducts.sort((a:any, b:any) => {
      return b.salesRevenue - a.salesRevenue;
    });
    return sorted;
  }

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
    </div>
  );
};

export default BestPerformingProductsCard;
