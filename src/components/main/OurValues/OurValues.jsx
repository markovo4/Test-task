import styles from './styles.module.scss';
import React from "react";
import ValuesCard from "../../UI/crads/ValuesCard/index.js";

const OurValues = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Our Values</h2>
            <div className={styles.container}>
                <ValuesCard
                    title={'Courageous'}
                    description={'We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.'}
                    image={{path: 'p1', alt: 'Courageous'}}
                />

                <ValuesCard
                    title={'Cheerfulness'}
                    description={'We inject energy, positivity and fun into every task - thi is our approach. We strive to actively engage and inspire our colleagues, clients an communities - this is the foundation of our work.'}
                    image={{path: 'p2', alt: 'Cheerfulness'}}
                />

                <ValuesCard
                    title={'Empowerment'}
                    description={'We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.'}
                    image={{path: 'p3', alt: 'Empowerment'}}
                />

                <ValuesCard
                    title={'Empowerment'}
                    description={'We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.'}
                    image={{path: 'p4', alt: 'Empowerment'}}
                />

                <ValuesCard
                    title={'Courageous'}
                    description={'We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.'}
                    image={{path: 'p5', alt: 'Courageous'}}
                />

                <ValuesCard
                    title={'Cheerfulness'}
                    description={'We inject energy, positivity and fun into every task - thi is our approach. We strive to actively engage and inspire our colleagues, clients an communities - this is the foundation of our work.'}
                    image={{path: 'p6', alt: 'Cheerfulness'}}
                />

                <ValuesCard
                    title={'Empowerment'}
                    description={'We take responsibility for solving problems and hold ourselves fiercely accountable for success. This commitment to accountability is both individual and collective.'}
                    image={{path: 'p7', alt: 'Empowerment'}}
                />

                <ValuesCard
                    title={'Courageous'}
                    description={'We face challenges with determination, creativity and unwavering commitment. Bringing authenticity to our work every day is a principle we consistently follow.'}
                    image={{path: 'p8', alt: 'Courageous'}}
                />

                <ValuesCard
                    title={'Cheerfulness'}
                    description={'We inject energy, positivity and fun into every task - thi is our approach. We strive to actively engage and inspire our colleagues, clients an communities - this is the foundation of our work.'}
                    image={{path: 'p9', alt: 'Cheerfulness'}}
                />
            </div>
        </section>
    )
}

export default OurValues;