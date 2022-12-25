import React from "react";
import anh from "../../../images/New Project.png";
import { Link } from "react-router-dom";

function CreateRoom(props) {
  return (
    <div>
      <div className="mb-5 room">
        <div className="heading text-center pt-5">
          <span>Tạo phòng của riêng mình</span>
          <div className="hr"></div>
          <p className="mb-4">
            Tự tạo cho mình một lộ trình thú vị để có một kỳ nghỉ đáng nhớ hơn.
          </p>
        </div>
        <div className="container">
          <Link to="/create-room">
            <img src={anh} className="w-100" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

CreateRoom.propTypes = {};

export default CreateRoom;
