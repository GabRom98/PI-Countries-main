import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css"

const NavBar = () => {
    return ( 
        <div className={style.box}>
        <div className={style.navbar}>
        <div className={style.logo}><NavLink to="/">Countries</NavLink></div>
        <ul className={style.links}>
            <li><NavLink to="/home" className={style.a}> HOME  </NavLink> </li>
           <li><NavLink to="/create" className={style.a}> Create new Activity </NavLink></li> 
        </ul>
        </div>
        </div>
     );
}
 
export default NavBar;