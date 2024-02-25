import React from "react";
import "./DropDown.css";
import {DropdownButton} from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const DropDown = ({moreInfo, dropTitle}) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

  return (
    <div>
      <button onClick={handleOpen} 
     className={`drop-button ${open ? 'open' : ''}`}>
        <div className="drop-button-contents">
        <div className="drop title">{dropTitle}</div>
        <div className="drop-icon">
        {open ? <IoIosArrowUp /> :    <IoIosArrowDown />}
     
        </div>
        </div>
        <div className={`drop-info ${open ? 'open' : ''}`}>
        {moreInfo}
      </div>
      </button>
     
    </div>
  );
};

export default DropDown;
