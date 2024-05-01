# Sport Wales Calendars

Website to house events taking place in the Sport Wales National Centre.

## Technologies

- HTML
- CSS
- JavaScript
- JavaScript library - [Full Calendar](https://fullcalendar.io/)

## Important notes

For multi-day events, set the 'end' date to the day after the event ends. For example, this event:

26 – 27th April, Welsh Boxing, Main Arena

Becomes this in code:
```js
{
	title: 'Welsh Boxing - Main Arena',
	start: '2024-04-26',
	end: '2024-04-28',
	color: combatSportsCol
},
```

## Roadmap

- Welsh translation
- More event details

## Deployment

The website is <a href="https://sport-wales-calendar.netlify.app/" target="_blank">live and deployed</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/be1289ef-7749-4535-b2d1-c6b4fb37fa1c/deploy-status)](https://app.netlify.com/sites/sport-wales-calendar/deploys)