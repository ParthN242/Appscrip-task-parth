import { FILTER_DATA } from "@/constants";
import FilterItem from "./FilterItem";

const ProductFilter = () => {
  return (
    <div className="product_filter">
      <div className="filter_first_group">
        <input type="checkbox" name="customizable" id="customizable" />
        <label htmlFor="customizable" className="font-bold">
          Customizable
        </label>
      </div>
      <div className="filter_second_group">
        {FILTER_DATA.map((item, index) => (
          <FilterItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
