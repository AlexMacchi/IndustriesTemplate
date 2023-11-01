import React from "react";
import styles from '../../styles/components/MyButtonBlue.module.css'

export default function MyButtonBlue(props){
    return(
        <a className={styles.button} href={props.url}>{props.text}</a>
    )
}
