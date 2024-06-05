import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header";
import LocationList from "./components/LocationList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelLayout from "./components/HotelLayout";
import Hotels from "./components/Hotels";
import HotelsProvider from "./context/HotelsProvider";
import SingleHotel from "./components/SingleHotel";

function App() {
  return (
    <>
      <BrowserRouter>
        <HotelsProvider>
          <Toaster />
          <Header />
          <Routes>
            <Route path="/" element={<LocationList />} />
            <Route path="/hotels" element={<HotelLayout />}>
              <Route index element={<Hotels />} />
              <Route path=":id" element={<SingleHotel />} />
            </Route>
            <Route path="/bookmark" element={<div>bookmark</div>} />
          </Routes>
        </HotelsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
