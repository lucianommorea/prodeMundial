import axios from 'axios'


export function getCountries(){
    return async function (dispatch) {
        let allCountries = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: allCountries.data
        })
        
    }
}

export function getCountryById(id) {
    return async function(dispatch){
        let countryDetail = await axios.get(`http://localhost:3001/country/${id}`)
        return dispatch({
            type: 'GET_COUNTRY_DETAIL',
            payload: countryDetail.data
        })
    }
}