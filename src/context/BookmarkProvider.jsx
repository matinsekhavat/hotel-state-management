import { createContext, useContext } from "react";

const BookmarkContext = createContext();

function BookmarkProvider({ children }) {
  return (
    <BookmarkContext.Provider value={{}}>{children}</BookmarkContext.Provider>
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
