export const ADD_WAYPOINT = 'ADD_WAYPOINT';
export const FETCH_NOMINATIM_SUCCESS = 'FETCH_NOMINATIM_SUCCESS';
export const FETCH_WIKIPEDIAINFO_SUCCESS = 'FETCH_WIKIPEDIAINFO_SUCCESS';
export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_ERROR = 'FETCH_ERROR';

export function addWaypoint(lat, lng) {
    return {
        type: ADD_WAYPOINT,
        lat,
        lng
    };
}

export function fetchPending() {
    return {
        type: FETCH_PENDING
    }
}

export function fetchNominatimSuccess(response, lat, lng) {
    return {
        type: FETCH_NOMINATIM_SUCCESS,
        response,
        lat, 
        lng
    }
}

export function fetchWikipediaInfoSuccess(response, lat, lng) {
    return {
        type: FETCH_WIKIPEDIAINFO_SUCCESS,
        response,
        lat,
        lng
    }
}

export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        error: error
    }
}
