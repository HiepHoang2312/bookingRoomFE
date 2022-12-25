import { message } from "antd";
import axiosClient from "./axiosClient";

class RoomdiadiemApi {
  getAll = (params) => {
    const url = "roomdiadiems";
    return axiosClient.get(url, { params });
  };
  postroomdiadiem = (params) => {
    const url = "roomdiadiems";
    return axiosClient.post(url, params);
  };
  deleteroomdiadiem = (id) => {
    const url = `roomdiadiems/${id}`;
    return axiosClient.delete(url);
  };
  editroomdiadiem = (params) => {
    const url = `roomdiadiems/${params.idsua}`;
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
const roomdiadiemApi = new RoomdiadiemApi();
export default roomdiadiemApi;
