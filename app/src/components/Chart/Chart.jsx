import {useState} from 'react';
import styles from './styles.module.css';
import "../../styles.css";
import {useAppContext} from  "../../context/ContextProvider";
import Line from './Line';



export default function Chart(){ 

return(<div className={styles.Cart}>
<Line/>

</div>)};