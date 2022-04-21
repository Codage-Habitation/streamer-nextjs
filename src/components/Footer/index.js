import React from 'react';
import styles from '../Footer/footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerlinks}>
                    <ul>
                        <li><a href='#'>music.</a></li>
                        <li><a href='#'>culture.</a></li>
                        <li><a href='#'>space.</a></li>
                    </ul>
                </div>
                <div className={styles.footermenus}>
                   <ul>
                       <li><a href='#'>Home</a></li>
                       <li><a href='#'>About</a></li>
                       <li><a href='#'>Venues</a></li>
                       <li><a href='#'>Contact</a></li>
                   </ul>
                </div>
            </div>
            <div className={styles.footerhero}>
                  <h1>STREAMER</h1>
            </div>
        </div>
    );
}
