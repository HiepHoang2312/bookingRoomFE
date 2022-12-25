import React, { useEffect } from "react";
import { Popconfirm, Spin, Table } from "antd";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { quocgiaData, removequocgia, updatequocgia } from "./quocgiaSlice";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { diadiemData } from "../DiaDiem/diadiemSlice";
function Quocgia() {
  const match = useRouteMatch();

  const columns = [
    {
      title: "tên quốc gia",
      dataIndex: "name",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ];
  var sts = 1;
  const data = [
    {
      key: "1",
      name: (
        <div>
          <div>John Brown</div>
        </div>
      ),
      status: (
        <div className="action">
          {sts === 1 ? (
            <div>
              <i className="far fa-thumbs-up "></i>
            </div>
          ) : (
            <div>
              <i className="far fa-thumbs-down "></i>
            </div>
          )}
        </div>
      ),
      action: (
        <div className="action">
          <div>
            <i className="far fa-edit mr-4"></i>
          </div>
          <div>
            <i className="far fa-trash-alt"></i>
          </div>
        </div>
      ),
    },
  ];
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  const quocgia = useSelector((state) => state.quocgias.quocgia.data);
  const loading = useSelector((state) => state.quocgias.loading);
  const dispatch = useDispatch();
  const actionResult = async () => {
    await dispatch(quocgiaData());
  };
  const actionDiadiem = async () => {
    await dispatch(diadiemData());
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const history = useHistory();
  const hangdleDelete = (e) => {
    dispatch(removequocgia(e));
    setTimeout(() => {
      actionResult();
      actionDiadiem();
    }, 500);
  };
  const hangdleEdit = (id) => {
    history.replace(`${match.url}/suaquocgia/${id}`);
  };
  const handleStatus = (e, id) => {
    if (e === 1) {
      dispatch(updatequocgia({ status: 0, idsua: id }));
    } else {
      dispatch(updatequocgia({ status: 1, idsua: id }));
    }
    setTimeout(() => {
      actionResult();
    }, 500);
  };
  return (
    <div id="admin">
      <div className="heading">
        <h4>Quốc gia</h4>
        <div className="hr"></div>
      </div>
      <div className="content">
        <div className="add">
          <div to={`${match.url}/themquocgia`}>
            <Button variant="outlined" color="secondary">
              <i className="fas fa-plus"></i>&nbsp;&nbsp; Thêm mới
            </Button>
          </div>
        </div>
        {loading ? (
          <div className="spin">
            <Spin className="mt-5" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={quocgia.map((ok, index) => ({
              key: index + 1,
              name: (
                <div to={`${match.url}/chitietquocgia/${ok.id}`}>{ok.name}</div>
              ),
              status: (
                <div className="action">
                  {ok.status === 1 ? (
                    <div
                      onClick={() => {
                        handleStatus(ok.status, ok.id);
                      }}
                    >
                      <i className="far fa-thumbs-up "></i>
                    </div>
                  ) : (
                    <div onClick={() => handleStatus(ok.status, ok.id)}>
                      <i className="far fa-thumbs-down "></i>
                    </div>
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
                    <div>
                      <i className="far fa-edit mr-4"></i>
                    </div>
                  </Popconfirm>
                  <Popconfirm
                    title="Bạn có muốn xoá？"
                    onConfirm={() => {
                      hangdleDelete(ok.id);
                    }}
                    icon={<QuestionCircleOutlined style={{ color: "red" }} />}
                  >
                    <div>
                      <i className="far fa-trash-alt"></i>
                    </div>
                  </Popconfirm>
                </div>
              ),
            }))}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
}

Quocgia.propTypes = {};

export default Quocgia;
