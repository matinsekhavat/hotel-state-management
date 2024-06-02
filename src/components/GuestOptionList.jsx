import GuestOptionItem from "./GuestOptionItem";

function GuestOptionList({
  options,
  setOptions,
  increaseOptionsHandler,
  decreaseOptionsHandler,
}) {
  const geustOptionList = [
    { id: 1, value: "adult", minLimit: 1 },
    { id: 2, value: "children", minLimit: 0 },
    { id: 3, value: "room", minLimit: 1 },
  ];
  return (
    <div className="guestOptions">
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
