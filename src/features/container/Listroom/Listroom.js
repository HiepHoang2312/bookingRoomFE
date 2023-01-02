import React, { useEffect, useState } from "react";
import { Rate, Select, Spin } from "antd";
import { Option } from "antd/lib/mentions";
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";
import Footer from "../trangchu/footer/Footer";
import "./listroom.css";
import { useSelector } from "react-redux";
import "./checkactive.js";
export default function Listroom() {
  const binhluans = useSelector((state) => state.binhluans.binhluan.data);
  const rooms = useSelector((state) => state.rooms.room.data);
  console.log(rooms, "'ládlas");
  const [state, setState] = useState({
    check: "trong",
    statetrongnuoc: "",
    statenuocngoai: "",
  });
  const [star, setstar] = useState("");

  useEffect(() => {
    //actionNgaydi();
    window.scrollTo(0, 0);
  }, []);

  const [q, setQ] = useState("");
  const handleSearch = (e) => {
    setQ(e.toLowerCase());
  };
  const fSearch = (rows) => {
    return rows?.filter((row) => row?.name?.toLowerCase().indexOf(q) > -1);
  };

  const checkstar = (value) => {
    // setstar(value)
    // search()
  };

  return (
    <div id="list-room">
      <div className="breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fas fa-home mr-2"></i>Trang chủ
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/list-room" disabled>
                Phòng du lịch
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <div className="row mb-4 bg-white rounded">
          <div className="col-md-3 border-right pb-3 bg ">
            <h4 className="pt-4">Tìm Kiếm phòng</h4>
            <Search
              placeholder="Tìm kiếm phòng"
              onSearch={handleSearch}
              enterButton
            />

            <h4 className="mt-3">Đánh giá</h4>
            <div className="star-mid text-primary">
              <ul>
                <li className="active">
                  <span
                    onClick={() => checkstar(5)}
                    style={{ cursor: "pointer" }}
                  >
                    <Rate value="5" disabled />
                    <span className="ml-2">từ 5 sao</span>
                    <br />
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => checkstar(4)}
                    style={{ cursor: "pointer" }}
                  >
                    <Rate value="4" disabled />
                    <span className="ml-2">từ 4 sao</span>
                    <br />
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => checkstar(3)}
                    style={{ cursor: "pointer" }}
                  >
                    <Rate value="3" disabled />
                    <span className="ml-2">từ 3 sao</span>
                    <br />
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => checkstar(2)}
                    style={{ cursor: "pointer" }}
                  >
                    <Rate value="2" disabled />
                    <span className="ml-2">từ 2 sao</span>
                    <br />
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => checkstar(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <Rate value="1" disabled />
                    <span className="ml-2">từ 1 sao</span>
                    <br />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="title text-center mt-3">
              {state.check === "trong" ? (
                <h3>Phòng trong nước</h3>
              ) : (
                <h3>Phòng nước ngoài</h3>
              )}
              <div className="hr w-25"></div>
            </div>
            <div className="box-room">
              <div className="container">
                <div className="row mt-4 ">
                  {fSearch(rooms)?.map((ok) => {
                    return (
                      <div className="col-md-6 mb-3">
                        <Link to={`/room/${ok.id}`}>
                          <div className="img rounded">
                            <img src={ok.avatar} className="img-fluid" alt="" />
                          </div>
                          <div className="content_room">
                            <div className="title_room text-capitalize">
                              {ok.name}
                            </div>

                            <div className="money float-left ml-3 text-warning">
                              {ok.gianguoilon.toLocaleString()} VNĐ
                              <br />
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
