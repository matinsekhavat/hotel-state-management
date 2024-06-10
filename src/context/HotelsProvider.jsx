import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const HotelsContext = createContext();

export default function HotelsProvider({ children }) {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;
  const [currentHotelId, setCurrentHotelId] = useState(null);

  function currentHotelHandler(id) {
    setCurrentHotelId(id);
  }
  const { isLoading: hotelLoading, data: hotels } = useFetch(
    "https://hotel-managment-api.vercel.app/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  return (
    <HotelsContext.Provider
      value={{ hotelLoading, hotels, currentHotelId, currentHotelHandler }}
    >
      {children}
    </HotelsContext.Provider>
  );
}

export function useHotel() {
  const context = useContext(HotelsContext);
  if (!context) {
    throw new Error("HotelContext it's not accessible into this area");
  }
  return context;
}
