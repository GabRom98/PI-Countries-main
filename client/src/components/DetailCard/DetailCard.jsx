import React from 'react'
import style from "./DetailCard.module.css"

function DetailCard({name,difficulty,duration,season}) {
  return (
    <div className={style.cardActivity}>
       <h2>{name}</h2>
       <p>Difficulty: <br />{difficulty}</p>
       <p>Duration: <br /> {duration} hrs</p>
       <p>Season: <br />{season}</p>
    </div> 
  )
}

export default DetailCard