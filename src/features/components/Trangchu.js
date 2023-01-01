import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "../container/trangchu/banner/Banner";
import Camnangdulich from "../container/trangchu/camnangdulich/Camnangdulich";
import Roomtrongnuoc from "../container/trangchu/roomtrongnuoc/Roomtrongnuoc";
import Roomnuocngoai from "../container/trangchu/roomnuocngoai/Roomnuocngoai";
import Tintuc from "../container/trangchu/tintuc/Tintuc";
import Ykienkhachhang from "../container/trangchu/ykienkhachhang/ykienkhachhang";
import Dichvu from "../container/trangchu/dichvu/Dichvu";
import Footer from "../container/trangchu/footer/Footer";
import CreateRoom from "../container/trangchu/createRoom/CreateRoom";
export class Trangchu extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Camnangdulich />
        <CreateRoom />
        <Roomtrongnuoc />
        <Dichvu />
        <Tintuc />
        <Ykienkhachhang />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Trangchu);
