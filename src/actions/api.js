import {
    addWaypoint,
    fetchPending,
    fetchNominatimSuccess,
    fetchWikipediaInfoSuccess,
    fetchError
} from './waypointActions';

export function addWaypointAction(lat, lng) {
    return dispatch => {
        dispatch(addWaypoint(lat, lng));
        dispatch(reverseGeocodingAction(lat, lng));
    }
}

/**
 * Calls the nominatim api with the coordinates, receives the corresponding address and then updates the state
 */
export function reverseGeocodingAction(lat, lng) {
    
    return dispatch => {
        dispatch(fetchPending());
        const endpoint = `https://nominatim.openstreetmap.org/reverse?format=json&zoom=10&lon=${lng}&lat=${lat}`;
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(fetchNominatimSuccess(response, lat, lng));
                dispatch(getWikipediaInfoAction(response.address, lat, lng));
                return response;
            })
            .catch(error => {
                dispatch(fetchError(error));
            })

    }
}

/**
 * Calls the wikipedia api with the city name of the waypoint and then updates the state with the new information
 */
export function getWikipediaInfoAction(address, lat, lng) {
    return dispatch => {
        dispatch(fetchPending());

        const cityName = address[Object.keys(address)[0]];
        const endpoint = `https://de.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro=&explaintext=&titles=${cityName}`
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(fetchWikipediaInfoSuccess(response, lat, lng));
                return response;
            })
            .catch(error => {
                dispatch(fetchError(error));
            })
    }
}
