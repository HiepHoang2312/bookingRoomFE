import { message } from "antd";
import axiosClient from "./axiosClient";

class RoomApi {
  getAll = (params) => {
    const url = "/rooms";
    return axiosClient.get(url, { params });
  };
  getOne = (id) => {
    const url = `/rooms/${id}`;
    return axiosClient.get(url);
  };
  postroom = (params) => {
    const url = "/rooms";
    return axiosClient
      .post(url, params)
      .then((data) => {
        message.success("Thêm thành công!");
      })
      .catch((err) => {
        console.log(err, err.message);
        message.error("Có lỗi xảy ra!");
      });
  };
  deleteroom = (id) => {
    const url = `/rooms/${id}`;
    return axiosClient
      .delete(url)
      .then((data) => {
        message.success("Xoá thành công!");
      })
      .catch((err) => {
        message.error("Có lỗi xảy ra!");
      });
  };
  editroom = (params) => {
    const url = `/rooms/${params.idsua}`;
    return axiosClient
      .patch(url, params)
      .then((data) => {
        message.success("Sửa thành công!");
      })
      .catch((err) => {
        message.error("Có lỗi xảy ra!");
      });
  };
}
const roomApi = new RoomApi();
export default roomApi;
