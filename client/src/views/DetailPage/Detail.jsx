import React from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { getDetail } from '../../redux/actions';
import { useEffect } from 'react';
import DetailActivitiesContainer from "../../components/DetailCardContainer/DetailActivitiesContainer"
import style from "./Detail.module.css"

function Detail() {

  const dispatch = useDispatch()
  const params = useParams()

  useEffect(()=>{
    dispatch(getDetail(params.id))
  },[dispatch,params.id])

  const myCountry = useSelector((state)=> state.detail) || {}
  
  return (
    <div className={style.detail}>
        {myCountry
        ? 
    
        <div className={style.detailConteiner}> 
         <div className={style.titulo}> <img src={myCountry.imageFlag} alt="FlagOfTheCountry"  /><h1>{myCountry.name}</h1></div>
         <div className={style.country}>
          
          <p>Country Code: <br />{myCountry.id}</p>
          <p>Continent: <br />{myCountry.continent}</p>
          <p>Capital: <br />{myCountry.capital}</p>
          <p>Subregion: <br />{myCountry.subregion}</p>
          <p>Area: <br />{myCountry.area}</p>
          <p>Poblation: <br />{myCountry.population}</p>
          </div>
        
        <DetailActivitiesContainer myCountry={myCountry}/>

        </div>
        : <p>Loading...</p>
      }
    </div>
  )
}

export default Detail
