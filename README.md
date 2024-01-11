NL Design System zou er flink op vooruit gaan met een componenten-galerij, waar je snel kan vinden of de community al heeft gemaakt wat jij nodig hebt en hoe ver ze zijn met de Definition of Done.

Voorbeelden:
https://component.gallery
https://www.designsystems.com/keeping-design-system-contributions-in-check/

Gemeente Utrecht heeft een eigen [community design system](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/utrecht-design-tokens-kleuren--docs) bij NL Design System waar ze al veel componenten hebben bijgedragen. Ook hebben ze een website waar zij meer componenten documentatie op beschikbaar willen maken.

Voor deze opdracht willen wij graag een componenten overzicht pagina hebben waar de status van het component bij Utrecht goed inzichtelijk is.

Door css-custom-properties te gebruiken kunnen jullie nu design keuzes maken voor de gemeente Utrecht en kan Frameless later ook de huisstijlen van andere klanten erop toepassen zoals bijvoorbeeld voor nldesignsystem.nl

## Detail pagina

Ook willen we graag een component-detail pagina waar met een sidebar te navigeren is tussen de verschillende documentatie onderdelen van een component. Zoals 'Gebruik', 'Design Tokens', 'Toegankelijkheid' en 'Status'.

Jullie kunnen hiervoor de voorbeeldpagina van de button component nabouwen https://www.figma.com/file/fy08SZpZmqx6ljLwvA3Woe/NLDS---Schetsboek?type=design&node-id=1765-1839&mode=design&t=065l0gWPpfXxPgXJ-0
Het gaat hierbij alleen om de content pagina, dus de header, footer, sidebar, breadcrumb en 'op deze pagina' navigatie kun je weglaten.

Moeilijke componenten, waarvan we hopen dat je er ten minste een maakt:

### Tabs voor tonen van voorbeeld per programmeertaal

Een voorbeeld is beschikbaar voor een paar talen, de naam van de npm package is per taal anders en ook het code voorbeeld. Door tabs te maken die on-click andere informatie tonen kun je dit voor de eindgebruiker makkelijk beschikbaar maken.

In kleine viewports worden de tabs soms te lang, dan kan de gebruiker de taal kiezen in een selectbox.

- [Voorbeeld van het component op desktop](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=369-10383&mode=design&t=tFmI1aEp7CfHmJ7t-4)
- [Voorbeeld van het component op mobile](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=239-1599&mode=design&t=tFmI1aEp7CfHmJ7t-4)

### Checklist sectie voor Definition of Done

Een nieuwe sectie die ook in het tab component voorkomt
In de nieuwe sectie wordt een spotlight getoond met de huidige status van het component en een status component als accordion waar elke status zichtbaar wordt. 
Voor dit component kun je zelf het design bepalen of overleggen met de designer van het kernteam Jeffrey of van gemeente Utrecht René en Jeroen. Robbert en Yolijn van Frameless kunnen jullie aan elkaar voorstellen.

- [Voorbeeld van het component op desktop en mobiel](https://www.figma.com/file/fy08SZpZmqx6ljLwvA3Woe/NLDS---Schetsboek?type=design&node-id=1765-1993&mode=design&t=065l0gWPpfXxPgXJ-4)
- [De Definition of Done per status](https://www.figma.com/file/sq4IhUI8iml49FvhZHI83e/Untitled?type=design&node-id=1-2&mode=design&t=zNq33S1j8xBMYKnx-4)

### Sidebar
Aan de zijkant staan voor de belangrijke koppen en linkje in `op deze pagina`. Door op deze te klikken scrollt de pagina naar het betreffende onderdeel.
De sidebar blijft altijd in beeld ook als je ver naar beneden scrollt.
Op mobiel past deze navigatie niet, dan zit hij in een `op deze pagina` uitklap menu.

- [Voorbeeld van het component op desktop](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=369-6775&mode=design&t=tFmI1aEp7CfHmJ7t-4)
- [Voorbeeld van het component op mobiel](https://www.figma.com/file/DexK5wJdvMVoxXKn1kmmUB/NLDS---Doc-website---Ontwerp?type=design&node-id=369-5165&mode=design&t=tFmI1aEp7CfHmJ7t-4)

### Bonus: Tabs voor scroll-navigatie

Voorbeeld van de scroll-tab component is te zien in Nord Design System:
https://nordhealth.design/components/icon/#integration

- De tabs zijn sticky
- Als er teveel tabs zijn om in 1x te tonen is het menu responsive zoals bij https://ux.mailchimp.com/patterns/feedback#toaster
- Een tab selecteren zorgt voor scroll naar het geselecteerde element
