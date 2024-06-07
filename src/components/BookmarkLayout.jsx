import { Outlet } from "react-router-dom";
import Map from "./Map";
import { useBookmark } from "../context/BookmarkProvider";

function BookmarkLayout() {
  const { bookmarks } = useBookmark();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map locations={bookmarks} />
    </div>
  );
}

export default BookmarkLayout;
