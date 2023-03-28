import {
     GET_COUNTRIES, 
     GET_COUNTRY_BY_NAME,
     FILTER_BY_CONTINENT,
     FILTER_BY_ACTIVITY, 
     ORDER_BY_NAME , 
     ORDER_BY_POBLATION,
     CREATE_ACTIVITY, 
     GET_ACTIVITIES,
     GET_DETAIL, } from "../actions"

const initialState = {
    countries : [],
    activities : [],
    detail : [],
    allCountries : []
   
}



const rootReducer = (state = initialState, action) => {
  const allCountries = state.allCountries;

  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
        return {...state, countries : action.payload}
    
    case GET_DETAIL:
        return {...state , detail : action.payload }

    case ORDER_BY_NAME:
      let sortArr =
        action.payload === "asc"
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            });

      return { ...state, countries: sortArr };

    case ORDER_BY_POBLATION:
      let sortArrPob =
        action.payload === "asc"
          ? state.countries.sort((a, b) => a.population - b.population)
          : state.countries.sort((a, b) => b.population - a.population);

      return { ...state, countries: sortArrPob };

    case FILTER_BY_CONTINENT:
      const countriesFiltered =
        action.payload === "All"
          ? allCountries
          : allCountries.filter(
              (country) => country.continent === action.payload
            );

      return { ...state, countries: countriesFiltered };

    case FILTER_BY_ACTIVITY:
      const filteredCountries = allCountries.filter((country) =>
        country.activities.some(
          (activity) => activity.name === action.payload
        )
      );
      return { ...state, countries: filteredCountries };

    case CREATE_ACTIVITY:
       return {...state};
    
    case GET_ACTIVITIES:
        return {...state, activities: action.payload}

    default:
      return { ...state };
  }
};

export default rootReducer