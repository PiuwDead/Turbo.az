import { Link, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import './Layout.scss' 

export default function Layout() {
    return (
        <div className="">
            <Header/>
            <Outlet/>
        </div>
    )
}