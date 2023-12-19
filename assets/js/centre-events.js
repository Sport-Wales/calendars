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
          },

          {
            title: 'Urdd - Main Arena',
            start: '2023-12-05',
            end: '2023-12-05'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2023-12-09',
            end: '2023-12-10'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2023-12-15',
            end: '2023-12-15'
          },
          {
            title: 'Table Tennis Wales - Main Arena',
            start: '2023-12-16',
            end: '2023-12-17'
          },
          {
            title: 'Welsh Archery Association - Main Arena',
            start: '2024-01-07',
            end: '2024-01-07'
          },
          {
            title: 'Table Tennis Wales - Jubilee Hall',
            start: '2024-01-06',
            end: '2024-01-07'
          },
          {
            title: 'British Fencing - Main Arena & Jubilee Hall & National Squash Centre',
            start: '2024-01-08',
            end: '2024-01-14'
          },
          {
            title: 'Football Association of Wales - Main Arena',
            start: '2024-01-17',
            end: '2024-01-18'
          },
          {
            title: 'Rebellion Allstars Dance & Cheer - Main Arena',
            start: '2024-01-20',
            end: '2024-01-20'
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-01-21',
            end: '2024-01-21'
          },
          {
            title: 'Table Tennis Wales - Main Arena & Jubilee Hall',
            start: '2024-01-27',
            end: '2024-01-28'
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-02-03',
            end: '2024-02-04'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-02-05',
            end: '2024-02-05'
          },
          {
            title: 'Welsh Rowing - Main Arena',
            start: '2024-02-06',
            end: '2024-02-06'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-02-09',
            end: '2024-02-11'
          },
          {
            title: 'Squash Wales - National Squash Centre',
            start: '2024-02-09',
            end: '2024-02-11'
          },
          {
            title: 'Welsh Fencing Association - Jubilee Hall',
            start: '2024-02-11',
            end: '2024-02-11'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-02-15',
            end: '2024-02-18'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-02-21',
            end: '2024-02-21'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-02-24',
            end: '2024-02-25'
          },
          {
            title: 'Welsh Fencing Association - Jubilee Hall',
            start: '2024-02-24',
            end: '2024-02-25'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-02-29',
            end: '2024-02-29'
          },
          {
            title: 'Welsh Gymnastics - Main Arena',
            start: '2024-03-02',
            end: '2024-03-03'
          },
          {
            title: 'Welsh Fencing Association - Jubilee Hall',
            start: '2024-03-03',
            end: '2024-03-03'
          },
          {
            title: 'Careers Wales - Main Arena',
            start: '2024-03-05',
            end: '2024-03-05'
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-03-07',
            end: '2024-03-07'
          },
          {
            title: 'Badminton Wales - Main Arena',
            start: '2024-03-09',
            end: '2024-03-10'
          },
          {
            title: 'Cardiff Dragons Arts & Sports Club - Main Arena',
            start: '2024-03-16',
            end: '2024-03-16'
          },
          {
            title: 'Wales Netball - Main Arena',
            start: '2024-03-17',
            end: '2024-03-17'
          },
          {
            title: 'United Dance Organisation - Main Arena',
            start: '2024-03-20',
            end: '2024-03-20'
          },
          {
            title: 'Table Tennis Wales - Main Arena',
            start: '2024-03-23',
            end: '2024-03-24'
          }
      ],
  });

  calendar.render();
});
