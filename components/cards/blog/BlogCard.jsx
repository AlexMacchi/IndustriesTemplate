import React from "react";
import styles from '../../../styles/components/Blog.module.css'

export default function Blog_Card(props){
    return(
            <div className={styles.testimonialBox}>
                <img src="./images/quote.png" className={styles.quote} />
                <div className={styles.content}>
                    <p>{props.paragraph}</p>
                </div>
                <div className={styles.details}>
                    <div className={styles.imgBx}>
                        <img src={props.image} />
                    </div>
                    <h3>{props.title}<br></br><span>{props.workingPosition}</span></h3>
                </div>
            </div>
    )
}