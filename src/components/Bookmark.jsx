import { useBookmark } from "../context/BookmarkProvider";
import Loader from "./Loader";
import ReactCountryFlag from "react-country-flag";

function Bookmark() {
  const { bookmarksLoading, bookmarks } = useBookmark();
  if (bookmarksLoading) return <Loader />;
  return (
    <div>
      <h2>Bookmarks 📌</h2>
      <div className="bookmarkList">
        {bookmarks.map((item) => (
          <div className="bookmarkItem" key={item?.id}>
            <ReactCountryFlag svg countryCode={item.countryCode} />
            &nbsp; <strong>{item?.cityName}</strong> &nbsp;
            <span>{item?.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
