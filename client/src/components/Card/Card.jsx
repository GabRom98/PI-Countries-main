import React from "react";
import {Link} from "react-router-dom"
import style from "./Card.module.css"

function Card({name,continent,imageFlag,id}) {
  return (
    <div className={style.card}>
    <img src={imageFlag} alt="ImageFlagOfCountry"/>
    <div>
    <Link to={`/home/${id}`} ><h2>{name}</h2></Link>
    <h3>Continent :<p>{continent}</p></h3>
    <Link to={`/home/${id}`}><button>More Information</button></Link>
    </div>
    </div>
  );
}

export default Card;
