import React from "react";
import styles from '../../styles/components/Subscribe.module.css'
import MyButton from "../button/MyButtonWhite";

export default function Subscribe(){
    return(
<div className={styles.container}>
    <div className={styles.inner}>
        <div className={styles.innerLeft}>
            <h1 className={styles.heading}>Get our latest processes</h1>
            <p className={styles.paragraph}>
                Discover the Power of Progress! Download to Explore Our Latest
                Processes and Projects for a Boost in Business Brilliance
            </p>
        </div>

        <div className={styles.innerRight}>
            <input
                type="email"
                placeholder="What's your email?"
                className={styles.email}
            />
            <MyButton 
                url='#'
                text='DOWNLOAD'
            />
        </div>
    </div>
</div>
    )
}