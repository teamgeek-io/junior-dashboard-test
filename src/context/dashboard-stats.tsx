import { createContext } from "react";

interface Stats {
  amount: number;
  change_percent: number;
}

type StatsContextType = {
  total_views: Stats;
  total_profit: Stats;
  total_product_sales: Stats;
  total_users: Stats;
};

export const StatsContext = createContext<StatsContextType>({
  total_views: { amount: 0, change_percent: 0 },
  total_profit: { amount: 0, change_percent: 0 },
  total_product_sales: { amount: 0, change_percent: 0 },
  total_users: { amount: 0, change_percent: 0 },
});
