import { message } from "antd";
import axiosClient from "./axiosClient";

class DichvuroomApi {
  getAll = (params) => {
    const url = "/dichvurooms";
    return axiosClient.get(url, { params });
  };
  postdichvuroom = (params) => {
    const url = "/dichvurooms";
    return axiosClient.post(url, params);
  };
  deletedichvuroom = (id) => {
    const url = `/dichvurooms/${id}`;
    return axiosClient.delete(url);
  };
  editdichvuroom = (params) => {
    const url = `/dichvurooms/${params.idsua}`;
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
const dichvuroomApi = new DichvuroomApi();
export default dichvuroomApi;
