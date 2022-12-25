import React from "react";
import { useSelector } from "react-redux";
function Chitietgia(props) {
  const rooms = useSelector((state) => state.rooms.room.data);
  const room = [];
  if (rooms) {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].id === +props.id) {
        room.push(rooms[i]);
      }
    }
  }
  const tinhkhuyenmai = (money, km) => {
    return money - money * (km / 100);
  };
  const checkKhuyenmai = () => {
    if (room[0].Khuyenmais.length === 0) {
      return room[0].gianguoilon;
    } else {
      if (room[0].Khuyenmais[0].status === 0) {
        return room[0].gianguoilon;
      } else {
        return tinhkhuyenmai(
          room[0].gianguoilon,
          room[0].Khuyenmais[0].khuyenmai,
        );
      }
    }
  };

  return (
    <div>
      <div className="heading-nx">
        <h3>Chi tiết giá</h3>
      </div>
      <div className="container">
        <div className="Chitietgia">
          {room.map((ok) => (
            <div key={ok.id}>
              <p>
                - Giá tiền người lớn: {checkKhuyenmai().toLocaleString()} vnd
              </p>
              <p>- Giá tiền trẻ em: {ok.giatreem.toLocaleString()} vnd</p>
              <p>- Giá tiền em bé: {ok.giaembe.toLocaleString()} vnd</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Chitietgia.propTypes = {};

export default Chitietgia;
