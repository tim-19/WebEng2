import {
    List,
    ListItem,
    AccordionContent,
    Block
} from 'framework7-react';
import React, { Component } from 'react';

export default class Waypoints extends Component {

    constructor(props) {
        super(props);
        this.createListItem = this.createListItem.bind(this);
    }

    /**
     * creates a list item for the waypoint with conditional rendering
     */
    createListItem = waypoint => {
        if (waypoint.address) {
            const wikipediaInfo = waypoint.wikipediaInfo ? waypoint.wikipediaInfo : "...";
            const cityName = waypoint.address[Object.keys(waypoint.address)[0]];
            return (
                <ListItem accordionItem key={waypoint.id} title={cityName}>
                    <AccordionContent>
                        <Block>
                            <p>
                                {wikipediaInfo}
                            </p>
                        </Block>
                    </AccordionContent>
                </ListItem>
            );
        }
        return null;
    }

    render() {
        if (this.props.waypoints.length > 0) {
            return (
                <div>
                    <List accordionList>
                        {this.props.waypoints.map(waypoint => (
                            this.createListItem(waypoint)
                        ))}
                    </List>
                </div>
            )
        } else {
            return (
                <div style={{ textAlign: 'center ' }}>
                    <p>Es sind noch keine Wegpunkte angelegt.</p>
                    <p>Durch klicken auf die Karte können Wegpunkte erstellt werden</p>
                </div>
            )
        }

    }
}
