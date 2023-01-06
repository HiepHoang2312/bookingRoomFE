import { Rate, Spin, Tooltip } from "antd";
import { getDate } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Room.css";
function Roomtrongnuoc(props) {
  const rooms = useSelector((state) => state.rooms.room.data);
  const room = [];
  const formatdate = (e) => {
    if (e) {
      var ngay = e.substr(0, 2);
      var thang = e.substr(3, 2);
      var nam = e.substr(6, 4);
      return nam + "-" + thang + "-" + ngay;
    }
  };
  const maxDate = (e) => {
    if (e) {
      var ngayMax = formatdate(e[0].ngay);
      for (let i = 0; i < e.length; i++) {
        if (ngayMax <= formatdate(e[i].ngay)) {
          ngayMax = formatdate(e[i].ngay);
        }
      }
      return ngayMax;
    }
  };
  if (rooms) {
    var sort = [];
    for (let i = 0; i < rooms.length; i++) {
      sort.unshift(rooms[i]);
    }
    var date = new Date();
    var today =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1 > 10
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "-" +
      (date.getDate() > 10 ? date.getDate() : "0" + date.getDate());
    for (let i = 0; i < sort.length; i++) {
      if (
        sort[i].status === 1 &&
        sort[i].vitri === 1 &&
        room.length < 6 &&
        maxDate(sort[i].Ngaydis) >= today
      ) {
        room.push(sort[i]);
      }
    }
  }
  const binhluans = useSelector((state) => state.binhluans.binhluan.data);
  const tinhdiem = (id) => {
    var binhluanload = [];
    if (binhluans) {
      for (let i = 0; i < binhluans.length; i++) {
        if (binhluans[i].status === +1 && binhluans[i].roomId === id) {
          binhluanload.push(binhluans[i]);
        }
      }
    }
    var tong = new Number();
    if (binhluans) {
      for (let i = 0; i < binhluanload.length; i++) {
        tong += binhluanload[i].star;
      }
    }
    var diem = Math.round((tong / +binhluanload.length) * 10) / 10;
    if (isNaN(diem)) {
      diem = 0;
    }
    return diem;
  };
  const tinhkhuyenmai = (money, km) => {
    return (money - money * (km / 100)).toLocaleString();
  };
  return (
    <div className="mt-5 mb-5 room mb-4" id="room">
      <div className="heading text-center">
        <span>Danh sách</span>
        <div className="hr"></div>
        <p className="mb-4">
          Hãy tìm kiếm cho bản thân và gia đình của bạn một nơi nghỉ ngơi lý
          tưởng !!!
        </p>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {rooms?.length === 0 ? (
            <div className="spin">
              <Spin />
            </div>
          ) : (
            rooms?.map((ok) => (
              <div className="col-md-4 mb-2" key={ok.id}>
                {ok.Khuyenmais.length === 0 && ok.Khuyenmais.length < 6 ? (
                  ""
                ) : ok.Khuyenmais[0].status === 0 ? (
                  ""
                ) : (
                  <Tooltip
                    placement="right"
                    color="#0abf55"
                    title={ok.Khuyenmais[0].name}
                  >
                    <div className="ribbon-wrapper">
                      <div className="ribbon-red">
                        Giảm {ok.Khuyenmais[0].khuyenmai}%
                      </div>
                    </div>
                  </Tooltip>
                )}
                <Link to={`/room/${ok.id}`}>
                  <div className="img rounded">
                    <img src={ok.avatar} className="img-fluid" alt="" />
                  </div>
                  <div className="content_room">
                    <div className="title_room text-capitalize">{ok.name}</div>
                    <div className="star float-left">
                      <Rate value={tinhdiem(ok.id)} disabled />
                    </div>
                    <div className="money float-left ml-3 text-warning">
                      {ok.Khuyenmais.length === 0 ? (
                        <div>
                          {ok.gianguoilon.toLocaleString()} VNĐ
                          <br />
                        </div>
                      ) : ok.Khuyenmais[0].status === 0 ? (
                        <div>
                          {ok.gianguoilon.toLocaleString()} VNĐ
                          <br />
                        </div>
                      ) : (
                        <div>
                          {tinhkhuyenmai(
                            ok.gianguoilon,
                            ok.Khuyenmais[0].khuyenmai,
                          )}{" "}
                          VNĐ
                          <br />
                          <del> {ok.gianguoilon.toLocaleString()} VNĐ</del>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="xem-them mt-3">
        <Link to="/list-room">Xem Thêm &gt;&gt;</Link>
      </div>
    </div>
  );
}

Roomtrongnuoc.propTypes = {};

export default Roomtrongnuoc;
