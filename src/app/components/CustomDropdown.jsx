import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import "../styles/customDropdown.css";

const sortOptions = [
  { label: "RECOMMENDED", value: "" },
  { label: "NEWEST FIRST", value: "newest" },
  { label: "POPULAR", value: "popular" },
  { label: "PRICE : HIGH TO LOW", value: "high-to-low" },
  { label: "PRICE : LOW TO HIGH", value: "low-to-high" },
  { label: "HIGH RATED", value: "high-rated" },
];

const CustomDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
        {sortOptions.find((opt) => opt.value === value)?.label || "RECOMMENDED"}
        {/* <FiChevronDown /> */}
      </button>
      {open && (
        <ul className="dropdown-menu">
          {sortOptions.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              {value === option.value && <FaCheck className="check-icon" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
