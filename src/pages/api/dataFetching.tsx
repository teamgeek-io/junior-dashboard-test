import React, { useEffect } from 'react';
import useSWR from 'swr';

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

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const result: ApiResponse = await response.json();
  return result;
};

export const DataFetchingComponent = () => {
  const { data, error } = useSWR<ApiResponse>('https://j5l5hqnix6.execute-api.af-south-1.amazonaws.com/dev/stats', fetcher, {
    refreshInterval: 3000, // Fetch data every 3 seconds
  });

  useEffect(() => {

  }, [data]);

  if (!data && !error) return <LoadingIndicator />;
  if (error) return <ErrorIndicator error={error} />;

  // Render component using the fetched data
  return data;
};
