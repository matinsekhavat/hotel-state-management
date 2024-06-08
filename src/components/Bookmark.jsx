import { Link } from "react-router-dom";
import { useBookmark } from "../context/BookmarkProvider";
import Loader from "./Loader";
import ReactCountryFlag from "react-country-flag";

function Bookmark() {
  const { bookmarksLoading, bookmarks, singleBookmark } = useBookmark();
  if (bookmarksLoading) return <Loader />;
  return (
    <div>
      <h2>Bookmarks 📌</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => (
          <Link
            key={item.id}
            to={`${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div
              className={`bookmarkItem ${
                item.id == singleBookmark.id ? "current-bookmark" : ""
              }`}
            >
              <ReactCountryFlag svg countryCode={item.countryCode} />
              &nbsp; <strong>{item.cityName}</strong> &nbsp;
              <span>{item.country}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
