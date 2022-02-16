import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from "./maker.module.css";

const Maker = ({authService}) => {
    const [cards, setCards] = useState([
        {
            id: "1",
            name: "ellie",
            company: "Samsung",
            theme: "dark",
            title: "Software Engineer",
            email: "dhgh9590@naver.com",
            message: "go for it",
            fileName: "ellie",
            fileURL: null,
        },
        {
            id: "2",
            name: "ellie",
            company: "Samsung",
            theme: "light",
            title: "Software Engineer",
            email: "dhgh9590@naver.com",
            message: "go for it",
            fileName: "ellie",
            fileURL: "ellie.png"
        },
        {
            id: "3",
            name: "ellie",
            company: "Samsung",
            theme: "colorful",
            title: "Software Engineer",
            email: "dhgh9590@naver.com",
            message: "go for it",
            fileName: "ellie",
            fileURL: null,
        }
    ]);
    const nativate = useNavigate();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthChange(user => {
            if(!user){
                nativate("/");
            }
        });
    });

    const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
    };

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}></Header>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard}></Editor>
                <Preview cards={cards}></Preview>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default Maker;