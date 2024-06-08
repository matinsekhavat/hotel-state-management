import { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";
function BookmarkProvider({ children }) {
  const { data: bookmarks, isLoading: bookmarksLoading } = useFetch(
    `${BASE_URL}/bookmarks`
  );
  const [isLoadingBookmark, setIsLoadingBookmark] = useState(false);
  const [singleBookmark, setSingleBookmark] = useState({});

  async function getBookmark(id) {
    try {
      setIsLoadingBookmark(true);
      const res = await fetch(`${BASE_URL}/bookmarks/${id}`);
      const data = await res.json();
      setSingleBookmark(data);
    } catch (error) {
      throw new Error("sth wrong", error.message);
    } finally {
      setIsLoadingBookmark(false);
    }
  }
  return (
    <BookmarkContext.Provider
      value={{
        isLoadingBookmark,
        singleBookmark,
        getBookmark,
        bookmarks,
        bookmarksLoading,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

function useBookmark() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("can't access this data in this area");
  }
  return context;
}

export { useBookmark };
export default BookmarkProvider;
