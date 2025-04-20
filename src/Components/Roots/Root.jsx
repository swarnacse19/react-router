import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import SideBar from '../Sidebar/Sidebar';
import './Root.css';

function Root() {

  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="root-main">
        <SideBar></SideBar>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Root;
