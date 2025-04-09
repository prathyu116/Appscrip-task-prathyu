import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import "../styles/collapse.css";


const Colllapse = ({ title,title2, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="collapse-container">
      
      <div className="collapse-header">
        <div className="collapse-title" onClick={toggleCollapse}>
          <div className="collapse-title-left">
            <h4>{title}</h4>
            <p>{title2}</p>
          </div>
          <div className="collapse-title-right">
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        </div>
      </div>
      
      <div className="collapse-value">
        {isOpen && <div className="collapse-content">{children}</div>}
      </div>
    </div>
  );
};

export default Colllapse;
