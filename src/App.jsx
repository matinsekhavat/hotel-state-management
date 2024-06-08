import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header";
import LocationList from "./components/LocationList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelLayout from "./components/HotelLayout";
import Hotels from "./components/Hotels";
import HotelsProvider from "./context/HotelsProvider";
import SingleHotel from "./components/SingleHotel";
import BookmarkLayout from "./components/BookmarkLayout";
import BookmarkProvider from "./context/BookmarkProvider";
import Bookmark from "./components/Bookmark";
import SingleBookmark from "./components/SingleBookmark";

function App() {
  return (
    <>
      <BrowserRouter>
        <HotelsProvider>
          <BookmarkProvider>
            <Toaster />
            <Header />
            <Routes>
              <Route path="/" element={<LocationList />} />
              <Route path="/hotels" element={<HotelLayout />}>
                <Route index element={<Hotels />} />
                <Route path=":id" element={<SingleHotel />} />
              </Route>
              <Route path="/bookmark" element={<BookmarkLayout />}>
                <Route index element={<Bookmark />} />
                <Route path=":id" element={<SingleBookmark />} />
                <Route path="add" element={<div>add</div>} />
              </Route>
            </Routes>
          </BookmarkProvider>
        </HotelsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
