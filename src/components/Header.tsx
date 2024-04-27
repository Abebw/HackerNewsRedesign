import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import YCLogo from "./YCLogo";

export default function Header() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => { return state.darkMode });

    return (<div className='header'>
        {YCLogo()}
        <span className="latestStarredHeader">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : "inactive"}>
                latest
            </NavLink> | <NavLink to="/starred" className={({ isActive }) => isActive ? "active" : "inactive"}>
                starred
            </NavLink>
        </span>
        <img className='darkModeToggle' onClick={() => dispatch({ type: "TOGGLE_DARKMODE" })} src={isDarkMode ? "Sun.svg" : 'Moon.svg'} />
    </div >)
}