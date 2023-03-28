import React from 'react'
import styles from "./Paginado.module.css"

function Paginado({countriesPerPage , allCountries , paginado}) {
    const pageNumbers = []

    for ( let i=1; i<=Math.ceil(allCountries/countriesPerPage); i++ ){
        pageNumbers.push(i)
    }
  

  return (
    <nav>
        <div className={styles.paginado}>
            { pageNumbers && pageNumbers.map(num => {
               return <button key={num} className={styles.number} onClick={()=>paginado(num)}> {num} </button>
            }) }
        </div>
    </nav>
  )
}

export default Paginado