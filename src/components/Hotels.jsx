import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

function Hotels() {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data: hotels } = useFetch(
    "http://localhost:5000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  if (isLoading) return <Loader />;
  return <div>{hotels.length}</div>;
}

export default Hotels;
