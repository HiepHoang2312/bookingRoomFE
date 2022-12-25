import { message } from "antd";
import axiosClient from "./axiosClient";

class RoomngaydiApi {
  getAll = (params) => {
    const url = "/roomngaydis";
    return axiosClient.get(url, { params });
  };
  postroomngaydi = (params) => {
    const url = "/roomngaydis";
    return axiosClient.post(url, params);
  };
  deleteroomngaydi = (id) => {
    const url = `/roomngaydis/${id}`;
    return axiosClient.delete(url);
  };
  editroomngaydi = (params) => {
    const url = `/roomngaydis/${params.idsua}`;
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
const roomngaydiApi = new RoomngaydiApi();
export default roomngaydiApi;
