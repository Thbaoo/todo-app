import { useState } from 'react';
import users from '../data/users.json';

import style from './Login.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // handle login
    const handleLogin = () => {
        const user = users.find(
            (u) => 
                u.username === username 
                &&
                u.password === password
        );

        // check if user exists
        if (user) {
            alert('Login successful');
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className={style.loginForm}>
            <h2>Login</h2>

            <input
                type="text"
                placeholder="enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}

                className={style.input}
            />

            <input
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
    
                className={style.input}
            />

            <button onClick={handleLogin} className={style.button}>
                Login
            </button>
        </div>
    );
}

export default Login;
