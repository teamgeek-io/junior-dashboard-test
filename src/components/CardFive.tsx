interface Categories {
	id: number;
	name: string;
}

interface APIData {
	id: number;
	name: string;
	salesRevenue: number;
	cost: number;
	categoryId: number;
}
const data: APIData[] = [
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

const categories: Categories[] = [
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
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export function CardFive() {
	const [category, setCategory] = useState<Categories["id"]>(1);
	const [categoryData, setCategoryData] = useState<APIData[]>([]);
	const [sortDesc, setSortDesc] = useState<boolean>(false);
	const [sortType, setSortType] = useState<"cost" | "revenue">("revenue");
	useEffect(() => {
		if (!category) return;
		const filteredData = data.filter((item) => {
			return item.categoryId === category;
		});
		filteredData.sort((a, b) => {
			if (sortType === "cost") {
				if (sortDesc) {
					return b.cost - a.cost;
				} else {
					return a.cost - b.cost;
				}
			} else {
				if (sortDesc) {
					return b.salesRevenue - a.salesRevenue;
				} else {
					return a.salesRevenue - b.salesRevenue;
				}
			}
		});
		setCategoryData(filteredData);
	}, [category, sortDesc, sortType]);
	return (
		<div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
			<div className="flex items-center space-x-2 mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 6h.008v.008H6V6Z"
					/>
				</svg>
				<select
					className="border border-stroke rounded-sm px-2 py-1.5 bg-white dark:bg-boxdark dark:border-strokedark"
					defaultValue={1}
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
						setCategory(Number(event.target.value))
					}
				>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
				<select
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
						if (
							event.target.value === "cost" ||
							event.target.value === "revenue"
						) {
							setSortType(event.target.value);
						} else {
							toast.error("Invalid sort type");
						}
					}}
					defaultValue={"revenue"}
					className="border border-stroke rounded-sm px-2 py-1.5 bg-white dark:bg-boxdark dark:border-strokedark"
				>
					<option value="cost">Cost</option>
					<option value="revenue">Revenue</option>
				</select>
				<select
					onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
						setSortDesc(event.target.value === "descending" ? true : false)
					}
					defaultValue={"descending"}
					className="border border-stroke rounded-sm px-2 py-1.5 bg-white dark:bg-boxdark dark:border-strokedark"
				>
					<option value="descending">Descending</option>
					<option value="ascending">Ascending</option>
				</select>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="bg-gray-200 dark:bg-gray-800">
							<th className="px-4 py-2 text-left">ID</th>
							<th className="px-4 py-2 text-left">Name</th>
							<th className="px-4 py-2 text-left">Revenue</th>
							<th className="px-4 py-2 text-left">Cost</th>
						</tr>
					</thead>
					<tbody>
						{categoryData.map((item: APIData) => (
							<tr key={item.id}>
								<td className="border px-4 py-2">{item.id}</td>
								<td className="border px-4 py-2">{item.name}</td>
								<td className="border px-4 py-2">R{item.salesRevenue}</td>
								<td className="border px-4 py-2">R{item.cost}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<h1 className="text-2xl font-semibold mt-4">
				Total Revenue: R
				{categoryData
					.reduce((acc: number, item: APIData) => acc + item.salesRevenue, 0)
					.toFixed(2)}
			</h1>
			<h1 className="text-2xl font-semibold mt-4">
				Total Profit: R
				{categoryData
					.reduce(
						(acc: number, item: APIData) =>
							acc + (item.salesRevenue - item.cost),
						0
					)
					.toFixed(2)}
			</h1>
		</div>
	);
}
