import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../components/event.module.css';

function EditEvents() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const { event_id } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:4580/api/readEvent/${event_id}`);
        console.log('Fetched event data:', response.data); 
        const event = response.data.data;
        if (event) {
          setTitle(event.title || '');
          setDate(event.date || '');
          setTime(event.time || '');
          setLocation(event.location || '');
          setDescription(event.description || '');
        } else {
          console.error('No event data found');
        }
      } catch (error) {
        console.log('Error fetching event data:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchEvent();
  }, [event_id]);

  const editEvent = async (e) => {
    e.preventDefault();
    const payload = { title, date, time, location, description };

    try {
      const response = await axios.put(`http://localhost:4580/api/updateEvent/${event_id}`, payload);
      console.log('Update response:', response.data.data); 
      navigate('/readEvent'); 
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div id={styles.myform}>
      <form onSubmit={editEvent}>
        <table>
          <tbody>
            <tr>
              <td><label>Title:</label></td>
              <td><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your title" required /></td>
            </tr>
            <tr>
              <td><label>Date:</label></td>
              <td><input type="date" value={date.split('T')[0]} onChange={(e) => setDate(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label>Time:</label></td>
              <td><input type="time" value={time} onChange={(e) => setTime(e.target.value)} required /></td>
            </tr>
            <tr>
              <td><label>Location:</label></td>
              <td><input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter your location" required /></td>
            </tr>
            <tr>
              <td><label>Description:</label></td>
              <td><input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your description" required /></td>
            </tr>
            <tr id={styles.btn}>
              <td colSpan={2}><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default EditEvents;
