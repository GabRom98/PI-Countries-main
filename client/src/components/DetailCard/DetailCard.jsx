import React from 'react'
import style from "./DetailCard.module.css"

function DetailCard({name,difficulty,duration,season}) {
  return (
    <div className={style.cardActivity}>
       <p>Actividad: {name}</p>
       <p>Dificultad: {difficulty}</p>
       <p>Duracion estimada: {duration} hrs</p>
       <p>Temporada: {season}</p>
    </div>
  )
}

export default DetailCard