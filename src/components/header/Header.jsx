import { Link, Outlet } from "react-router-dom";
import './Header.scss'
export default function Header() {
    return (
        <div className="header">
            <div className="header__inner container">
                <nav className="layout ">
                    <Link to='/'>Home</Link>
                    <Link to='/avtosalons'>Avtosalons</Link>
                    <Link to='/car'>New announcement</Link>
                    <Link to='/newcarad'>New Car Add</Link>
                </nav>
            </div>
        </div>
    )
}