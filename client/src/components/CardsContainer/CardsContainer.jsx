import Card from '../Card/Card'
import style from "./CardsContainer.module.css"

function CardsContainer({currentCountry}) {

  return (
    <div className={style.container}>
        {currentCountry && currentCountry.map(countries=>{
            return <Card
            key={countries.id}
            id={countries.id}
            name={countries.name}
            imageFlag={countries.imageFlag}
            continent={countries.continent}
            />
        })}
    </div>
  )
}

export default CardsContainer

//Cards container debe tomar un array de usuario, y por cada pais renderizar un componente card.