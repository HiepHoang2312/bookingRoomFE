import { configureStore } from "@reduxjs/toolkit";
import tintucReducer from "../features/container/admin/tintuc/tintucSlice";
import userReducer from "./userSlice";
import taikhoanReducer from "../features/container/admin/taikhoan/taikhoanSlice";
import quocgiaReducer from "../features/container/admin/Quocgia/quocgiaSlice";
import loairoomReducer from "../features/container/admin/Loairoom/loairoomSlice";
import mangxahoiReducer from "../features/container/admin/mxh/mangxahoiSlice";
import diadiemReducer from "../features/container/admin/DiaDiem/diadiemSlice";
import roomReducer from "../features/container/admin/Room/roomSlice";
import binhluanReducer from "../features/container/admin/Binhluan/binhluanSlice";
import tagReducer from "../features/container/admin/Tag/tagSlice";
import anhReducer from "../features/container/admin/Anh/anhSlice";
import dichvuReducer from "../features/container/admin/Dichvu/dichvuSlice";
import hoadonReducer from "../features/container/admin/Hoadon/hoadonSlice";
import tintuctagReducer from "../features/container/admin/tintuc/tintuctagSlice";
import roleReducer from "../features/container/admin/Role/roleSlice";
import lienheReducer from "../features/container/admin/Lienhe/lienheSlice";
import khuyenmaiReducer from "../features/container/admin/Khuyenmai/khuyenmaiSlice";
import ngaydiReducer from "../features/container/admin/Ngaydi/ngaydiSlice";
import camnangReducer from "../features/container/admin/Camnangdulich/camnangdulichSlice";
import userroleReducer from "../features/container/admin/header/userroleSlice";
import inforReducer from "../features/container/login/inforSlice";
import chitieuReducer from "../features/container/admin/Doanhthu/chitieuSlice";
import thanhtoanReducer from "../features/container/detailroom/room/thanhtoanSlice";
import chiphiReducer from "../features/container/admin/Chiphi/chiphiSlice";
import hoadoncanhanReducer from "../features/container/admin/Hoadoncanhan/hoadoncanhanSlice";
import thongbaoReducer from "../features/container/admin/Kiemduyet/thongbaoSlice";
const rootReducer = {
  tintucs: tintucReducer,
  user: userReducer,
  taikhoan: taikhoanReducer,
  quocgias: quocgiaReducer,
  loairooms: loairoomReducer,
  mangxahois: mangxahoiReducer,
  diadiems: diadiemReducer,
  rooms: roomReducer,
  binhluans: binhluanReducer,
  tags: tagReducer,
  anhs: anhReducer,
  dichvus: dichvuReducer,
  hoadons: hoadonReducer,
  tintuctags: tintuctagReducer,
  roles: roleReducer,
  lienhes: lienheReducer,
  ngaydis: ngaydiReducer,
  camnangdulichs: camnangReducer,
  userroles: userroleReducer,
  infor: inforReducer,
  chitieu: chitieuReducer,
  khuyenmais: khuyenmaiReducer,
  thanhtoans: thanhtoanReducer,
  chiphis: chiphiReducer,
  hoadoncanhans: hoadoncanhanReducer,
  thongbao: thongbaoReducer,
};

export default configureStore({
  reducer: rootReducer,
});
