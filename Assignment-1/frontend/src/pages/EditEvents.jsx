import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../components/event.module.css'

function EditEvents() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  let navigate = useNavigate();
  let { event_id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4580/api/readEvent/${event_id}`)
      .then((response) => {
        const event = response.data.data;
        setTitle(event.data.title);
        setDate(event.data.date);
        setTime(event.data.time);
        setLocation(event.data.location);
        setDescription(event.data.description);
      })
      .catch((error) => {
        console.log('Error fetching event data:', error);
      });
  }, [event_id]);

  const editEvent = async (e) => {
    e.preventDefault();
    const payload = { title, date, time, location, description };
    try {
      const response = await axios.put(`http://localhost:4580/api/updateEvent/${event_id}`, payload);
      console.log(response.data);
      navigate('/readEvent');

    } catch (error) {
      console.error('Error updating event:', error);
    }
  };
  
  return (
    <div id={styles.myform}>
      <form onSubmit={editEvent}>
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
              <td colSpan={2}><button type="submit">Update Event</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default EditEvents;
