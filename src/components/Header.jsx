import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch } from "react-icons/hi";
import { useState } from "react";
import GuestOptionList from "./GuestOptionList";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
  // useSearchParams,
} from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [destination, setDestination] = useState(
    searchParams.get("destination") || ""
  );
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "travelDate",
    },
  ]);
  // guest options
  function increaseOptionsHandler(value) {
    setOptions((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  }
  function decreaseOptionsHandler(value) {
    setOptions((prev) => ({ ...prev, [value]: prev[value] - 1 }));
  }
  //handle search btn magnify
  function handleSearch() {
    // const params = new URLSearchParams();
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      destination,
      options: JSON.stringify(options),
    });
    console.log(encodedParams);
    // setSearchParams(encodedParams);
    navigate(`/hotels?${encodedParams.toString()}`);
    // navigate(`/hotels?${params.toString()}`);
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
          <div
            className="dateDropDown"
            onClick={() => setOpenDate((prev) => !prev)}
          >
            <HiCalendar className="headerIcon dateIcon" />
            <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )} `}</span>
          </div>
          {openDate && (
            <DateRange
              ranges={date}
              className="date"
              onChange={(item) => setDate([item.travelDate])}
              minDate={new Date()}
              moveRangeOnFirstSelection={true}
            />
          )}
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
            <HiSearch className="headerIcon" onClick={handleSearch} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
