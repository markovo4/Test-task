import React from "react";
import {blogs} from "./blogs.js";
import styles from './styles.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../../UI/crads/SliderCard";
import ArrowRight from "../../../assets/svg/ArrowRight.jsx";
import ArrowLeft from "../../../assets/svg/ArrowLeft.jsx"; // Fix the typo in the path

const BlogsCollection = () => {
    function SampleNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <button
                className={`${styles.button} ${className}`}
                style={{...style, display: "flex", justifyContent: "center", alignItems: "center"}}
                onClick={onClick}
            >
                <ArrowRight/> {/* Replace with your right arrow icon or component */}
            </button>
        );
    }

    function SamplePrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <button
                className={`${styles.button} ${className}`}
                style={{...style, display: "flex", justifyContent: "center", alignItems: "center"}}
                onClick={onClick}
            >
                <ArrowLeft/> {/* Replace with your left arrow icon or component */}
            </button>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: true,
        nextArrow: <SampleNextArrow/>, // Use the styled next arrow
        prevArrow: <SamplePrevArrow/>, // Use the styled previous arrow
    };

    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <Slider {...settings}>
                    {blogs.map((blog, index) => (
                        <div key={index} className={styles.sliderItem}>
                            <SliderCard
                                title={blog.title}
                                image={blog.image}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default BlogsCollection;
