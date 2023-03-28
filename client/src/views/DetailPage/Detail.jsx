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
    <div>
        {myCountry
        ? <div className={style.detailConteiner}> 
          <h1>{myCountry.name}</h1>
          <p>Codigo del pais: {myCountry.id}</p>
          <img src={myCountry.imageFlag} alt="FlagOfTheCountry"  width="200px"/>
          <p>{myCountry.continent}</p>
          <p>{myCountry.capital}</p>
          <p>{myCountry.subregion}</p>
          <p>{myCountry.area}</p>
          <p>{myCountry.population}</p>
        <DetailActivitiesContainer myCountry={myCountry}/>
        </div>
        : <p>Loading...</p>
      }
    </div>
  )
}

export default Detail
