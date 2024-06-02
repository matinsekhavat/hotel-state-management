import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch } from "react-icons/hi";
import { useState } from "react";
import GuestOptionList from "./GuestOptionList";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // guest options
  function increaseOptionsHandler(value) {
    setOptions((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  }
  function decreaseOptionsHandler(value) {
    setOptions((prev) => ({ ...prev, [value]: prev[value] - 1 }));
  }

  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            type="text"
            placeholder="where to go?"
            className="headerSearchInput"
            name="destination"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2024/04/04</div>
          <span className="seperator"></span>
        </div>
        <span className="seperator"></span>
        <div className="headerSearchItem">
          <div
            id="optionDropDown"
            onClick={() => setOpenOptions((prev) => !prev)}
          >
            1 Adult &bull; 2 children &bull; 1 room
          </div>
          {openOptions && (
            <GuestOptionList
              options={options}
              setOptions={setOptions}
              increaseOptionsHandler={increaseOptionsHandler}
              decreaseOptionsHandler={decreaseOptionsHandler}
              setOpenOptions={setOpenOptions}
            />
          )}

          <span className="seperator"></span>
        </div>
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
