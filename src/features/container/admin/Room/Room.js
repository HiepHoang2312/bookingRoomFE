import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { Image, Popconfirm, Spin, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { ngaydiData } from "../Ngaydi/ngaydiSlice";
import { removeroom, updateroom } from "./roomSlice";
import { roomData } from "./roomSlice";
function Room() {
  const match = useRouteMatch();

  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms.room.data);
  var room = [];
  if (rooms) {
    var sort = [];
    for (let i = 0; i < rooms.length; i++) {
      sort.unshift(rooms[i]);
    }
    room = sort;
  }
  const loading = useSelector((state) => state.rooms.Loading);
  const history = useHistory();
  const actionResult = async () => await dispatch(roomData());
  const actionngaydi = async () => await dispatch(ngaydiData());
  useEffect(() => {
    actionResult();
    actionngaydi();
  }, []);

  const columns = [
    {
      title: "Tên room",
      dataIndex: "name",
    },
    {
      title: "Ảnh",
      dataIndex: "anh",
    },
    {
      title: "tình trạng",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  const hangdleDelete = (e) => {
    dispatch(removeroom(e));
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  const hangdleEdit = (id) => {
    history.replace(`${match.url}/suaroom/${id}`);
  };
  const handleStatus = (e, id) => {
    if (e === 1) {
      dispatch(updateroom({ status: 0, idsua: id }));
    } else {
      dispatch(updateroom({ status: 1, idsua: id }));
    }
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  return (
    <div id="admin">
      <div className="heading">
        <h4>Quản lý phòng</h4>
        <div className="hr"></div>
      </div>
      <div className="content">
        <div className="add">
          <Link to={`${match.url}/themroom`}>
            <Button variant="outlined" color="secondary">
              <i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới
            </Button>
          </Link>
        </div>
        {loading ? (
          <div className="spin">
            <Spin className="mt-5" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={room.map((ok, index) => ({
              key: index + 1,
              name: (
                <Link to={`${match.url}/chitietroom/${ok.id}`}>{ok.name}</Link>
              ),
              anh: (
                <Image src={ok.avatar} width="150px" height="200px" alt="" />
              ),
              status: (
                <div className="action">
                  {ok.status === 1 ? (
                    <span
                      onClick={() => {
                        handleStatus(ok.status, ok.id);
                      }}
                    >
                      <i className="far fa-thumbs-up text-primary"></i>
                    </span>
                  ) : (
                    <span onClick={() => handleStatus(ok.status, ok.id)}>
                      <i className="far fa-thumbs-down "></i>
                    </span>
                  )}
                </div>
              ),
              action: (
                <div className="action">
                  <Popconfirm
                    title="Bạn có muốn sửa？"
                    onConfirm={() => {
                      hangdleEdit(ok.id);
                    }}
                    icon={<QuestionCircleOutlined style={{ color: "green" }} />}
                  >
                    <i
                      className="far fa-edit mr-4"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </Popconfirm>
                  <Popconfirm
                    title="Bạn có muốn xoá？"
                    onConfirm={() => {
                      hangdleDelete(ok.id);
                    }}
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  >
                    <i
                      className="far fa-trash-alt"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </Popconfirm>
                </div>
              ),
            }))}
          />
        )}
      </div>
    </div>
  );
}

Room.propTypes = {};

export default Room;
