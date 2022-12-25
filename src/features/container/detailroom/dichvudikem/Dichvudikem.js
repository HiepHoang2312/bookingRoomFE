import React from "react";
import { useSelector } from "react-redux";
import "./dichvudikem.css";
function Dichvudikem(props) {
  const rooms = useSelector((state) => state.rooms.room.data);
  const room = [];
  if (rooms) {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].id === +props.id) {
        room.push(rooms[i].Dichvus);
      }
    }
  }
  return (
    <div>
      <div className="heading-nx">
        <h3>Dịch vụ đi kèm</h3>
      </div>
      <div className="container">
        <div className="dichvudikem">
          {room[0].map((ok) => (
            <p key={ok.id}>• {ok.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

Dichvudikem.propTypes = {};

export default Dichvudikem;
