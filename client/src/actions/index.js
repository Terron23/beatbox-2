import axios from 'axios'
import {FETCH_USER, FETCH_STUDIO, FETCH_AVAILIBILITY, FETCH_BOOKING, FETCH_LOCATION, FETCH_STUDIOTYPES} from './types'

export const fetchUser = () => async dispatch => {
const res = await axios.get('/api/current_user');
dispatch({type: FETCH_USER, payload: res.data})
    }

export const fetchStudio = () => async dispatch => {
const res = await axios.get('/api/studio-listing');
dispatch({type: FETCH_STUDIO, payload: res.data})
}


export const fetchAvailibility= () => async dispatch => {
    const res = await axios.get('/api/availibility');
    dispatch({type: FETCH_AVAILIBILITY, payload: res.data})
    }

export const fetchBookings= () => async dispatch => {
const res = await axios.get('/api/studioBooked');
dispatch({type: FETCH_BOOKING, payload: res.data})
}

export const fetchLocation= () => async dispatch => {
const res = await axios.get('https://json.geoiplookup.io');
dispatch({type: FETCH_LOCATION, payload: res.data.city})
console.log("Redux", res.data.city)
}

export const fetchStudioType= () => async dispatch => {
    const res = await axios.get('/api/studiotypes');
    dispatch({type: FETCH_STUDIOTYPES, payload: res.data})
    }



