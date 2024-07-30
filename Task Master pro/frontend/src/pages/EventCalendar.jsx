import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4580/api/getAllEvents')
      .then(response => {
        const events = response.data.data.map(event => ({
          id: event._id,
          title: event.title,
          start: new Date(event.date + 'T' + event.time),
          end: new Date(event.date + 'T' + event.time), 
          location: event.location,
          description: event.description
        }));
        setEvents(events.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div>
      <h1>Event Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default EventCalendar;
