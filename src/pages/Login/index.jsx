import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import './index.css';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ username });
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className='mx-auto'>Login</button>
            </form>
        </div>
    );
};
export default LoginPage;
