import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import renderHTML from "react-render-html";
import { useParams } from "react-router-dom";
function Chitietquocgia(props) {
  const { id } = useParams();
  const room = useSelector((state) =>
    state.rooms.room.data.find((x) => x.id === +id),
  );
  const loading = useSelector((state) => state.rooms.loading);
  return (
    <div id="admin">
      <div className="heading">
        <h4>Chi tiết room</h4>
        <div className="hr"></div>
      </div>
      <div className="content">
        <div className="ct">
          {loading ? (
            <div className="spin">
              <Spin className="mt-5" />
            </div>
          ) : (
            <div>
              <p>
                Tên room:&emsp;{" "}
                <b>
                  <i>{room.name}</i>
                </b>
              </p>
              <p>
                Avatar:&emsp;
                <img width="350px" height="393px" src={room.avatar} alt="" />
              </p>
              <p>Trailer:</p>
              <div className="text-center">
                <div className="embed-responsive embed-responsive-16by9">
                  {renderHTML(room.trailer)}
                </div>
              </div>
              <p>
                Giá tiền người lớn:&emsp;{" "}
                <b>
                  <i>{room.gianguoilon}</i>
                </b>
              </p>
              <p>
                Giá trẻ em:&emsp;{" "}
                <b>
                  <i>{room.giatreem}</i>
                </b>
              </p>
              <p>
                Giá em bé:&emsp;{" "}
                <b>
                  <i>{room.giaembe}</i>
                </b>
              </p>
              <p>Banner: </p>
              {room.Anhs.map((oki) => (
                <div className="text-center mb-3">
                  <img src={oki.link} width="500px" height="400px" alt="" />
                </div>
              ))}
              <p>Bản đồ:&emsp; </p>
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container mb-3"
              >
                {renderHTML(room.bando)}
              </div>
              <p className="text-justify">
                Chi tiết room:&emsp; {renderHTML(room.chitietroom)}
              </p>
              <p className="text-justify">
                Lưu ý:&emsp; {renderHTML(room.luuy)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Chitietquocgia.propTypes = {};

export default Chitietquocgia;
