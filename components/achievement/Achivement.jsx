import React from "react";
import styles from '../../styles/components/Achivement.module.css'
import VideoCard from "../cards/videocard/VideoCardV2";

export default function AchivementSection(){
    return(
        <>        
        <div className={styles.container}>
{/*             <div className={styles.container_heading}>
                <h2 className={styles.heading}>Our Achivement</h2>
            </div> */}
            <div>
                <VideoCard 
                    urlVideo="./video/Automation2.mov"
                    codecVideo="video/mov"
                    title="PLC Software Development"
                    content="We specialize in PLC Programming, design and integration of PLC systems. 
                    Our expeertise covers a wide range of PLC applciations."
                    urlImg="./icons/PLC-Software-White.png"
                />
            </div>
            <div>
                <VideoCard 
                urlVideo="./video/Automation.mp4"
                codecVideo="video/mp4"
                title="Software Engineering"
                content="Maximize your business with leaders' software solutions. Our
                agile developers in Australia unleash your digital
                potential."
                urlImg="./icons/PC-Software-White.png"
                />
            </div>
            <div>
                <VideoCard 
                    urlVideo="./video/Automation2.mov"
                    codecVideo="video/mov"
                    title="PLC Software Development"
                    content="We specialize in PLC Programming, design and integration of PLC systems. 
                    Our expeertise covers a wide range of PLC applciations."
                    urlImg="./icons/PLC-Software-White.png"
                />
            </div>

            <div>
                <VideoCard 
                urlVideo="./video/Automation.mp4"
                codecVideo="video/mp4"
                title="Software Engineering"
                content="Maximize your business with leaders' software solutions. Our
                agile developers in Australia unleash your digital
                potential."
                urlImg="./icons/PC-Software-White.png"
                />
            </div>
            <div>
                <VideoCard 
                    urlVideo="./video/Automation2.mov"
                    codecVideo="video/mov"
                    title="PLC Software Development"
                    content="We specialize in PLC Programming, design and integration of PLC systems. 
                    Our expeertise covers a wide range of PLC applciations."
                    urlImg="./icons/PLC-Software-White.png"
                />
            </div>
            <div>
                <VideoCard 
                urlVideo="./video/Automation.mp4"
                codecVideo="video/mp4"
                title="Software Engineering"
                content="Maximize your business with leaders' software solutions. Our
                agile developers in Australia unleash your digital
                potential."
                urlImg="./icons/PC-Software-White.png"
                />
            </div>
            <div>
                <VideoCard 
                    urlVideo="./video/Automation2.mov"
                    codecVideo="video/mov"
                    title="PLC Software Development"
                    content="We specialize in PLC Programming, design and integration of PLC systems. 
                    Our expeertise covers a wide range of PLC applciations."
                    urlImg="./icons/PLC-Software-White.png"
                />
            </div>
            <div>
                <VideoCard 
                urlVideo="./video/Automation.mp4"
                codecVideo="video/mp4"
                title="Software Engineering"
                content="Maximize your business with leaders' software solutions. Our
                agile developers in Australia unleash your digital
                potential."
                urlImg="./icons/PC-Software-White.png"
                />
            </div>

        </div>
        </>
    )
}