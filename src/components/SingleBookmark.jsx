import { useEffect } from "react";
import { useBookmark } from "../context/BookmarkProvider";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

function SingleBookmark() {
  const { id } = useParams();
  const { getBookmark, singleBookmark, isLoadingBookmark } = useBookmark();
  useEffect(() => {
    getBookmark(id);
  }, [id]);
  if (isLoadingBookmark) return <Loader />;
  return <div>{singleBookmark?.id}</div>;
}

export default SingleBookmark;
