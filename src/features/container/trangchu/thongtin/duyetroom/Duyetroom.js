import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { Popconfirm } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  hoadoncanhanData,
  removehoadoncanhan,
  updatehoadoncanhan,
} from "../../../admin/Hoadoncanhan/hoadoncanhanSlice";
import "./duyetroom.css";
export default function Duyetroom() {
  const dispatch = useDispatch();
  const actionResult = async () => {
    await dispatch(hoadoncanhanData());
  };
  const infor = useSelector((state) => state.infor.infor.data);
  const hoadoncanhans = useSelector(
    (state) => state.hoadoncanhans.hoadoncanhan.data,
  );
  const hoadon = [];
  if (hoadoncanhans && infor) {
    for (let i = 0; i < hoadoncanhans.length; i++) {
      if (
        hoadoncanhans[i].userId === infor.id &&
        hoadoncanhans[i].agree === 0
      ) {
        hoadon.push(hoadoncanhans[i]);
      }
    }
  }
  const dongy = (e) => {
    dispatch(updatehoadoncanhan({ agree: 1, idsua: e }));
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  const huy = (e) => {
    dispatch(removehoadoncanhan(e));
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  useEffect(() => {
    actionResult();
  }, []);
  return (
    <div className="duyetroom">
      <div className="duyetroom__header">
        <h3 className="text-center">Duyệt phòng</h3>
        <div className="hr"></div>
      </div>
      <div className="container">
        <div className="duyetroom__content">
          {hoadon.length === 0
            ? ""
            : hoadon.map((ok, index) => (
                <div className="duyetroom__box" key={index}>
                  <div className="duyetroom--name">{ok.diadiemdi}</div>
                  <div className="duyetroom--form">
                    <div className="giaroom">
                      {ok.giatien.toLocaleString()} vnđ
                    </div>
                  </div>
                  <div className="btn__room">
                    <Popconfirm
                      title="Bạn có chắc chắn？"
                      onConfirm={() => {
                        dongy(ok.id);
                      }}
                      icon={
                        <QuestionCircleOutlined style={{ color: "green" }} />
                      }
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        className="mr-1"
                      >
                        Đồng ý
                      </Button>
                    </Popconfirm>
                    <Popconfirm
                      title="Bạn có chắc chắn？"
                      onConfirm={() => {
                        huy(ok.id);
                      }}
                      icon={
                        <QuestionCircleOutlined style={{ color: "green" }} />
                      }
                    >
                      <Button color="secondary" variant="contained">
                        Huỷ
                      </Button>
                    </Popconfirm>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
