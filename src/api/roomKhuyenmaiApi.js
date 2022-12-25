import { message } from "antd";
import axiosClient from "./axiosClient";

class RoomkhuyenmaiApi {
  getAll = (params) => {
    const url = "/roomkhuyenmais";
    return axiosClient.get(url, { params });
  };
  postroomkhuyenmai = (params) => {
    const url = "/roomkhuyenmais";
    return axiosClient.post(url, params).then((ok) => {
      message.success("Cập nhật thành công!");
    });
  };
  deleteroomkhuyenmai = (id) => {
    const url = `/roomkhuyenmais/${id}`;
    return axiosClient.delete(url);
  };
  editroomkhuyenmai = (params) => {
    const url = `/roomkhuyenmais/${params.idsua}`;
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
const roomkhuyenmaiApi = new RoomkhuyenmaiApi();
export default roomkhuyenmaiApi;
