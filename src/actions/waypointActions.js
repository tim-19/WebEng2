export const ADD_WAYPOINT = 'ADD_WAYPOINT';
export const FETCH_NOMINATIM_PENDING = 'FETCH_NOMINATIM_PENDING';
export const FETCH_NOMINATIM_SUCCESS = 'FETCH_NOMINATIM_SUCCESS';
export const FETCH_NOMINATIM_ERROR = 'FETCH_NOMINATIM_ERROR';
export const FETCH_WIKIPEDIAINFO_PENDING = 'FETCH_WIKIPEDIAINFO_PENDING';
export const FETCH_WIKIPEDIAINFO_SUCCESS = 'FETCH_WIKIPEDIAINFO_SUCCESS';
export const FETCH_WIKIPEDIAINFO_ERROR = 'FETCH_WIKIPEDIAINFO_ERROR';

export function addWaypoint(lat, lng) {
    return {
        type: ADD_WAYPOINT,
        lat,
        lng
    };
}

export function fetchNominatimPending() {
    return {
        type: FETCH_NOMINATIM_PENDING
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

export function fetchNominatimError(error) {
    return {
        type: FETCH_NOMINATIM_ERROR,
        error: error
    }
}

export function fetchWikipediaInfoPending() {
    return {
        type: FETCH_WIKIPEDIAINFO_PENDING
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

export function fetchWikipediaInfoError(error) {
    return {
        type: FETCH_WIKIPEDIAINFO_ERROR,
        error: error
    }
}
