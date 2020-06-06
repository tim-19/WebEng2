# Web Engineering 2 Prüfungsaufgabe

## Live Version der Anwendung

[Hier gehts zur Live Version](https://master.d28z43slkxs0h.amplifyapp.com/)

## Deployment

Die Anwendung wird nach jedem erfolgreichen Pull Request in den Master-Branch automatisch auf AWS deployed.

## NPM Scripts

* 🔥 `start`/`dev` - Anwendung im Entwicklungsserver starten
* 🔧 `build-dev` - Projekt im Entwicklungsmodus bauen
* 🔧 `build-prod` - Projekt für Produktionsumgebung bauen

## Prüfungsaufgabe

Entwickeln Sie eine Web-Applikation die innerhalb eines Location-Based-Service eine Karte darstellt. Innerhalb der Karte soll eine Position mit ihren Geo-Koordinaten ausgewählt werden können. Über diese Koordinaten soll mittels Reverse-Geocoding*1 der Ort ermittelt und über Wikipedia die entsprechenden Information zur Örtlichkeit ausgelesen und visualisiert werden

## Anforderungen

+ Die Web-Applikation soll möglichst gemäß den Vorgaben einer PWA entsprechend (Progressive-WebApplication, mobile first, responsive,...) umgesetzt werden.
+ Die App soll über "React/JSX" und "Redux", sowie die User Experience (Mobility/UI) über "Framework7" und dessen Standardkomponenten umgesetzt werden. Die Karten sollen über OpenStreetMap ggf. Leaflet eingebunden werden.
+ Bilden Sie dazu kleine Sprint-Teams (ca. 4-7 Personen pro Sprint-Team) und zerlegen sie die Epic in die entsprechenden User-Stories und Sprints (Produkt-Backlog, Sprint-Backlog), so dass die Teams eine gleichmäßige Auslastung haben.
+ Definieren Sie einen Scrum-Master (wenn nötig ggf. ein Team von 2 Personen) der das ProduktInkrement kontrolliert und dem Team beim Sprint-Inkrement beratend und unterstützend zur Seite steht, die (online)-Kommunikation untereinander aufrecht erhält, das Ziel ständig kontrolliert und den ProductOwner informiert.
+ Die fertige Lösung soll ggf. auf einem GitHub-Repository lauffähig veröffentlicht und auf CD/DVD dem Sekretariat übergeben werden. Der Scrum-Master ist für die vollständige Auslieferung der PWA zum genannten Termin verantwortlich.

## Bewertung

+ **Problemstellung (25%):** Nachvollziehbare Darstellung und Abgrenzung der Problemstellung. Ist der Programmentwurf entsprechend der Problemstellung, Detailliertheit und Qualität von den Kursbeteiligten umgesetzt worden?
+ **Aufbau (20%):** Nachvollziehbarer Aufbau der Arbeit aus der Zielhierarchie. Schlüssigkeit der Struktur/ Methode der eigenen Bearbeitung.
+ **Gestaltung der Arbeit (20%):** Übersichtlichkeit des Programmentwurfs auch bezüglich: Intuitive Bedienbarkeit, Quelltextgestaltung, App-Layout, Einheitlichkeit und Qualität der verwendeten Gestaltungselemente.
+ **Zielhierarchie (15%):** Umsetzung des Finalziels sowie Ableitung von Modalzielen zur Erreichung des Finalziels (Scrum: User-Stories und Sprint-Teams).
+ **Eigenständigkeit (10%):** Aufbauend auf die zur Verfügung stehende Quellenarbeit mit ausreichendem Eigenanteil für die Arbeit und Ableitung eigener Erkenntnisse.
+ **Dokumentation (10%):** Ausreichende Dokumentation in den Quelltexten, so dass ein aussenstehender Programmierer die Arbeit übernehmen und darauf aufsetzen kann.