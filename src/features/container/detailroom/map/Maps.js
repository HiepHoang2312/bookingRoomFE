import React from "react";
import { useSelector } from "react-redux";
import renderHTML from "react-render-html";
import "./map.css";
function Maps(props) {
  const rooms = useSelector((state) => state.rooms.room.data);
  const room = [];
  if (rooms) {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].id === +props.id) {
        room.push(rooms[i]);
      }
    }
  }
  return (
    <div
      id="map-container-google-1"
      className="z-depth-1-half map-container mb-3"
    >
      {room.map((ok) => (
        <div key={ok.id}>{renderHTML(ok.bando)}</div>
      ))}
    </div>
  );
}

Maps.propTypes = {};

export default Maps;
