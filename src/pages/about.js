import React from 'react';

import Layout from '../components/layout';

import AboutImage from "../../static/misc/main/errie.jpg";
require('../components/styles/about.css');

const About = () => {
    return (
        <Layout>
            <div id="about">
                <div id="text-container">
                    <h1>Morphic</h1>
                    <h3>A Graphic Novel Series by Maria Rice</h3>
                    <p>
                    <em>Change comes quickly to Errie's home town when she stumbles into a quarrel 
                        among immortal beings previously unknown to humans-- </em> <b>shape-shifters called <em>morphics</em>,
                        who take the form of the animals.</b>
                    </p>
                    <p>
                        <b>My name is Maria Rice</b> and I have been uploading pages for "Morphic" since August of 2016. 
                        I am a web developer by trade with a passion for writing and drawing.
                    </p>
                    <p>
                        "Morphic" is intended to be a <b>color-printed series of 3 books</b> when it is finished. 
                        As of writing this description, it is currently in Book 2. 
                        While continuing to upload new colored pages, I am working to update older, uncolored pages. 
                         <b> I draw the pages with black ink pens and color them digitally 
                            with <a target="_blank" href="https://www.gimp.org/">GIMP</a>.</b>
                    </p>
                    <p>

                    </p>
                </div>
                <div id="img-container">
                    <img src={AboutImage} alt="Errie and the Vines" />
                </div>
            </div>
        </Layout>
    );
};

export default About;