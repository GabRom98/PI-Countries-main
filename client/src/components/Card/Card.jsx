import React from "react";
import {Link} from "react-router-dom"
import style from "./Card.module.css"

function Card({name,continent,imageFlag,id}) {
  return (
    <div className={style.card}>
    <Link to={`/home/${id}`}><p>Name:{name}</p> </Link>
    <p>Continent:{continent}</p>
    <img src={imageFlag} alt="ImageFlagOfCountry" className={style.flag}/>
</div>
  );
}

export default Card;
