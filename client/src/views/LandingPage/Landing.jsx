import React from "react";
import {Link} from "react-router-dom"
import style from "./Landing.module.css"

function Landing() {
  return (
    <div className={style.conteinerLanding}>
      <Link to="/home" className={style.boton}>
      </Link>
    </div>
  );
}

export default Landing;
