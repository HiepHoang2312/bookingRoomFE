import React from "react";
import { Link } from "react-router-dom";
import "./CreateRoom.css";

function CreateRoom(props) {
  return (
    <div>
      <div className="mb-5 room">
        <div className="heading text-center pt-5">
          <span>Tạo chuyến đi của riêng mình</span>
          <div className="hr"></div>
          <p className="mb-4">
            Tự tạo cho mình một lộ trình thú vị để có một kỳ nghỉ đáng nhớ hơn
            (Combo trọn gói chuyến du lịch gồm phương tiện đi lại, nơi nghỉ ngơi
            và các tiện ích khác phù hợp với nhu cầu của bạn) .
          </p>
        </div>
        <div className="container CreateRoomContainer">
          <Link to="/create-room">
            <button className="CreateRoomButton">Tạo ngay</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

CreateRoom.propTypes = {};

export default CreateRoom;
