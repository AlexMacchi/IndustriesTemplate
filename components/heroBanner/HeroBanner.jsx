import React from "react";
import styles from '../../styles/components/HeroBanner.module.css'
import MyButton from "../button/MyButtonWhite";

export default function HeroBanner(props){
    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>{props.heading}</h1>
            <p className={styles.locations}>
                    SYDNEY | MELBOURNE | BRISBANE | ADELAIDE | PERTH
            </p>
            <hr className={styles.yellowRow} />
            <p className={styles.paragraph}>{props.paragraph}</p>
            {/* <button className={styles.button}>{props.button_text}</button> */}
            <MyButton 
                url='#'
                text={props.button_text}
            />
        </div>
    )
}