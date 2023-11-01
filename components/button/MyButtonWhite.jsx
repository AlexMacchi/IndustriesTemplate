import React from "react";
import styles from '../../styles/components/MyButtonWhite.module.css'

export default function MyButtonWhite(props){
    return(
        <a className={styles.button} href={props.url}>{props.text}</a>
    )
}
