import { Auth, Hub } from 'aws-amplify';
import { useState } from 'react';


export default function Signup() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [confirmationCode, setConfirmationCode] = useState('')

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    name,
                    // email,          // optional
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            console.log(user);
            // listenToAutoSignInEvent()
        } catch (error) {
            console.log('Sry! Da is was schief gelaufen :(');
            console.log('error signing up:', error);
        }
    }

    async function confirmSignUp() {
        try {
            let code = confirmationCode
            await Auth.confirmSignUp(username, code);
            console.log('confirmed')
            signIn()
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }


    // function listenToAutoSignInEvent() {
    //     Hub.listen('auth', ({ payload }) => {
    //         const { event } = payload;
    //         if (event === 'autoSignIn') {
    //             const user = payload.data;
    //             console.log(user);
    //             signIn()
    //             // assign user
    //             console.log('Logged in');
    //         } else if (event === 'autoSignIn_failure') {
    //             // redirect to sign in page
    //         }
    //     })
    // }

    async function signIn() {
        try {
            const user = await Auth.signIn(username, password);
            console.log(user);
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUp()
        console.log('submit');
    }

    const handleConfirmationSubmit = (e) => {
        e.preventDefault()
        confirmSignUp()
    }

    const clg = () => {
        console.log(Auth)
    }

    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>Username (E-mail)</label>
                <input type='email' value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                {/* <label>E-Mail</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button>Signup</button>
            </form>

            <h1>Confirmation</h1>
            <form onSubmit={handleConfirmationSubmit}>
                <label>Confirmationcode</label>
                <input type='number' value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} />
                <button>submit</button>
            </form>
            <button onClick={clg}>ConsoleLog Stuff</button>
        </>
    )

}