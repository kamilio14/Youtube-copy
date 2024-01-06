import FirstNavbar from "./components/FirstNavbar";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";

export default function Layout() {
  return (
    <>
      <Header />
      <FirstNavbar />
      <LeftSideBar />
      <Outlet />
    </>
  );
}
