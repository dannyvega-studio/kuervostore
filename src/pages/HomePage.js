import React from 'react';
import Hero from '../components/Hero';
import {Helmet} from "react-helmet";

function HomePage(props) {

    return(
        <div>
            <Helmet>
                <title>Kuervo's Store ~ Figures and Collectibles</title>
            </Helmet>
            <section id="hero" class="hero">
                <div class="hero-contenido">
                    <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
                </div>
            </section>
        </div>
    );
}

export default HomePage;