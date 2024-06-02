import { Link, useSearchParams } from "react-router-dom";
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
