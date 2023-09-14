document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
          {
              title: 'Event 1',
              start: '2023-09-15',
          },
          {
              title: 'Event 2',
              start: '2023-09-20',
          },
      ],
  });

  calendar.render();
});