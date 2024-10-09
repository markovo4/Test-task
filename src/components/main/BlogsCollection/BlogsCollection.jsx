import React from "react";
import SliderCard from "../../UI/crads/SliderCard/index.js";
import {blogs} from "./blogs.js";
import styles from './styles.module.scss';
import ArrowLeft from "../../../assets/svg/ArrowLeft.jsx";
import ArrowRight from "../../../assets/svg/ArrowRight.jsx";

const BlogsCollection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {blogs.map((blog, index) => {
                        return (
                            <SliderCard
                                title={blog.title}
                                image={blog.image}
                                key={index}
                            />
                        )
                    })}
                </div>

                <div className={styles.buttonGroup}>
                    <button className={styles.button}>
                        <ArrowLeft/>
                    </button>
                    <button className={styles.button}>
                        <ArrowRight/>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default BlogsCollection;