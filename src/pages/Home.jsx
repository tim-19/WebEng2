import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  Link,
  Block,
  BlockTitle,
  Row,
  Col,
  Card,
  CardContent,
} from 'framework7-react';
import LeafletMap from '../components/leafletmap';
import Waypoints from '../components/waypoints';
import uuid from 'uuid';

export default class Home extends React.Component {

  state = {
    waypointList: []
  }

  /**
   * Creates a new waypoint, adds it to the state and triggers reverse geocoding for the new waypoint
   */
  addWaypoint = (lat, lng) => {
    let newWaypoint = {
      id: uuid.v4(),
      lat,
      lng,
      address: null,
      wikipediaInfo: null
    };

    this.setState({ waypointList: [...this.state.waypointList, newWaypoint] });
    this.reverseGeocoding(newWaypoint);
  }

  /**
   * Calls the nominatim api with the coordinates, receives the corresponding address and then updates the state
   */
  reverseGeocoding = waypoint => {
    const endpoint = `https://nominatim.openstreetmap.org/reverse?format=json&zoom=10&lon=${waypoint.lng}&lat=${waypoint.lat}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        let waypoints = [...this.state.waypointList]
        waypoints.forEach(wp => {
          if (wp.id === waypoint.id) {
            wp.address = data.address;
            waypoint.address = data.address;
          }
        });
        this.setState({ waypointList: waypoints });
        this.getWikipediaInfo(waypoint);
      })
      .catch(error => console.log(error));
  }

  /**
   * Calls the wikipedia api with the city name of the waypoint and then updates the state with the new information
   */
  getWikipediaInfo = waypoint => {
    const cityName = waypoint.address[Object.keys(waypoint.address)[0]];
    const endpoint = `https://de.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro=&explaintext=&titles=${cityName}`
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const pageId = Object.keys(data.query.pages)[0];

        let waypoints = [...this.state.waypointList]
        waypoints.forEach(wp => {
          if (wp.id === waypoint.id) {
            wp.wikipediaInfo = data.query.pages[pageId].extract;
          }
        });
        this.setState({ waypointList: waypoints });

      })
      .catch(error => console.log(error));
  }

  render() {
    const { waypointList } = this.state;
    return (
      <Page name="home">
        {/* Top Navbar */}
        <Navbar large sliding={false}>
          <NavLeft>
            <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
          </NavLeft>
          <NavTitle sliding>Home</NavTitle>

          <NavTitleLarge>Home</NavTitleLarge>
        </Navbar>

        {/* Page content */}
        <BlockTitle>Einführung</BlockTitle>
        <Block strong>
          <p>Durch klicken auf die Karte können Wegpunkte erstellt werden</p>
        </Block>

        {/* Two Columns, one for the map and one for the list of waypoints */}
        <Row>
          <Col width="100" medium="50">
            <Card title="Karte">
              <CardContent>
                <LeafletMap waypoints={waypointList} />
              </CardContent>
            </Card>
          </Col>
          <Col width="100" medium="50">
            <Card title="Wegpunkte">
              <CardContent>
                <Waypoints waypoints={waypointList} />
              </CardContent>
            </Card>
          </Col>
        </Row>

      </Page>
    )
  }
}
