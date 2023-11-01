"use client"
import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "../../../styles/components/VideoCard.module.css"


export default function VideoCard(props){
    const ref = useRef(null);
    const refVideo = useRef(null);

    var divWidth = ref.current ? ref.current.offsetWidth : 0;
    var divHeightVideo = refVideo.current ? refVideo.current.offsetHeight : 0;

    const [fontSizeH2, setfontSizeH2] = useState(divWidth/16)
    const [fontSizeP, setfontSizeP] = useState(divWidth/28)
    const [fontSizeButton, setfontSizeButton] = useState(divWidth/24)
    const [heightVideo, setheightVideo] = useState(divHeightVideo)
     

    var H2Style= {
        fontSize: fontSizeH2 +'px'
    };

    var pStyle= {
        fontSize: fontSizeP +'px'
    };

    var ButtonStyle= {
        fontSize: fontSizeButton +'px'
    };


    useEffect(() => {
      console.log(divHeightVideo);
      divWidth = ref.current ? ref.current.offsetWidth : 0;
      divHeightVideo = refVideo.current ? refVideo.current.offsetHeight : 0;
      setfontSizeH2(divWidth/16);
      setfontSizeP(divWidth/28);
      setfontSizeButton(divWidth/24);
      setheightVideo(divHeightVideo);
    }, [ref.current],[refVideo.current]);


    return(
       <div className={styles.containter}>
            <div className={styles.box_video} ref={refVideo}>
                <video src={props.urlVideo} typeof={props.codecVideo} autoPlay loop muted height={heightVideo}></video>
            </div>
            <div className={styles.box_text} ref={ref}>
                <h2 style={H2Style}>
                    {props.title}
                </h2>
                <br></br>
                <p style={pStyle}>
                    {props.content}      
                </p>
            </div>
                <button className={styles.buttom_read} style={ButtonStyle}>Read more</button>
            <div className={styles.circle}>
                <img src={props.urlImg}></img>
            </div>
       </div>
    )
}