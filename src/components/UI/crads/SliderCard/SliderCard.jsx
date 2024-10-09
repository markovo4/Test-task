import React from "react";
import PropTypes from "prop-types";
import {imgPaths} from "./imgPaths.js";
import styles from './styles.module.scss';

const SliderCard = ({title, image}) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <img
                className={styles.image}
                src={imgPaths[image.path]}
                alt={image.alt}/>
            <button className={styles.button}>See more</button>
        </div>
    )
}

SliderCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string,
    }).isRequired,
}

export default SliderCard;