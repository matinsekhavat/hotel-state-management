import useFetch from "../hooks/useFetch";

function LocationList() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
  if (isLoading) return <p>data is loading..</p>;
  return (
    <div className="nearbyLoactions">
      <br />
      <br />
      <h1>nearby locations🌏</h1>
      <div className="locationList">
        {data.map((item) => (
          <div className="locationItem" key={item.id}>
            <img src={item.thumbnail_url} alt={item.name} />
            <div className="locationItemDesc">
              <p className="location">{item.smart_location}</p>
              <p className="name">{item.name}</p>
              <p className="price">€&nbsp;{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationList;
