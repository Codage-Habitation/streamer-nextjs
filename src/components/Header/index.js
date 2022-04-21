import React from 'react';
import styles from '../Header/header.module.css';

export default function Header() {
    return (
        <div className={styles.headersection}>
            <div className="nav">
                 <div className={styles.topnav}>
                    <div className={styles.logopart}>
                        <a href='#'><h1>STREAMER</h1></a>
                    </div>
                    <div className={styles.menupart}>
                         <a href='#'><img src='./images/menu.png' /></a>
                    </div>
                 </div>
            </div>
            <div className="heading" data-scroll data-scroll-id="black">
                <div className={styles.headertext}>
                    <h6>WE BELIEVE THAT SPORTS AND ENTERTAINMENT HAVE THE POWER TO IMPACT HUMAN BEHAVIOUR</h6>
                </div>
            </div>
            <div className="video_section" data-scroll>
                <video autoPlay loop muted width="100%" height="100%">
                    <source src='./images/video.mp4' />
                </video>
            </div>
        </div>
    );
}
