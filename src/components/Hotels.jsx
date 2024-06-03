import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useHotel } from "../context/HotelsProvider";

function Hotels() {
  const { hotelLoading, hotels } = useHotel();

  if (hotelLoading) return <Loader />;
  return (
    <>
      <div className="searchList">
        <h2>search results😄 ({hotels.length}).</h2>
        {hotels.map((item) => (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div className={`searchItem`}>
              <img src={item.thumbnail_url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                €&nbsp;{item.price}&nbsp;
                <span>night</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Hotels;
