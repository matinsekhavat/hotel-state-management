import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./components/Header";
import LocationList from "./components/LocationList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelLayout from "./components/HotelLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<HotelLayout />}>
            <Route index element={<div>all</div>} />
            <Route path=":id" element={<div>singles</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
