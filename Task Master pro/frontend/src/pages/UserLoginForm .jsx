import { useState } from 'react';
import axios from 'axios';
import styles from '../components/event.module.css'

function UserLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    try {
      const response = await axios.post('http://localhost:4580/api/login', payload);
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div id={styles.login}>
      <form onSubmit={loginUser}>
        <table>
          <tbody>
            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" /></td>
            </tr>

            <tr>
              <td><label>Password:</label></td>
              <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" /></td>
            </tr>

            <tr id={styles.btn}>
              <td colSpan={2}><button type="submit">Login User</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UserLoginForm;