import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        signIn()
        console.log('submit');
    }

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);
            console.log(user);
            navigate(from, { replace: true });
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const { route } = useAuthenticator((context) => [context.route]);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    useEffect(() => {
        
        if (route === 'authenticated') {
            console.log('nav');
            navigate(from, { replace: true });
        }
    }, [route, navigate, from]);

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username (E-mail)</label>
                <input type='email' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button>Login</button>
            </form>
        </>
    )
}