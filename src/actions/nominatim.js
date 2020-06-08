import {
    addWaypoint,
    fetchNominatimPending,
    fetchNominatimSuccess,
    fetchNominatimError,
    fetchWikipediaInfoPending,
    fetchWikipediaInfoSuccess,
    fetchWikipediaInfoError
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
        dispatch(fetchNominatimPending());
        const endpoint = `https://nominatim.openstreetmap.org/reverse?format=json&zoom=10&lon=${lng}&lat=${lat}`;
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(fetchNominatimSuccess(response, lat, lng));
                return response;
                //Folgenden code in reducer auslagern
                // let waypoints = [...this.state.waypointList]
                // waypoints.forEach(wp => {
                //     if (wp.id === waypoint.id) {
                //         wp.address = data.address;
                //         waypoint.address = data.address;
                //     }
                // });
                // this.setState({ waypointList: waypoints });
                // this.getWikipediaInfo(waypoint);
            })
            .catch(error => {
                dispatch(fetchNominatimError(error));
            })

    }
}

/**
 * Calls the wikipedia api with the city name of the waypoint and then updates the state with the new information
 */
export function getWikipediaInfoAction(waypoint) {
    return dispatch => {
        dispatch(fetchWikipediaInfoPending());
        const cityName = waypoint.address[Object.keys(waypoint.address)[0]];
        const endpoint = `https://de.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro=&explaintext=&titles=${cityName}`
        fetch(endpoint)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(fetchWikipediaInfoSuccess(response.products));
                return response;
                //folgenden code in reducer auslagern
                // const pageId = Object.keys(data.query.pages)[0];

                // let waypoints = [...this.state.waypointList]
                // waypoints.forEach(wp => {
                //     if (wp.id === waypoint.id) {
                //         wp.wikipediaInfo = data.query.pages[pageId].extract;
                //     }
                // });
                // this.setState({ waypointList: waypoints });

            })
            .catch(error => {
                dispatch(fetchWikipediaInfoError(error));
            })
    }
}
