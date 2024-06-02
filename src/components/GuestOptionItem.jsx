import { HiMinus, HiPlus } from "react-icons/hi";

function GuestOptionItem({
  value,
  options,
  increaseOptionsHandler,
  decreaseOptionsHandler,
  minLimit,
}) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">{value}</span>
      <div className="optionCounter">
        <button
          className="optionCounterBtn"
          onClick={() => decreaseOptionsHandler(value, minLimit)}
          disabled={options[value] <= minLimit}
        >
          <HiMinus className="icon" />
        </button>
        <span className="optioncounterNumber">{options[value]}</span>
        <button
          className="optionCounterBtn"
          onClick={() => increaseOptionsHandler(value)}
        >
          <HiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}

export default GuestOptionItem;
