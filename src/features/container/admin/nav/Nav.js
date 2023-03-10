import React, { useEffect, useState } from "react";
import { Badge, Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./nav.css";
import Headers from "./../header/Header";
import Doanhthu from "./../Doanhthu/Doanhthu";
import Themtintuc from "./../tintuc/Themtintuc";
import Tintuc from "./../tintuc/Tintuc";
import Chitiettintuc from "./../tintuc/Chitiettintuc";
import Themloairoom from "../Loairoom/Themloairoom";
import Loairoom from "../Loairoom/Loairoom";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Taikhoan from "../taikhoan/Taikhoan";
import Chitiettaikhoan from "../taikhoan/Chitiettaikhoan";
import Chitietquocgia from "../Quocgia/Chitietquocgia";
import Themquocgia from "../Quocgia/Themquocgia";
import Quocgia from "../Quocgia/Quocgia";
import Themdiadiem from "../DiaDiem/Themdiadiem";
import Mangxahoi from "../mxh/Mangxahoi";
import Themmangxahoi from "../mxh/Themmangxahoi";
import Diadiem from "../DiaDiem/Diadiem";
import Room from "../Room/Room";
import Themroom from "../Room/Themroom";
import Chitietroom from "../Room/Chitietroom";
import Binhluan from "../Binhluan/Binhluan";
import Chitietbinhluan from "../Binhluan/Chitietbinhluan";
import Tag from "../Tag/Tag";
import Themtag from "../Tag/Themtag";
import Anh from "../Anh/Anh";
import Dichvu from "../Dichvu/Dichvu";
import Themdichvu from "../Dichvu/Themdichvu";
import Hoadon from "../Hoadon/Hoadon";
import Role from "../Role/Role";
import Themrole from "../Role/Themrole";
import Lienhe from "../Lienhe/Lienhe";
import Themlienhe from "../Lienhe/Themlienhe";
import Ngaydi from "..//Ngaydi/Ngaydi";
import Camnangdulich from "../Camnangdulich/Camnangdulich";
import Themcamnang from "../Camnangdulich/Themcamnang";
import Khuyenmai from "../Khuyenmai/Khuyenmai";
import Themkhuyenmai from "../Khuyenmai/Themkhuyenmai";
import { useDispatch, useSelector } from "react-redux";
import Chiphi from "../Chiphi/Chiphi";
import Themchiphi from "../Chiphi/Themchiphi";
import Hoadoncanhan from "../Hoadoncanhan/Hoadoncanhan";
import Kiemduyet from "../Kiemduyet/Kiemduyet";
import { hoadoncanhanData } from "../Hoadoncanhan/hoadoncanhanSlice";

export default function Nav() {
  const match = useRouteMatch();
  const { Header, Sider, Content } = Layout;
  const [state, setState] = useState({
    collapsed: true,
    visible: true,
  });
  const dispatch = useDispatch();
  const actionResult = async () => {
    await dispatch(hoadoncanhanData());
  };
  useEffect(() => {
    actionResult();
    window.scrollTo(0, 0);
  }, []);
  const hoadoncanhan = useSelector(
    (state) => state.hoadoncanhans.hoadoncanhan.data,
  );
  let counthoadon = 0;
  if (hoadoncanhan) {
    for (let i = 0; i < hoadoncanhan.length; i++) {
      if (hoadoncanhan[i].kiemduyet === 0) {
        counthoadon++;
      }
    }
  }
  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };
  const user = useSelector((state) => state.infor.infor.data);
  const quanlytintuc = (
    <div>
      <Route exact path={match.path}>
        <Doanhthu />
      </Route>
      <Route exact path={`${match.path}/tintuc`}>
        <Tintuc url={match.url} />
      </Route>
      <Route path={`${match.path}/tintuc/themtintuc`}>
        <Themtintuc />
      </Route>
      <Route path={`${match.path}/tintuc/suatintuc/:id`}>
        <Themtintuc />
      </Route>
      <Route path={`${match.path}/tintuc/chitiettintuc/:id`}>
        <Chitiettintuc />
      </Route>
    </div>
  );

  const quanlybinhluan = (
    <div>
      <Route exact path={match.path}>
        <Doanhthu />
      </Route>
      <Route exact path={`${match.path}/binhluan`}>
        <Binhluan url={match.url} />
      </Route>
      <Route path={`${match.path}/binhluan/chitietbinhluan/:id`}>
        <Chitietbinhluan />
      </Route>
    </div>
  );
  const quanlyroom = (
    <div>
      <Route exact path={match.path}>
        <Doanhthu />
      </Route>
      <Route exact path={`${match.path}/room`}>
        <Room url={match.url} />
      </Route>
      <Route path={`${match.path}/room/chitietroom/:id`}>
        <Chitietroom />
      </Route>
      <Route path={`${match.path}/room/themroom`}>
        <Themroom />
      </Route>
      <Route path={`${match.path}/room/suaroom/:id`}>
        <Themroom />
      </Route>
      <Route path={`${match.path}/loairoom/sualoairoom/:id`}>
        <Themloairoom />
      </Route>
      <Route exact path={`${match.path}/loairoom`}>
        <Loairoom url={match.url} />
      </Route>
      <Route path={`${match.path}/loairoom/themloairoom`}>
        <Themloairoom />
      </Route>
      <Route path={`${match.path}/quocgia/suaquocgia/:id`}>
        <Themquocgia />
      </Route>
      <Route exact path={`${match.path}/quocgia`}>
        <Quocgia url={match.url} />
      </Route>
      <Route path={`${match.path}/quocgia/themquocgia`}>
        <Themquocgia />
      </Route>
      <Route exact path={`${match.path}/diadiem`}>
        <Diadiem url={match.url} />
      </Route>
      <Route path={`${match.path}/diadiem/themdiadiem`}>
        <Themdiadiem />
      </Route>
      <Route path={`${match.path}/diadiem/suadiadiem/:id`}>
        <Themdiadiem />
      </Route>
    </div>
  );
  const admin = (
    <div>
      <Route exact path={match.path}>
        <Doanhthu />
      </Route>
      <Route exact path={`${match.path}/chiphi`}>
        <Chiphi url={match.url} />
      </Route>
      <Route path={`${match.path}/chiphi/suachiphi/:id`}>
        <Themchiphi url={match.url} />
      </Route>
      <Route exact path={`${match.path}/chiphi/themchiphi`}>
        <Themchiphi url={match.url} />
      </Route>
      <Route exact path={`${match.path}/kiemduyet`}>
        <Kiemduyet url={match.url} />
      </Route>
      <Route exact path={`${match.path}/khuyenmai`}>
        <Khuyenmai url={match.url} />
      </Route>
      <Route path={`${match.path}/khuyenmai/themkhuyenmai`}>
        <Themkhuyenmai url={match.url} />
      </Route>
      <Route path={`${match.path}/khuyenmai/suakhuyenmai/:id`}>
        <Themkhuyenmai url={match.url} />
      </Route>
      <Route path={`${match.path}/tintuc/chitiettintuc/:id`}>
        <Chitiettintuc />
      </Route>
      <Route exact path={`${match.path}/tintuc`}>
        <Tintuc url={match.url} />
      </Route>
      <Route path={`${match.path}/tintuc/themtintuc`}>
        <Themtintuc />
      </Route>
      <Route path={`${match.path}/tintuc/suatintuc/:id`}>
        <Themtintuc />
      </Route>
      <Route exact path={`${match.path}/diadiem`}>
        <Diadiem url={match.url} />
      </Route>
      <Route path={`${match.url}/diadiem/themdiadiem`}>
        <Themdiadiem />
      </Route>
      <Route path={`${match.path}/diadiem/suadiadiem/:id`}>
        <Themdiadiem />
      </Route>
      <Route exact path={`${match.path}/tag`}>
        <Tag url={match.url} />
      </Route>
      <Route exact path={`${match.path}/camnangdulich`}>
        <Camnangdulich url={match.url} />
      </Route>
      <Route exact path={`${match.path}/lienhe`}>
        <Lienhe url={match.url} />
      </Route>
      <Route exact path={`${match.path}/ngaydi`}>
        <Ngaydi />
      </Route>
      <Route exact path={`${match.path}/hoadon`}>
        <Hoadon url={match.url} />
      </Route>
      <Route exact path={`${match.path}/hoadoncanhan`}>
        <Hoadoncanhan url={match.url} />
      </Route>
      <Route exact path={`${match.path}/anh`}>
        <Anh url={match.url} />
      </Route>
      <Route exact path={`${match.path}/dichvu`}>
        <Dichvu url={match.url} />
      </Route>
      <Route exact path={`${match.path}/binhluan`}>
        <Binhluan url={match.url} />
      </Route>
      <Route exact path={`${match.path}/room`}>
        <Room url={match.url} />
      </Route>
      <Route exact path={`${match.path}/role`}>
        <Role url={match.url} />
      </Route>
      <Route exact path={`${match.path}/themcamnangdulich`}>
        <Themcamnang />
      </Route>
      <Route path={`${match.path}/tag/themtag`}>
        <Themtag />
      </Route>
      <Route path={`${match.path}/lienhe/themlienhe`}>
        <Themlienhe />
      </Route>
      <Route path={`${match.path}/role/themrole`}>
        <Themrole />
      </Route>
      <Route path={`${match.path}/dichvu/themdichvu`}>
        <Themdichvu />
      </Route>
      <Route path={`${match.path}/binhluan/chitietbinhluan/:id`}>
        <Chitietbinhluan />
      </Route>
      <Route path={`${match.path}/room/chitietroom/:id`}>
        <Chitietroom />
      </Route>
      <Route path={`${match.path}/quocgia/chitietquocgia/:id`}>
        <Chitietquocgia />
      </Route>
      <Route path={`${match.path}/camnangdulich/suacamnangdulich/:id`}>
        <Themcamnang />
      </Route>
      <Route path={`${match.path}/role/suarole/:id`}>
        <Themrole />
      </Route>
      <Route path={`${match.path}/lienhe/sualienhe/:id`}>
        <Themlienhe />
      </Route>
      <Route path={`${match.path}/mangxahoi/suamangxahoi/:id`}>
        <Themmangxahoi />
      </Route>
      <Route path={`${match.path}/tag/suatag/:id`}>
        <Themtag />
      </Route>
      <Route path={`${match.path}/dichvu/suadichvu/:id`}>
        <Themdichvu />
      </Route>
      <Route path={`${match.path}/loairoom/sualoairoom/:id`}>
        <Themloairoom />
      </Route>
      <Route path={`${match.path}/quocgia/suaquocgia/:id`}>
        <Themquocgia />
      </Route>
      <Route exact path={`${match.path}/quocgia`}>
        <Quocgia url={match.url} />
      </Route>
      <Route exact path={`${match.path}/loairoom`}>
        <Loairoom url={match.url} />
      </Route>
      <Route exact path={`${match.path}/taikhoan`}>
        <Taikhoan url={match.url} />
      </Route>
      <Route exact path={`${match.path}/mangxahoi`}>
        <Mangxahoi url={match.url} />
      </Route>
      <Route path={`${match.path}/loairoom/themloairoom`}>
        <Themloairoom />
      </Route>
      <Route path={`${match.path}/taikhoan/chitiettaikhoan/:id`}>
        <Chitiettaikhoan />
      </Route>
      <Route path={`${match.path}/quocgia/themquocgia`}>
        <Themquocgia />
      </Route>
      <Route path={`${match.path}/room/themroom`}>
        <Themroom />
      </Route>
      <Route path={`${match.path}/room/suaroom/:id`}>
        <Themroom />
      </Route>
      <Route path={`${match.path}/mangxahoi/themmangxahoi`}>
        <Themmangxahoi />
      </Route>
    </div>
  );
  const menu_quanlytintuc = (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item
        key="1"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-tachometer-alt"></span>
          ) : (
            <span className="fas fa-tachometer-alt mr-2"></span>
          )
        }
      >
        <Link to="/admin">Doanh thu</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        icon={
          state.collapsed === true ? (
            <span className="far fa-newspaper"></span>
          ) : (
            <span className="far fa-newspaper mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/tintuc`}>Qu???n l?? tin t???c</Link>
      </Menu.Item>
    </Menu>
  );
  const menu_quanlybinhluan = (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item
        key="1"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-tachometer-alt"></span>
          ) : (
            <span className="fas fa-tachometer-alt mr-2"></span>
          )
        }
      >
        <Link to="/admin">Doanh thu</Link>
      </Menu.Item>
      <Menu.Item
        key="9"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-comments"></span>
          ) : (
            <span className="fas fa-comments mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/binhluan`}>Qu???n l?? b??nh lu???n</Link>
      </Menu.Item>
    </Menu>
  );
  const menu_quanlyroom = (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item
        key="1"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-tachometer-alt"></span>
          ) : (
            <span className="fas fa-tachometer-alt mr-2"></span>
          )
        }
      >
        <Link to="/admin">Doanh thu</Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-luggage-cart"></span>
          ) : (
            <span className="fas fa-luggage-cart mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/room`}>Qu???n l?? ph??ng</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-flag-usa"></span>
          ) : (
            <span className="fas fa-flag-usa mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/quocgia`}>Qu???n l?? qu???c gia</Link>
      </Menu.Item>
      <Menu.Item
        key="6"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-atlas"></span>
          ) : (
            <span className="fas fa-atlas mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/loairoom`}>Qu???n l?? lo???i ph??ng</Link>
      </Menu.Item>
      <Menu.Item
        key="8"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-place-of-worship"></span>
          ) : (
            <span className="fas fa-place-of-worship mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/diadiem`}>Qu???n l?? ?????a ??i???m</Link>
      </Menu.Item>
    </Menu>
  );
  const menu_quanlyadmin = (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item
        key="1"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-tachometer-alt"></span>
          ) : (
            <span className="fas fa-tachometer-alt mr-2"></span>
          )
        }
      >
        <Link to="/admin">Doanh thu</Link>
      </Menu.Item>
      <Menu.Item
        key="19"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-money-check-alt"></span>
          ) : (
            <span className="fas fa-money-check-alt mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/chiphi`}>Chi ph??</Link>
      </Menu.Item>
      <Menu.Item
        key="21"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-check-double"></span>
          ) : (
            <span className="fas fa-check-double"></span>
          )
        }
      >
        <Link to={`${match.url}/kiemduyet`}>
          Ki???m duy???t ph??ng {counthoadon === 0 ? "" : <Badge status="error" />}
        </Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-luggage-cart"></span>
          ) : (
            <span className="fas fa-luggage-cart mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/room`}>Qu???n l?? ph??ng</Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-users"></span>
          ) : (
            <span className="fas fa-users mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/taikhoan`}>Qu???n l?? t??i kho???n</Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        icon={
          state.collapsed === true ? (
            <span className="far fa-newspaper"></span>
          ) : (
            <span className="far fa-newspaper mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/tintuc`}>Qu???n l?? tin t???c</Link>
      </Menu.Item>
      <Menu.Item
        key="5"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-flag-usa"></span>
          ) : (
            <span className="fas fa-flag-usa mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/quocgia`}>Qu???n l?? qu???c gia</Link>
      </Menu.Item>
      <Menu.Item
        key="6"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-atlas"></span>
          ) : (
            <span className="fas fa-atlas mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/loairoom`}>Qu???n l?? lo???i ph??ng</Link>
      </Menu.Item>
      <Menu.Item
        key="7"
        icon={
          state.collapsed === true ? (
            <span className="fas  fa-share-alt"></span>
          ) : (
            <span className="fas  fa-share-alt mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/mangxahoi`}>Qu???n l?? m???ng x?? h???i</Link>
      </Menu.Item>
      <Menu.Item
        key="8"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-place-of-worship"></span>
          ) : (
            <span className="fas fa-place-of-worship mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/diadiem`}>Qu???n l?? ?????a ??i???m</Link>
      </Menu.Item>
      <Menu.Item
        key="9"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-comments"></span>
          ) : (
            <span className="fas fa-comments mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/binhluan`}>Qu???n l?? b??nh lu???n</Link>
      </Menu.Item>
      <Menu.Item
        key="10"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-tags"></span>
          ) : (
            <span className="fas fa-tags mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/tag`}>Qu???n l?? tag</Link>
      </Menu.Item>
      <Menu.Item
        key="11"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-images"></span>
          ) : (
            <span className="fas fa-images mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/anh`}>Qu???n l?? ???nh</Link>
      </Menu.Item>
      <Menu.Item
        key="12"
        icon={
          state.collapsed === true ? (
            <span className="fab fa-phoenix-framework"></span>
          ) : (
            <span className="fab fa-phoenix-framework mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/dichvu`}>Qu???n l?? d???ch v???</Link>
      </Menu.Item>
      <Menu.Item
        key="13"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-file-alt"></span>
          ) : (
            <span className="fas fa-file-alt mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/hoadon`}>Qu???n l?? ho?? ????n</Link>
      </Menu.Item>
      <Menu.Item
        key="20"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-file-invoice-dollar"></span>
          ) : (
            <span className="fas fa-file-invoice-dollar"></span>
          )
        }
      >
        <Link to={`${match.url}/hoadoncanhan`}>Ho?? ????n t???o ph??ng</Link>
      </Menu.Item>
      <Menu.Item
        key="14"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-user-tag"></span>
          ) : (
            <span className="fas fa-user-tag mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/role`}>Qu???n l?? ph??n quy???n</Link>
      </Menu.Item>
      <Menu.Item
        key="15"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-id-card"></span>
          ) : (
            <span className="fas fa-id-card mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/lienhe`}>Qu???n l?? li??n h???</Link>
      </Menu.Item>
      <Menu.Item
        key="16"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-clock"></span>
          ) : (
            <span className="fas fa-clock mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/ngaydi`}>Qu???n l?? Ng??y ??i</Link>
      </Menu.Item>
      <Menu.Item
        key="17"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-book"></span>
          ) : (
            <span className="fas fa-book mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/camnangdulich`}>C???m nang du l???ch</Link>
      </Menu.Item>

      <Menu.Item
        key="18"
        icon={
          state.collapsed === true ? (
            <span className="fas fa-percent"></span>
          ) : (
            <span className="fas fa-percent mr-2"></span>
          )
        }
      >
        <Link to={`${match.url}/khuyenmai`}>Khuy???n m??i</Link>
      </Menu.Item>
    </Menu>
  );
  const Menu_Authentication = (role) => {
    switch (role) {
      case "admin":
        return menu_quanlyadmin;
        break;
      case "qu???n l?? tin t???c":
        return menu_quanlytintuc;
        break;
      case "bi??n t???p vi??n":
        return menu_quanlytintuc;
        break;
      case "qu???n l?? b??nh lu???n":
        return menu_quanlybinhluan;
        break;
      case "hotelier":
        return menu_quanlyroom;
        break;
      default:
        break;
    }
  };
  const Authentication = (role) => {
    switch (role) {
      case "admin":
        return admin;
        break;

      case "qu???n l?? tin t???c":
        return quanlytintuc;
        break;
      case "bi??n t???p vi??n":
        return quanlytintuc;
        break;
      case "qu???n l?? b??nh lu???n":
        return quanlybinhluan;
        break;
      case "hotelier":
        return quanlyroom;
        break;
      default:
        break;
    }
  };
  return (
    <div id="nav">
      <Layout>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo">
            <Link to="/">
              <p className="text-center w-100">
                {state.collapsed === true ? (
                  <i className="fas fa-user-shield"></i>
                ) : (
                  <strong>Administration</strong>
                )}
              </p>
            </Link>
          </div>
          {user ? Menu_Authentication(user.role) : ""}
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Headers />
            {React.createElement(
              state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              },
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>{user ? Authentication(user.role) : ""}</Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
