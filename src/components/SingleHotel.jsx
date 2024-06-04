import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";
import { useHotel } from "../context/HotelsProvider";

function SingleHotel() {
  const { id } = useParams();
  const { currentHotelHandler } = useHotel();
  const { data, isLoading } = useFetch(`http://localhost:5000/hotels/${id}`);
  useEffect(() => {
    currentHotelHandler(id);
  }, [id, currentHotelHandler]);
  if (isLoading) return <Loader />;
  return (
    <div className="room">
      <div className="roomDetail">
        <h2>{data.name}</h2>
        <div>
          {data.number_of_reviews} reviews &bull; {data.smart_location}
        </div>
        <img src={data.thumbnail_url} alt={data.name} />
      </div>
    </div>
  );
}

export default SingleHotel;
