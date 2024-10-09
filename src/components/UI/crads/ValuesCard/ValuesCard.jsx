import React from "react";
import styles from './styles.module.scss'
import {imgPaths} from "./imgPaths.js";
import PropTypes from "prop-types";

const ValuesCard = ({title, image, description}) => {
    return (
        <div className={styles.backColor}>
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
                <img
                    className={styles.img}
                    src={imgPaths[image.path]}
                    alt={image.alt}
                />
                <p className={styles.description}>{description}</p>
                <button className={styles.button}>
                <span className={styles.buttonText}>
                    View more
                </span>
                </button>
            </div>
        </div>

    )
}

ValuesCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string, // Optional alt text
    }).isRequired,
    description: PropTypes.string.isRequired
}

export default ValuesCard