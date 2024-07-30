import { useState } from 'react';
import axios from 'axios';
import styles from '../components/event.module.css'

function EventCreateForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const createEvent = async (e) => {
    e.preventDefault();
    const payload = { title, date, time, location, description };
    try {
      const response = await axios.post('http://localhost:4580/api/createEvent', payload);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div id={styles.box}>
      <form onSubmit={createEvent}>
        <table>
          <tbody>
            <tr>
              <td><label>Title:</label></td>
              <td><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your title" /></td>
            </tr>

            <tr>
              <td><label>Date:</label></td>
              <td><input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter your date" /></td>
            </tr>

            <tr>
              <td><label>Time:</label></td>
              <td><input type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Enter your time" /></td>
            </tr>

            <tr>
              <td><label>Location:</label></td>
              <td><input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location" /></td>
            </tr>

            <tr>
              <td><label>Description:</label></td>
              <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your description" /></td>
            </tr>
            <tr id={styles.btn}>
              <td colSpan={2}><button type="submit">Create Event</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default EventCreateForm;