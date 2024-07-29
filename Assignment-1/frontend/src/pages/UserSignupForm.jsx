import { useState } from 'react';
import axios from 'axios';
import styles from '../components/event.module.css'

function UserSignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const createUser = async (e) => {
    e.preventDefault();
    const payload = { name,email,role,password };
    try {
      const response = await axios.post('http://localhost:4580/api/create', payload);
      console.log(response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };


  return (
    <div id={styles.myform}>
      <form onSubmit={createUser}>
        <table>
          <tbody>
            <tr>
              <td><label>Name:</label></td>
              <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" /></td>
            </tr>

            <tr>
              <td><label>Email:</label></td>
              <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" /></td>
            </tr>

            <tr>
              <td><label>Role:</label></td>
              <td><input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter your Role" /></td>
            </tr>

            <tr>
              <td><label>Password:</label></td>
              <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your pasword" /></td>
            </tr>

            <tr id={styles.btn}>
              <td colSpan={2}><button type="submit">Create User</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UserSignupForm;