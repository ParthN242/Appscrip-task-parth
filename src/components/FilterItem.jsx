"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUp, ArrowDown } from "@/assets";

const FilterItem = ({ item }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="filter_item">
      <div
        className="filter_header"
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <div className="filter_title_subtitle">
          <p className="filter_title">{item.title}</p>
          <p className="filter_subtitle">ALL</p>
        </div>
        <div className="filter_toggle_icon">
          {isFilterOpen ? (
            <Image src={ArrowUp} alt="Up Arrow" title="Up Arrow" />
          ) : (
            <Image src={ArrowDown} alt="Down Arrow" title="Down Arrow" />
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div className="filter_option">
          <button className="filter_option_unselect">Unselect All</button>
          <div className="filter_option_list">
            {item.options.map((option, index) => (
              <div className="filter_option_list_box" key={index}>
                <input type="checkbox" name={option} id={option} />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterItem;
