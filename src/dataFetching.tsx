import React, { useEffect, useState } from 'react';

interface MetricData {
  amount: number;
  change_percent: number;
}

interface ApiResponse {
  total_views: MetricData;
  total_profit: MetricData;
  total_product_sales: MetricData;
  total_users: MetricData;
}

const LoadingIndicator: React.FC = () => <p>Loading...</p>;
const ErrorIndicator: React.FC<{ error: Error }> = ({ error }) => (
  <div>
    <p>Error fetching data:</p>
    <pre>{error.message}</pre>
  </div>
);

export const DataFetchingComponent = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://j5l5hqnix6.execute-api.af-south-1.amazonaws.com/dev/stats'); // API endpoint
      const result: ApiResponse = await response.json();
      setData(result);
    } catch (Error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 3 seconds
    }, 3000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
      console.log("Cleanup");
    };
  }, []);

  if (loading) return <LoadingIndicator />;
  if (error) return <ErrorIndicator error={error} />;
  if (!data) return null; // or a default state if necessary
  
  console.log("Data from DataFetchingComponent : ", data);
  return data;
};


