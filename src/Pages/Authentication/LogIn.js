import { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

import LoadingSpinner from '../../components/UI/LoadingSpinner';
import classes from './LogIn.module.css';

const LogIn = () => {
    const dispatch = useDispatch();
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

    const onSignUp = () => {
        history.push('/sign-up');
    }

    let isLoggedIn = false;
    const submitHandler = (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPzko-cG8JGt1RGiHG0HtQi5GWGBDcLlY',
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
                setIsLoading(true);
                console.log(res);
                isLoggedIn = true;
                dispatch(authActions.setUserData({
                    userId: enteredEmail,
                    isLoggedIn
                }));
                history.push('/home');
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
            {!isLoading && <h1 >LOG IN</h1>}
            {!isLoading &&
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <input type='email' id='email' onChange={onAddEmail} value={enteredEmail} required placeholder="Email" />
                    </div>
                    <div className={classes.control}>
                        <input type='password' id='password' onChange={onAddPass} value={enteredPass} required placeholder="Password" />
                    </div>
                    <div className={classes.actions}>
                        <button >Login</button>
                        <button
                            type='button'
                            className={classes.toggle}
                            onClick={onSignUp}>
                            Create new account
                    </button>
                    </div>
                </form>}
            {isLoading && <LoadingSpinner />}
        </section>
    );
}

export default LogIn;