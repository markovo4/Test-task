import React from "react";
import styles from './styles.module.scss';

const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span className={styles.title}>Xceed Blog</span>
                <h1 className={styles.blogTitle}>10 Web Design Mistakes and How to Avoid Them</h1>
                <p className={styles.blogSubtitle}>Looking for more daily inspiration? Download Muzli extension — your
                    go-to source for discovering
                    design ideas from world’s top creators!</p>
                <div className={styles.dataContainer}>
                    <span className={styles.data}>13.06, 2024 · 2:15 PM · </span>
                    <span className={styles.link}>
                        <a
                            href="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4">
                        medium.muz.li</a>
                    </span>
                </div>
            </div>
        </section>

    )
}

export default Hero;