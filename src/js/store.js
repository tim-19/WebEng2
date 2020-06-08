import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import waypointReducer from '../reducers/waypointReducer';

const middlewares = [thunk];
export const store = createStore(waypointReducer, { waypoints: [] }, applyMiddleware(...middlewares));