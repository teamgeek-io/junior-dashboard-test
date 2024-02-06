import React from 'react';

interface TableProps {
  data: Array<{ id: number; name: string; salesRevenue: number; cost: number; categoryId: number}>;
}

const CardSales: React.FC<TableProps> = ({ data }) => {
  return (
    <table className=' border-collapse rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
      <thead>
        <tr className=' text-left order-collapse text-black border border-stroke bg-gray-2 dark:bg-meta-4 dark:text-stroke'>
          <th className=' text-center'>ID</th>
          <th>NAME</th>
          <th>SALES REVENUE</th>
          <th>COST</th>
          <th>CATEGORY ID</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className=' text-center'>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.salesRevenue}</td>
            <td>{row.cost}</td>
            <td>{row.categoryId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
  
  export default CardSales;
  