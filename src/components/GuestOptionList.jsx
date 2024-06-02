import { useRef } from "react";
import GuestOptionItem from "./GuestOptionItem";
import useOutsideClick from "../hooks/useOutsideClick";

function GuestOptionList({
  options,
  setOptions,
  increaseOptionsHandler,
  decreaseOptionsHandler,
  setOpenOptions,
}) {
  const geustOptionList = [
    { id: 1, value: "adult", minLimit: 1 },
    { id: 2, value: "children", minLimit: 0 },
    { id: 3, value: "room", minLimit: 1 },
  ];
  const optionsRef = useRef();
  useOutsideClick(
    optionsRef,
    () => setOpenOptions((prev) => !prev),
    "optionDropDown"
  );

  return (
    <div className="guestOptions" ref={optionsRef}>
      {geustOptionList.map((guest) => (
        <GuestOptionItem
          key={guest.id}
          value={guest.value}
          options={options}
          setOptions={setOptions}
          decreaseOptionsHandler={decreaseOptionsHandler}
          increaseOptionsHandler={increaseOptionsHandler}
          minLimit={guest.minLimit}
        />
      ))}
    </div>
  );
}

export default GuestOptionList;
