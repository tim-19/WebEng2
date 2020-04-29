import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {

  constructor(props) {
    super(props);
  }

  /**
   * Handles changes to the waypoints
   */
  update() {
    const map = this.props.map;

    const waypoints = [];
    this.props.waypoints.forEach(waypoint => {
      waypoints.push(L.latLng(waypoint.lat, waypoint.lng));
    });

    const leafletElement = L.Routing.control({
      waypoints
    }).addTo(map.leafletElement);

    return leafletElement;
  }

  /**
   * Creates the router element and returns it
   */
  createLeafletElement() {
    const leafletElement = this.update();

    return leafletElement.getPlan();
  }

}
export default withLeaflet(Routing);