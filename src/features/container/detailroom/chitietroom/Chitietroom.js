import React from "react";
import { useSelector } from "react-redux";
import renderHTML from "react-render-html";
import "./chitietroom.css";
function Chitietroom(props) {
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
    <div id="ct-room">
      <div className="heading-nx">
        <h3>Chi tiết</h3>
      </div>
      <div className="container">
        <div className="content-room">
          {room.map((ok) => (
            <div key={ok.id}>{renderHTML(ok.chitietroom)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

Chitietroom.propTypes = {};

export default Chitietroom;
