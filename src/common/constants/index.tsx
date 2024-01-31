export type Category = {
  id: number;
  name: string;
};

export const categories: Category[] = [
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

export type product = {
  id: number;
  name: string;
  salesRevenue: number;
  const: number;
  catergoryId: number;
};

export const productsList = [
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
