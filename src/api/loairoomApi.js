import { message } from "antd";
import axiosClient from "./axiosClient";

class LoairoomApi {
  getAll = (params) => {
    const url = "/loairooms";
    return axiosClient.get(url, { params });
  };
  postloairoom = (params) => {
    const url = "/loairooms";
    return axiosClient
      .post(url, params)
      .then((data) => {
        message.success("Thêm thành công!");
      })
      .catch((err) => {
        message.error("Có lỗi xảy ra!");
      });
  };
  deleteLoairoom = (id) => {
    const url = `/loairooms/${id}`;
    return axiosClient
      .delete(url)
      .then((data) => {
        message.success("Xoá thành công!");
      })
      .catch((err) => {
        message.error("Có lỗi xảy ra!");
      });
  };
  editLoairoom = (params) => {
    const url = `/loairooms/${params.idsua}`;
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
const loairoomApi = new LoairoomApi();
export default loairoomApi;
