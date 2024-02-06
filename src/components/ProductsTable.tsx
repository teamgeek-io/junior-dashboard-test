import React, { useState, useEffect } from 'react';
import TableComponent from './table';

interface DataItem {
  id: number;
  name: string;
  salesRevenue: number;
  cost: number;
  categoryId: number;
}

const TableDisp: React.FC = () => {
  const columns = [
    {
      Header: 'ID',
      accessor: 'id', // the "key" in the data
    },
    {
      Header: 'NAME',
      accessor: 'name',
    },
    {
      Header: 'SALES REVENUE',
      accessor: 'salesRevenue',
    },
    {
      Header: 'COST',
      accessor: 'cost',
    },
    {
      Header: 'CATEGORY ID',
      accessor: 'categoryId',
    },
  ];

  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../src/data.json');
        const jsonData = await response.json();
        setData(jsonData.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TableComponent  columns={columns} data={data} />
    </div>
  );
};

export default TableDisp;
