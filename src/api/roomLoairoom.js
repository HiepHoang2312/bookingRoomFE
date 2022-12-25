import { message } from "antd";
import axiosClient from "./axiosClient";

class RoomloairoomApi {
  getAll = (params) => {
    const url = "/roomloairooms";
    return axiosClient.get(url, { params });
  };
  postroomloairoom = (params) => {
    const url = "/roomloairooms";
    return axiosClient.post(url, params);
  };
  deleteroomloairoom = (id) => {
    const url = `/roomloairooms/${id}`;
    return axiosClient.delete(url);
  };
  editroomloairoom = (params) => {
    const url = `/roomloairooms/${params.idsua}`;
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
const roomloairoomApi = new RoomloairoomApi();
export default roomloairoomApi;
