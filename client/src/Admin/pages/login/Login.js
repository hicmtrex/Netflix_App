import React, { useContext, useState } from 'react'
import { login } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.css'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isFetching, dispatch } = useContext(AuthContext);
    
    const handleLogin = (e) => {
        e.preventDefault();
        login({email,password},dispatch)
    }
    return (
        <div className="login">
            <form className="loginForm" onSubmit={handleLogin}>
                <input type="email" className="loginInput"
                   onChange={(e) => setEmail(e.target.value)}placeholder="email" />
                <input type="password" className="loginInput"
                onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <button disabled={isFetching} className="loginButton">Login</button>
        </form>
        </div>
    )
}

export default Login
