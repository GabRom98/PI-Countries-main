import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import CardsContainer from '../../components/CardsContainer/CardsContainer'
import SearchBar from '../../components/SearchBar/SearchBar'
import { 
    getCountries,
    filterCountryByContinent,
    orderByName,
    orderByPoblation,
    getActivities,
    filterByActivity} from '../../redux/actions'
import Paginado from '../../components/Paginado.jsx/Paginado'
import style from "./Home.module.css"

function Home() {
  const dispatch = useDispatch()
  const allCountries= useSelector(state=>state.countries)
  const activities = useSelector(state=>state.activities)


  useEffect(()=>{
    dispatch(getCountries())
    dispatch(getActivities())
  },[dispatch])


  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage,] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountry = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
  

  const [,setOrder] = useState("")

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const clickHandler = (e) => {
    dispatch(getCountries())
  }

  const handlerFilterContinent = (e) => {
     dispatch(filterCountryByContinent(e.target.value))
     setCurrentPage(1)
  }

  const handlerFilterByActivities = (e) => {
    dispatch(filterByActivity(e.target.value))
    setCurrentPage(1)
  }
  
  const handlerOrderByName = (e) => {
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`)
  }

  const handlerOrderByPopulation = (e) => {
    dispatch(orderByPoblation(e.target.value))
    setCurrentPage(1)
    setOrder(`Ordenado ${e.target.value}`)
  }

  return (
    <div className={style.allContainer}>
      <div>
        <h1>Countries</h1>
        <button onClick={clickHandler}>Volver a Cargar : PAISES</button>
        <SearchBar currentPage={setCurrentPage}/>
        
        <select onChange={handlerOrderByName}>
          <option value=""  className={style.orden}>Orden</option>
          <option value="asc">Ascendente</option>
          <option value="des">Descendente</option>
        </select>

        <select onChange={handlerOrderByPopulation}>
          <option value="">Poblation</option>
          <option value="asc">Ascendente</option>
          <option value="des">Descendente</option>
        </select>

        <select onChange={handlerFilterContinent}>
          <option value="">Continents</option>
          <option value="All">All Contitentes</option>
          <option value="Africa">Africa</option>
          <option value="South America">South America</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
        </select>   
        
        <select onChange={handlerFilterByActivities}>
          <option value="">Activities</option>
          {activities && activities.map((act,index)=>{
            return <option key={index} value={act.name}>{act.name}</option>
          })}
        </select>
        
        <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado}/>
        </div>
        <CardsContainer countries={allCountries} currentCountry={currentCountry}/>

    </div>
  )
}

export default Home