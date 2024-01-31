import { categories } from "../../common/constants/index.tsx";

type SelectCategoryProps = {
  onCategoryChange: (categoryId: number) => void;
};

const SelectCategory = ({ onCategoryChange }: SelectCategoryProps) => {
  return (
    <div>
      <div className="flex flex-col gap-5.5 p-6.5">
        <div>
          <label className="mb-3 block text-black dark:text-white">
            Select Category
          </label>
          <div className="relative z-20 bg-white dark:bg-form-input">
            <select
              className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
              onChange={(event) => onCategoryChange(Number(event.target.value))}
            >
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
            <span className="absolute z-10 right-3 top-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                    fill="#637381"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
