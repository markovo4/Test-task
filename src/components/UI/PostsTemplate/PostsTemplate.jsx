import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';
import {imgPaths} from './imgPaths.js';

const PostsTemplate = ({title, subtitle, image, isLeftImg}) => {
    return (
        <React.Fragment>
            {isLeftImg ? (
                <article className={styles.container}>
                    <div className={styles.description}>
                        <h3 className={styles.title}>{title}</h3>
                        <span className={styles.subtitle}>{subtitle}</span>
                    </div>
                    <img
                        src={imgPaths[image.path]}
                        alt={image.alt}
                    />
                </article>
            ) : (
                <article className={styles.container}>
                    <img
                        src={imgPaths[image.path]}
                        alt={image.alt}
                    />
                    <div className={styles.description}>
                        <h3 className={styles.title}>{title}</h3>
                        <span className={styles.subtitle}>{subtitle}</span>
                    </div>
                </article>
            )}
        </React.Fragment>
    );
}

PostsTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    image: PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string, // Optional alt text
    }).isRequired,
    isLeftImg: PropTypes.bool.isRequired,
};

export default PostsTemplate;
