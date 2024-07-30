import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../components/event.module.css'

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4580/api/getAllEvents')
      .then(response => {
        setEvents(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

    
  const deleteEventById = async(id) => {
     await axios.delete(`http://localhost:4580/api/deleteEvent/${id}`)
      .then(response => {
        setEvents(events.filter(event => event._id !== id));
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error deleting event:', error);
      });
  };

  
  return (
    <div id={styles.profile}>
      <h1>List of All Events</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id}>
              <td>{event.title}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
              <td>
                <Link to={`/editEvent/${event._id}`}><button>Edit</button></Link>
              </td>
              
                <td><button onClick={()=>deleteEventById(event._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList;
