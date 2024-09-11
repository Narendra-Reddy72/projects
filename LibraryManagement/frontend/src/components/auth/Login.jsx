import React, { useState } from "react";
import axios from "axios";
import '../../assets/styles/login.css';
function Login(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    
    const LoginForm = async(e)=>{
        e.preventDefault();
        try{
            const payload = { email,password }
            const response = await axios.post('http://localhost:4500/api/auth/login',payload)
            localStorage.setItem('token',response.data.token);
            console.log(response.data.data)
        }catch(err){
            console.error(err)
        }
    }
    

    return(
        <div className="login-form-container">
            <form action="" className="login-form" onSubmit={LoginForm}>
            <h1 className="login-form-title">User Login Form</h1>
            <table className="login-form-table">
            <tbody>
                <tr>
                    <td><label htmlFor="" className="login-form-label">Email:</label></td>
                    <td><input type="email" className="login-form-input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"/></td>
                </tr>
                <tr>
                    <td><label htmlFor="" className="login-form-label">Password:</label></td>
                    <td><input type="text" className="login-form-input" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button className="submit-button">Login</button>
                    </td>
                </tr>
            </tbody>
            </table>
            </form>
        </div>
    )
}

export default Login;