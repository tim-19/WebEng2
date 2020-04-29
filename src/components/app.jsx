import React from 'react';

import {
  App,
  Panel,
  View,
  Page,
  Navbar,
  List,
  ListButton,
} from 'framework7-react';

import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'WebEng2',
        theme: 'ios',

        // App routes
        routes: routes,
        // Register service worker
        serviceWorker: {
          path: '/service-worker.js',
        },
      },
    }
  }
  render() {
    return (
      <App params={this.state.f7params} >

        {/* Left panel with cover effect*/}
        <Panel left cover>
          <View>
            <Page>
              <Navbar title="Menü" />
              <List>
                <ListButton panelClose onClick={() => this.$f7.views.main.router.navigate('/')}>Home</ListButton>
                <ListButton panelClose onClick={() => this.$f7.views.main.router.navigate('/about/')}>About</ListButton>
              </List>
            </Page>
          </View>
        </Panel>

        {/* Your main view, should have "view-main" class */}
        <View main className="safe-areas view-main" url="/" />

      </App>
    )
  }

  componentDidMount() {
    this.$f7ready(f7 => {

      // Call F7 APIs here
    });
  }
}