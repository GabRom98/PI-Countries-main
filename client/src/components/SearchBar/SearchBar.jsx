import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountryByName } from '../../redux/actions'
import styles from "./SearchBar.module.css"

function SearchBar({currentPage}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    
const handlerInputChange = (e) => {
  setName(e.target.value)
}

const  handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(getCountryByName(name))
    currentPage(1)
    setName("")
} 

  return (
    <div className={styles.searchBar}>
        <input type="text" placeholder='Buscar Pais...' value={name} onChange={handlerInputChange} />
        <button type='submit' onClick={handlerSubmit}>Buscar Pais</button>
    </div>
  )
}

export default SearchBar