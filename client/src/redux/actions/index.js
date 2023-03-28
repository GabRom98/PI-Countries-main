import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_DETAIL = "GET_DETAIL"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT"
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_POBLATION = "ORDER_BY_POBLATION"
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME"
export const GET_ACTIVITIES = "GET_ACTIVITIES"
export const CREATE_ACTIVITY = "CREATE_ACTIVITY"

export const getCountries = () => {

  return async function(dispatch){

    const dbCountries = await axios.get("http://localhost:3001/countries");
    const countries = dbCountries.data

    dispatch( { type : GET_COUNTRIES , payload : countries } )

  }
}

export const getCountryByName = (name) => {
 return async function (dispatch) {
  const dbCountry = await axios.get(`http://localhost:3001/countries?name=${name}`)
  const country = dbCountry.data

  dispatch ( { type : GET_COUNTRY_BY_NAME , payload : country } )
 }
}

export const getDetail = (id) =>{
  return async function(dispatch){
    try{
      let dbCountry = await axios.get(`http://localhost:3001/countries/${id}`);
      let country = dbCountry.data
      return dispatch ( { type: GET_DETAIL , payload : country } )
    } catch (error){
      return {error: error.message}
    }
  }
  }

export const filterCountryByContinent= (payload) => {
         return { type: FILTER_BY_CONTINENT, payload}
   }



export function orderByName(payload) {
  return { type : ORDER_BY_NAME , payload }
}

export function orderByPoblation(payload) {
  return {type : ORDER_BY_POBLATION , payload}
}

export function getActivities() {
  return async function(dispatch){
    let dbActivities = await axios.get(`http://localhost:3001/activities`)
    let activities = dbActivities.data
    
    dispatch( { type: GET_ACTIVITIES , payload : activities } )
  } 
}

export function filterByActivity(payload) {
   return ( { type: FILTER_BY_ACTIVITY,payload } )
}

export function createActivity(payload) {
  return async function (dispatch){
    const newActivity = await axios.post("http://localhost:3001/activities",payload)
    dispatch({type: CREATE_ACTIVITY})
    return newActivity
  }
}