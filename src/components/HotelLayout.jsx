import { Outlet } from "react-router-dom";
import Map from "./Map";

function HotelLayout() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map />
    </div>
  );
}

export default HotelLayout;
