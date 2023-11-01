"use client"
import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../../../styles/components/VideoCardV2.module.css"


export default function VideoCard(props){
    return(
       <div className={styles.containter}>
            <div className={styles.box_video}>
                <video src={props.urlVideo} typeof={props.codecVideo} autoPlay loop muted></video>
            </div>
            <div className={styles.box_text}>
                <h2>
                    {props.title}
                </h2>
                <br></br>
                <p>
                    {props.content}      
                </p>
            </div>
                <button className={styles.buttom_read}>Read more</button>
            <div className={styles.circle}>
                <img src={props.urlImg}></img>
            </div>
       </div>
    )
}