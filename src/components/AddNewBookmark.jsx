import { useNavigate } from "react-router-dom";
import useUrlLocation from "../hooks/useUrlLocation";
import { useEffect, useState } from "react";
const BASE_REVERSE_GEOCODING_API =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

function AddNewBookmark() {
  const navigate = useNavigate();
  const [lat, lng] = useUrlLocation();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [currentGeocoding, setCurrentGeocidng] = useState({});
  const [isLoadingGeo, setIsLoadingGeo] = useState(false);
  useEffect(() => {
    async function fetchGeocoding() {
      setIsLoadingGeo(true);
      try {
        const res = await fetch(
          `${BASE_REVERSE_GEOCODING_API}?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );
        console.log(
          `${BASE_REVERSE_GEOCODING_API}?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        );

        const data = await res.json();
        setCurrentGeocidng(data);
      } catch (error) {
        throw new Error("Sth wrong ", error.message);
      } finally {
        setIsLoadingGeo(false);
      }
      alert("به دلیل تحریمات این قسمت ناتمام ماند😪");
    }
    fetchGeocoding();
  }, [lat, lng]);
  return (
    <div>
      <h2>Add new Bookmark✅</h2>
      <form className="form">
        <div className="formControl">
          <label htmlFor="cityName">cityName</label>
          <input
            type="text"
            name="cityName"
            id="cityName"
            value={currentGeocoding.city || ""}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>{" "}
        <div className="formControl">
          <label htmlFor="country">country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            className="btn btn--back"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            &larr; back
          </button>
          <button className="btn btn--primary">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewBookmark;
