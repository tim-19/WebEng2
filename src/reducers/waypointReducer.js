import {
  ADD_WAYPOINT,
  FETCH_PENDING,
  FETCH_NOMINATIM_SUCCESS,
  FETCH_WIKIPEDIAINFO_SUCCESS,
  FETCH_ERROR,
} from '../actions/waypointActions';
import uuid from 'uuid';

const initialState = {
  pending: false,
  waypoints: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_WAYPOINT:

      let newWaypoint = {
        id: uuid.v4(),
        lat: action.lat,
        lng: action.lng,
        address: null,
        wikipediaInfo: null
      };

      return {
        ...state,
        waypoints: [...state.waypoints, newWaypoint]
      };
    case FETCH_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_NOMINATIM_SUCCESS:
      var waypoints = [...state.waypoints]
      waypoints.forEach(wp => {
        if (wp.lat === action.lat && wp.lng === action.lng) {
          wp.address = action.response.address;
        }
      });

      return {
        ...state,
        pending: false,
        waypoints
      }
    case FETCH_WIKIPEDIAINFO_SUCCESS:
      const pageId = Object.keys(action.response.query.pages)[0];

      var waypoints = [...state.waypoints]
      waypoints.forEach(wp => {
        if (wp.lat === action.lat && wp.lng === action.lng) {
          wp.wikipediaInfo = action.response.query.pages[pageId].extract;
        }
      });

      return {
        ...state,
        pending: false,
        waypoints
      }
    case FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
};

export const getWaypoints = state => state.waypoints;
export const getWaypointsPending = state => state.pending;
export const getWaypointsError = state => state.error;
