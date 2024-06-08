import { useEffect } from "react";
import { useBookmark } from "../context/BookmarkProvider";
import { useParams } from "react-router-dom";

function SingleBookmark() {
  const { id } = useParams();
  const { currentBookmarkHandler } = useBookmark();
  useEffect(() => {
    currentBookmarkHandler(id);
  }, [id, currentBookmarkHandler]);
  return <div>SingleBookmark</div>;
}

export default SingleBookmark;
