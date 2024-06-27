import React, { useState } from 'react';

const CalendarSwitcher = () => {
  const [calendar, setCalendar] = useState('soufian');

  const calendars = {
    soufian: 'https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FMadrid&bgcolor=%23039BE5&showTitle=0&showCalendars=0&showTz=0&mode=AGENDA&title=Barber%20Shop%20-%20Las%20Torres&src=ZGEwNzJmMjJhZDVmOGVkY2YzMjhkMTE1M2EyZjJmMThiOTBlZWZiZDdlMDkzZjM2MjllYjI0NDNiZTE5ZTY3MEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000',
    peluquero2: 'https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FMadrid&bgcolor=%23039BE5&showTitle=0&showCalendars=0&showTz=0&mode=AGENDA&title=Peluquero%202&src=06d01bd887d516e3573da7efb76f36e42bda1ae447643553ff27efecf0ca18b9%40group.calendar.google.com&color=%23D50000'
  };

  return (
    <div>
      <div className="inline-flex rounded-md shadow-sm text-center align-middle" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={() => setCalendar('soufian')}
        >
          Soufian
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={() => setCalendar('peluquero2')}
        >
          Peluquero 2
        </button>
      </div>
      <div className="w-full max-w-screen-lg mt-4">
        <iframe
          src={calendars[calendar]}
          className="w-full h-96 border border-gray-400"
          style={{ border: 0 }}
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default CalendarSwitcher;
