import {
  ADD_WAYPOINT,
  FETCH_NOMINATIM_PENDING,
  FETCH_NOMINATIM_SUCCESS,
  FETCH_NOMINATIM_ERROR,
  FETCH_WIKIPEDIAINFO_PENDING,
  FETCH_WIKIPEDIAINFO_SUCCESS,
  FETCH_WIKIPEDIAINFO_ERROR,
  fetchWikipediaInfoPending,
  fetchWikipediaInfoSuccess,
  fetchWikipediaInfoError
} from '../actions/waypointActions';
import uuid from 'uuid';
import { ActionsLabel } from 'framework7-react';

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
    case FETCH_NOMINATIM_PENDING:
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
    case FETCH_NOMINATIM_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case FETCH_WIKIPEDIAINFO_PENDING:
      return {
        ...state,
        pending: true
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
    case FETCH_WIKIPEDIAINFO_ERROR:
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
