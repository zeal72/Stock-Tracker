import { Outlet } from "react-router-dom";
import { BaseLayoutWrap } from "./BaseLayout.Styles";
import Sidebar from "../sidebar/Sidebar";
import Appbar from "../appBar/Appbar";

const BaseLayout = () => {
  return (
    <BaseLayoutWrap>
      <Sidebar />
      <div className="main-content-wrapper">
        <Appbar />
        <Outlet />
      </div>
    </BaseLayoutWrap>
  )
}

export default BaseLayout