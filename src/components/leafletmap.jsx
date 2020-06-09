import React, { Component, useRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "./routing";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWaypointsError, getWaypoints, getWaypointsPending } from '../reducers/waypointReducer';
import { addWaypointAction } from '../actions/api';

class LeafletMap extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.routerRef = React.createRef(); // router data has to be updated manually
  }

  state = {
    position: [48.137154, 11.576124],
    zoom: 13,
    isMapInit: false
  };

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  /**
   * Handle a click on the map
   */
  handleClick = event => {
    this.props.addWaypoint(event.latlng.lat, event.latlng.lng);
    this.routerRef.current.update(); // notify the router that the waypoints have changed
  }

  render() {
    return (
      <div>
        <Map center={this.state.position} zoom={this.state.zoom} ref={this.saveMap} style={{ height: '600px' }} onclick={this.handleClick}>
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {this.state.isMapInit && <Routing map={this.map} waypoints={this.props.waypoints} ref={this.routerRef} />}
        </Map>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: getWaypointsError(state),
  waypoints: getWaypoints(state),
  pending: getWaypointsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addWaypoint: addWaypointAction,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeafletMap);
