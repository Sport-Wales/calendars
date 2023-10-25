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
          // Add the new events here
          {
              title: 'Table Tennis Wales - Main Arena',
              start: '2023-10-07',
              end: '2023-10-08'
          },
          {
              title: 'Welsh Boxing - Main Arena',
              start: '2023-10-13',
              end: '2023-10-15'
          },
          {
              title: 'Squash Wales - National Squash Centre',
              start: '2023-10-13',
              end: '2023-10-15'
          },
          {
              title: 'Welsh Gymnastics - Main Arena',
              start: '2023-10-21',
              end: '2023-10-22'
          },
          {
              title: 'Welsh Judo Association',
              start: '2023-10-28',
              end: '2023-10-29'
          },
          {
              title: 'Welsh Target Shooting Federation - Main Arena & Jubilee Hall',
              start: '2023-11-02',
              end: '2023-11-05'
          },
          {
              title: 'Welsh Fencing Association - Main Arena & Jubilee Hall',
              start: '2023-11-10',
              end: '2023-11-12'
          },
          {
              title: 'Welsh Judo Association - National Judo Centre',
              start: '2023-11-11'
          },
          {
              title: 'Colleges Wales Sport - Main Arena',
              start: '2023-11-14'
          },
          {
              title: 'Welsh Gymnastics - Main Arena',
              start: '2023-11-18',
              end: '2023-11-19'
          },
          {
              title: 'Urdd - Main Arena',
              start: '2023-11-23'
          },
          {
              title: 'Welsh Judo Association - Main Arena',
              start: '2023-11-25'
          },
          {
              title: 'Disability Sport Wales - Main Arena',
              start: '2023-11-26'
          },
          {
              title: 'Badminton Wales - Main Arena & Jubilee Hall',
              start: '2023-11-27',
              end: '2023-12-02'
          }
      ],
  });

  calendar.render();
});
