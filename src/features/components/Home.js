import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import Login from "../container/login/Login";
import Menu from "../container/trangchu/menu/Menu";
import Menu2 from "../container/trangchu/menu/Menu2";
import Trangchu from "./Trangchu";
import Admin from "./Admin";
import Dangky from "../container/dangky/Dangky";
import Room from "../container/detailroom/room/Room";
import Tintucdetail from "../container/tintuc/tintucdetail/Tintucdetail";
import Listroom from "../container/Listroom/Listroom";
import Datroom from "../container/detailroom/datroom/Datroom";
import Listtintuc from "../container/tintuc/listtintuc/Listtintuc";
import Stripe from "../teststripe/Stripe";
import Error from "./Error";
import { useDispatch } from "react-redux";
// import { getMe } from "../../app/userSlice";
// import { unwrapResult } from "@reduxjs/toolkit";
import { quocgiaData } from "../container/admin/Quocgia/quocgiaSlice";
import { tintucData } from "../container/admin/tintuc/tintucSlice";
import { loairoomData } from "../container/admin/Loairoom/loairoomSlice";
import { diadiemData } from "../container/admin/DiaDiem/diadiemSlice";
import { mangxahoiData } from "../container/admin/mxh/mangxahoiSlice";
import { binhluanData } from "../container/admin/Binhluan/binhluanSlice";
// import { userData } from "../container/admin/taikhoan/taikhoanSlice";
import { tagData } from "../container/admin/Tag/tagSlice";
import { anhData } from "../container/admin/Anh/anhSlice";
import { dichvuData } from "../container/admin/Dichvu/dichvuSlice";
import { hoadonData } from "../container/admin/Hoadon/hoadonSlice";
import { roleData } from "../container/admin/Role/roleSlice";
import { lienheData } from "../container/admin/Lienhe/lienheSlice";
import { ngaydiData } from "../container/admin/Ngaydi/ngaydiSlice";
import { roomData } from "../container/admin/Room/roomSlice";
import { camnangdulichData } from "../container/admin/Camnangdulich/camnangdulichSlice";
import { inforData } from "../container/login/inforSlice";
import { chiphiData } from "../container/admin/Chiphi/chiphiSlice";
import CreateRoom from "../container/createRoom/CreateRoom";
import { thongbaoData } from "../container/admin/Kiemduyet/thongbaoSlice";
import Thongtin from "../container/trangchu/thongtin/Thongtin";
import Hotel from "../container/hotels/Hotel";
import DetailHotel from "../container/hotels/DetailHotel";
import Contact from "../container/hotels/Contact";

export default function NestingExample() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchTintucList = async () => {
  //     try {
  //       const res = await tintucApi.getAll();
  //       console.log(res);
  //     } catch (error) {
  //       console.log("loix" + error);
  //     }
  //   }
  //   fetchTintucList();
  // }, []);
  const actionquocgia = async () => {
    await dispatch(quocgiaData());
  };
  const actiontintuc = async () => {
    await dispatch(tintucData());
  };
  const actionloairoom = async () => {
    await dispatch(loairoomData());
  };

  const actiondiadiem = async () => {
    await dispatch(diadiemData());
  };
  const actionmangxahoi = async () => {
    await dispatch(mangxahoiData());
  };
  const actionbinhluan = async () => {
    await dispatch(binhluanData());
  };
  const actiontag = async () => {
    await dispatch(tagData());
  };
  const actionanh = async () => {
    await dispatch(anhData());
  };
  const actiondichvu = async () => {
    await dispatch(dichvuData());
  };
  const actionhoadon = async () => {
    await dispatch(hoadonData());
  };
  const actionrole = async () => {
    await dispatch(roleData());
  };
  const actionlienhe = async () => {
    await dispatch(lienheData());
  };
  const actionngaydi = async () => {
    await dispatch(ngaydiData());
  };
  const actionroom = async () => {
    await dispatch(roomData());
  };
  const actioncamnang = async () => {
    await dispatch(camnangdulichData());
  };
  const actioninfor = async () => {
    await dispatch(inforData());
  };
  const actionchiphi = async () => {
    await dispatch(chiphiData());
  };
  const actionthongbao = async () => {
    await dispatch(thongbaoData());
  };
  useEffect(() => {
    // const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
    //   if (!user) {
    //     console.log("log out");
    //     return;
    //   }
    //   const token = await user.getIdToken();
    //   localStorage.setItem('token', token);
    //   const actionResult = await dispatch(getMe());
    //   const currentUser = unwrapResult(actionResult);

    actionquocgia();
    actiontintuc();
    actionloairoom();

    actiondiadiem();
    actionmangxahoi();
    actionbinhluan();
    actiontag();
    actionanh();
    actiondichvu();
    actionhoadon();
    actionrole();
    actionlienhe();
    actionngaydi();
    actionroom();
    actioncamnang();
    actioninfor();
    actionchiphi();
    actionthongbao();
    // }
    // );
    // return () => unregisterAuthObserver();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/dangnhap" component="" />
          <Route path="/dangky" component="" />
          <Route path="/admin" component="" />
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/">
            <Menu2 />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Trangchu />
          </Route>
          <Route path="/admin">
            <Ladmin />
          </Route>
          <Route path="/thongtin/:id">
            <Thongtin />
          </Route>
          <Route path="/dangnhap">
            <Ldangnhap />
          </Route>
          <Route path="/dangky">
            <Dangky />
          </Route>
          <Route path="/listtintuc">
            <Listtintuc />
          </Route>
          <Route path="/room/:id">
            <Room />
          </Route>
          <Route path="/detail-new/:id">
            <Tintucdetail />
          </Route>
          <Route path="/list-room/:id">
            <Listroom />
          </Route>
          <Route path="/list-room">
            <Listroom />
          </Route>
          <Route path="/dat-room">
            <Datroom />
          </Route>
          <Route path="/create-room">
            <CreateRoom />
          </Route>
          <Route path="/stripe">
            <Stripe />
          </Route>
          <Route path="/hotels">
            <Hotel />
          </Route>
          <Route path="/detailhotel/:id">
            <DetailHotel />
          </Route>
          <Route path="/lienhe_khachsan">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Ldangnhap() {
  let { url } = useRouteMatch();
  return <Login url={url} />;
}
function Ladmin() {
  let { path, url } = useRouteMatch();
  if (localStorage.getItem("token")) {
    return <Admin path={path} url={url} />;
  } else {
    return <Error />;
  }
}
