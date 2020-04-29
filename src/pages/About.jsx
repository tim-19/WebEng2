import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  Link,
  Block,
  BlockTitle,
} from 'framework7-react';

import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <Page name="about">

        {/* Navbar */}
        <Navbar large sliding={false}>
          <NavLeft>
            <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
          </NavLeft>
          <NavTitle sliding>About</NavTitle>

          <NavTitleLarge>About</NavTitleLarge>
        </Navbar>

        {/* page content */}
        <BlockTitle>Prüfungsaufgabe</BlockTitle>
        <Block strong>
          <p>Entwickeln Sie eine Web-Applikation die innerhalb eines Location-Based-Service eine Karte
          darstellt. Innerhalb der Karte soll eine Position mit ihren Geo-Koordinaten ausgewählt werden
          können. Über diese Koordinaten soll mittels Reverse-Geocoding*1 der Ort ermittelt und über
          Wikipedia die entsprechenden Information zur Örtlichkeit ausgelesen und visualisiert werden</p>
        </Block>

        <BlockTitle>Anforderungen</BlockTitle>
        <Block strong>
          <p>Die Web-Applikation soll möglichst gemäß den Vorgaben einer PWA entsprechend (Progressive-WebApplication, mobile first, responsive,...) umgesetzt werden.</p>
          <p>Die App soll über "React/JSX" und "Redux", sowie die User Experience (Mobility/UI) über
          "Framework7" und dessen Standardkomponenten umgesetzt werden. Die Karten sollen über
          OpenStreetMap ggf. Leaflet eingebunden werden.</p>
          <p>Bilden Sie dazu kleine Sprint-Teams (ca. 4-7 Personen pro Sprint-Team) und zerlegen sie die Epic in
          die entsprechenden User-Stories und Sprints (Produkt-Backlog, Sprint-Backlog), so dass die Teams
          eine gleichmäßige Auslastung haben.</p>
          <p>Definieren Sie einen Scrum-Master (wenn nötig ggf. ein Team von 2 Personen) der das ProduktInkrement kontrolliert und dem Team beim Sprint-Inkrement beratend und unterstützend zur Seite steht,
          die (online)-Kommunikation untereinander aufrecht erhält, das Ziel ständig kontrolliert und den ProductOwner informiert.</p>
          <p>Die fertige Lösung soll ggf. auf einem GitHub-Repository lauffähig veröffentlicht und auf CD/DVD dem
          Sekretariat übergeben werden. Der Scrum-Master ist für die vollständige Auslieferung der PWA zum
          genannten Termin verantwortlich. </p>
        </Block>
        
        <BlockTitle>Bewertung</BlockTitle>
        <Block strong>
          <p><strong>Problemstellung (25%):</strong> Nachvollziehbare Darstellung und Abgrenzung der
          Problemstellung. Ist der Programmentwurf entsprechend der Problemstellung,
          Detailliertheit und Qualität von den Kursbeteiligten umgesetzt worden?</p>
          <p><strong>Aufbau (20%):</strong> Nachvollziehbarer Aufbau der Arbeit aus der Zielhierarchie.
          Schlüssigkeit der Struktur/ Methode der eigenen Bearbeitung.</p>
          <p><strong>Gestaltung der Arbeit (20%):</strong> Übersichtlichkeit des Programmentwurfs auch
          bezüglich: Intuitive Bedienbarkeit, Quelltextgestaltung, App-Layout, Einheitlichkeit und Qualität der verwendeten Gestaltungselemente.</p>
          <p><strong>Zielhierarchie (15%):</strong> Umsetzung des Finalziels sowie Ableitung von Modalzielen zur Erreichung des Finalziels (Scrum: User-Stories und Sprint-Teams).</p>
          <p><strong>Eigenständigkeit (10%):</strong> Aufbauend auf die zur Verfügung stehende Quellenarbeit mit ausreichendem Eigenanteil für die Arbeit und Ableitung eigener
          Erkenntnisse.</p>
          <p><strong>Dokumentation (10%):</strong> Ausreichende Dokumentation in den Quelltexten, so
          dass ein aussenstehender Programmierer die Arbeit übernehmen und darauf
          aufsetzen kann.</p>
        </Block>

      </Page>
    )
  }
}
