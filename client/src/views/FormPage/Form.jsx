import React from 'react'
import { useState , useEffect } from 'react'
import {Link,useNavigate} from "react-router-dom"
import {createActivity,getCountries} from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'

function Form() {
  const dispatch = useDispatch()
  const countries = useSelector((state)=> state.allCountries)
  const navigate = useNavigate()

  const [input, setInput] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
  })

  const [errors, setErrors] = useState({
    name:"",
    difficulty:"",
    duration:"",
    season:"",
    countries:[]
  })

  useEffect(() => {
   dispatch(getCountries())
   validate(input)
  }, [dispatch,input])

  const validate = (input) =>{
   let newErrors={}

    if(!input.name) newErrors.name= "Porfavor Coloca un nombre" 

    if (!input.difficulty) newErrors.difficulty = "Se requiere un nivel de dificultad"

    if (!/^[0-9]+:[0-5][0-9]$/.test(input.duration)){
      newErrors.duration= "Por favor, ingrese una hora especifica en formato H:M, de cuanto durara el evento (ej.El evento durara 2:00, Dos horas en este caso)";
    }

    if (!input.season) newErrors.season = "Se requiere una estacion del año"

    if (!input.countries || input.countries.length === 0) {
      newErrors.countries = "Por favor, seleccionar al menos un país que tendrá dicha actividad";
    }
  
    setErrors(newErrors);

  } 

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    validate({
      ...input,
      [e.target.name] : e.target.value
    })
  }
  
  const handlerCountriesActivities = (event) => {
    const selectedCountries = Array.from(event.target.selectedOptions, (option) => option.value);
    setInput({
      ...input,
      countries: selectedCountries
    });
    validate({
      ...input,
      countries: selectedCountries
    })
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(errors.name || errors.difficulty ||errors.duration || errors.season || errors.countries) alert("Porfavor complete el formulario con sus datos correspondientes.")
    if (!errors.name & !errors.difficulty & !errors.duration & !errors.season & !errors.countries) {
      dispatch(createActivity(input));
      alert("La actividad fue creada");
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      navigate("/home");
    }
  };

  return (
    <div>
        <Link to= "/home"><button>Volver</button></Link>
        <h1>Crea tu Actividad</h1>
        <form onSubmit={handlerSubmit}>
          <dir>
            <label htmlFor="">Nombre</label>
            <input type="text" value={input.name} name="name" onChange={handleChange}/>  {errors.name && <span> {errors.name} </span>}
          </dir>
          <div>
            <p>Elige el nivel dificultad de tu actividad  </p> 
            <label htmlFor="">Nivel 1</label>
            <input type="radio" value={1} name="difficulty" onChange={handleChange} />
            <label htmlFor="">Nivel 2</label>
            <input type="radio" value={2} name="difficulty" onChange={handleChange}/>
            <label htmlFor="">Nivel 3</label>
            <input type="radio" value={3} name="difficulty" onChange={handleChange}/>
            <label htmlFor="">Nivel 4</label>
            <input type="radio" value={4} name="difficulty" onChange={handleChange}/>
            <label htmlFor="">Nivel 5</label>
            <input type="radio" value={5} name="difficulty" onChange={handleChange}/>{errors.difficulty && <span> {errors.difficulty} </span>}
          </div>
          <dir>
            <label htmlFor="">Duracion</label> 
            <input type="text" value={input.duration} name="duration" onChange={handleChange}/>{errors.duration && <span> {errors.duration} </span>}
          </dir>
          <div>
            <p>Temporada del año en el que se habilita</p> 
            <label htmlFor="">Otoño</label>
            <input type="radio" value="Otoño" name="season" onChange={handleChange} />
            <label htmlFor="">Invierno</label>
            <input type="radio" value="Invierno" name="season" onChange={handleChange}/>
            <label htmlFor="">Primavera</label>
            <input type="radio" value='Primavera' name="season" onChange={handleChange}/>
            <label htmlFor="">Verano</label>
            <input type="radio" value="Verano" name="season" onChange={handleChange}/>  {errors.season && <span> {errors.season} </span>}
          </div><br />

          <div>
            <p>Paises que tendran dicha actividad <button type="button" onClick={() => alert('Si requiere seleccionar mas de una opcion, porfavor presione ctrl + click en cada pais necesario')}>?</button>.</p>
            <select name="countries" multiple size="10" onChange={handlerCountriesActivities}>  
              {countries.sort((function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })).map((country)=>{
                return <option key={country.id} value={country.id}>{country.name}</option>
              })}
            </select> {errors.countries && <span> {errors.countries} </span>}
          </div>
          <button type='submit'>Crear Actividad</button>
  
        </form>
    </div>
  )
}

export default Form