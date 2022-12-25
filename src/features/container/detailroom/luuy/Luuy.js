import React, { Component } from "react";
import renderHTML from "react-render-html";
import { useSelector } from "react-redux";
import "./luuy.css";
function Luuy(props) {
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
    <div>
      <div className="heading-nx">
        <h3>Lưu ý</h3>
      </div>
      <div className="container">
        <div className="luuy">
          {room.map((ok) => (
            <div key={ok.id}>{renderHTML(ok.luuy)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

Luuy.propTypes = {};

export default Luuy;
