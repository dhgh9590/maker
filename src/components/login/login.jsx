import React, { useEffect } from 'react';
import Header from "../header/header"
import Footer from "../footer/footer"
import styles from "./login.module.css";
import { useNavigate } from 'react-router-dom';

const Login = ({authService}) => {
    const nativate = useNavigate();
    const goToMaker = (userId) => {
        nativate({
            pathname:"/maker",
            state:{id: userId},
        });
    };
    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid));
    };
    useEffect(()=>{
        authService
        .onAuthChange(user => {
            user && goToMaker(user.uid);
        });
    });
    return (
        <section className={styles.login}>
            <Header></Header>
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}><button className={styles.button} onClick={onLogin}>Google</button></li>
                    <li className={styles.item}><button className={styles.button} onClick={onLogin}>Github</button></li>
                </ul>
            </section>
            <Footer></Footer>
        </section>
    );
}

export default Login;