import React from "react";
import styles from '../../styles/components/Description.module.css'
import MyButton from "../button/MyButtonBlue";

export default function DescriptionSection(props){
    return(
        <div className={styles.container}>
            <div className={`${styles.container_contents} ${styles.content_img}`}>
                <img src={props.urlImg}></img>
            </div> 
            <div className={styles.container_contents}>
                <p className={styles.first_paragraph}>{props.first_paragraph}</p>
                <br></br>
                <p className={styles.second_paragraph}>{props.second_paragraph}</p>
                <div className={styles.button}>
                    <MyButton 
                        url='#'
                        text='CONTACT US'
                    />
                </div>
            </div> 
        </div>
    )
}