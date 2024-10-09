import React from "react";
import styles from './styles.module.scss';
import PostsTemplate from "../../UI/PostsTemplate/index.js";

const LatestPosts = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Latest posts</h2>
            <div className={styles.container}>
                <PostsTemplate
                    title={'5 popular Rust web frameworks—which one is right for you?'}
                    subtitle={'From the simplicity of Poem to the full-featured speed of Actix, there\'s a Rust web framework for most every user and need.'}
                    image={{path: 'rating', alt: 'Rating Stars'}}
                    isLeftImg={true}
                />
                <PostsTemplate
                    title={'JAVA VS PHP: WHICH LANGUAGE TO CHOOSE?'}
                    subtitle={'Choosing a programming language can be a major hurdle due to people lacking the necessary information to make the right decision.'}
                    image={{path: 'phpVsJava', alt: 'phpVsJava'}}
                    isLeftImg={false}
                />
                <PostsTemplate
                    title={'Dive into the world of an iOS Developer – career, salary, and skills'}
                    subtitle={'When it comes to developing iOS applications, there are two main programming languages that professionals use: Objective-C and Swift. Objective-C is a C language that has additional object-oriented design. '}
                    image={{path: 'software', alt: 'software'}}
                    isLeftImg={true}
                />
            </div>
        </section>
    )
}

export default LatestPosts;