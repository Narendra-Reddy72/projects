import React, { useState } from "react";
import axios from 'axios'
import '../../assets/styles/signup.css';

function Signup(){
    const[name,setName] = useState('')
    const[email,setEmail] = useState('');
    const[role,setRole] = useState('');
    const[password,setPassword] = useState('');

    const SignupForm = async(e)=>{
        e.preventDefault()
        try{
            const payload = {name,email,role,password}
            const response = await axios.post('http://localhost:4500/api/auth/register',payload)
            console.log(response.data.data)
        }catch(err){
            console.error(err)
        }
    }

    return(
        <div className="signup-form-container">
            <form action="" className="signup-form"onSubmit={SignupForm}>
            <h1 className="signup-form-title">User Signup Form</h1>
            <table className="signup-form-table">
            <tbody>
            <tr>
                    <td><label htmlFor="" className="signup-form-label">Name:</label></td>
                    <td><input type="text" className="signup-form-input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="" className="signup-form-label">Email:</label></td>
                    <td><input type="email" className="signup-form-input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="" className="signup-form-label">Role:</label></td>
                    <td><input type="text" className="signup-form-input" value={role} onChange={(e)=>setRole(e.target.value)} placeholder="Enter your Role"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="" className="signup-form-label">Password:</label></td>
                    <td><input type="text" className="signup-form-input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button className="submit-button">Signup</button>
                    </td>
                </tr>
            </tbody>
            </table>
            </form>
        </div>
    )
}

export default Signup;