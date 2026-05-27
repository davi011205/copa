import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import PackOpening from "../components/PackOpening/PackOpening";

export default function Layout() {
  return (
    <>
      <Navbar />
      <PackOpening />
      <Outlet />
    </>
  );
}