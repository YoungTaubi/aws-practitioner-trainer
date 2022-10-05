import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Layout({ children }) {

    const { route, signOut } = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const navigate = useNavigate();

    function logOut() {
        signOut();
        navigate('/login');
    }

    return (
        <>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/quiz'>Quiz</Link></li>
                        {route !== 'authenticated' ? (
                            <>
                                <li><Link to='/signup'>Signup</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </>
                        ) : <button onClick={logOut}>Log Out</button>
                        }

                    </ul>
                    
                </nav>
                <main>{children}</main>

                <footer>Footer</footer>
            </div>
        </>
    )
}