import { useState } from 'react';
import classes from './LogIn.module.css';
import { useHistory } from 'react-router';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const LogIn = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const onAddEmail = (evt) => {
        setEnteredEmail(evt.target.value);
    }
    const onAddPass = (evt) => {
        setEnteredPass(evt.target.value);
    }

    const onLogIn = () => {
        history.push('/login');
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPzko-cG8JGt1RGiHG0HtQi5GWGBDcLlY',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPass,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            if (res.ok) {
                setIsLoading(false);
                console.log(res);
                alert('Account created!');
                history.push('/login');
            } else {
                return res.json().then(data => {
                    setIsLoading(false);
                    alert(data.error.message);
                });
            }
        });
    }

    return (
        <section className={classes.auth}>
            {!isLoading && <h1 >SIGN UP</h1>}
            {!isLoading && <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <input type='email' id='email' onChange={onAddEmail} value={enteredEmail} required placeholder="Email" />
                </div>
                <div className={classes.control}>
                    <input type='password' id='password' onChange={onAddPass} value={enteredPass} required placeholder="Password" />
                </div>
                <div className={classes.actions}>
                    <button >Create new account</button>
                    <button
                        type='button'
                        className={classes.toggle} onClick={onLogIn}>
                        Log In
                    </button>
                </div>
            </form>}
            {isLoading && <LoadingSpinner />}
        </section>
    );
}

export default LogIn;