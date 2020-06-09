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

export default class Home extends React.Component {

  render() {
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
                <LeafletMap/>
              </CardContent>
            </Card>
          </Col>
          <Col width="100" medium="50">
            <Card title="Wegpunkte">
              <CardContent>
                <Waypoints />
              </CardContent>
            </Card>
          </Col>
        </Row>

      </Page>
    )
  }
}
