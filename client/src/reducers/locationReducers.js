import { FETCH_LOCATION } from '../actions/types'

export default function(state = null, action){
    switch(action.type){
        case FETCH_LOCATION:
        return action.payload || false

        default:
        return state;
    }

}