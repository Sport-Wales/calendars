document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
          {
              title: 'Welsh Gymnastics - Main Arena',
              start: '2023-09-10',
          },
          {
              title: 'Welsh Boxing - Main Arena',
              start: '2023-09-15',
              end: '2023-09-17'
          },
          {
            title: 'Squash Wales - National Squash Centre',
            start: '2023-09-22',
            end: '2023-09-24'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2023-09-23',
            end: '2023-09-24'
          },
          {
            title: 'Welsh Judo Association',
            start: '2023-09-30',
          },
      ],
  });

  calendar.render();
});