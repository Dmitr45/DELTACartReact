import {useCallback, useEffect, useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";



export default function Line(props){ 

let [Dey, setDay] =  useState(()=>{
      const coin = new Date( Date.now()).getDay()+1;
        switch(coin){
            case 1: return "Воскресенье";
            case 2: return "Понедельник";
            case 3: return "Вторник";
            case 4: return "Среда";
            case 5: return "Четверг";
            case 6: return "Пятница";
            case 7: return "Суббота";
        };
        });





const lineName = props.lineName || "Показатель";
const todey = props.todey || "Сейчас";
const yesterday = props.yesterday || "Вчера";
const longAgo = props.longAgo || Dey;




return(<div className={styles.Line}>
<div className={styles.LineName}>{lineName}</div>
<div className={styles.LineTodey}>{todey}</div>
<div className={styles.LineYesterday}>{yesterday}</div>
<div className={styles.LineLongAgo}>{longAgo}</div>
</div>)};