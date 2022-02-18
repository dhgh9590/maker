import React, { useCallback, useEffect, useState } from 'react';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from "./maker.module.css";
import { useLocation } from 'react-router-dom';

const Maker = ({FileInput,authService ,cardRepository}) => {
    const location = useLocation();
    const locationState = location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(locationState && locationState.id);

    const nativate = useNavigate();
    const onLogout = useCallback(() => {
        authService.logout();
    },[authService]);

    useEffect(()=>{
        if(!userId){
            return
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        return () => { 
            stopSync();
        }
    },[userId, cardRepository]);

    useEffect(()=>{
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            }else{
                nativate("/");
            }
        });
    },[userId, nativate, authService]);

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId,card);
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId,card);
    };



    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}></Header>
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}></Editor>
                <Preview cards={cards}></Preview>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default Maker;