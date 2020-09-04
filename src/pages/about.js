import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout';

import AboutImage from "../../static/embed/maria-rice_logo_transparent.png";
require('../components/styles/about.scss');

const About = () => {
    return (
        <Layout>
            <div id="about" className="two-col">
                <div id="text-container" className="col post-body">
                    <h1>Morphic: The Graphic Novel</h1>

                    <p>
                        I will print the completed webcomic as a 200+ page graphic novel and I will hold a crowdfund campaign on Kickstarter to fund the printing by the <strong>end of 2024</strong>. 
                    </p>

                    <h2>Plot</h2>

                    <p>
                        A plea for help from a mysterious girl sidetracks <strong className="no-break">Errie Bright</strong>&#42; and <strong className="no-break">Lane Valerie</strong> on their way to a local festival. Although they expect to see people dressed up as animals for the event, the girls soon realize that the people they meet in the woods that day are <em>not in costume...</em>
                    </p>

                    <p>They are shape-shifting beings called <strong>morphics</strong>.</p>

                    <h2>Background</h2>

                    <p>
                        I wrote the first draft and began drawing lineart pages in 2016. From 2018 onwards, I started uploading pages in full-color and I am still in the process of coloring old pages. 
                    </p>

                    <p>
                        I draw the pages with black fineliner ink pen and use <a href="https://www.gimp.org/" target="_blank">GIMP</a> to add speech bubbles and cell shading.
                    </p>

                    <h2>Author</h2>

                    <p>
                        My name is Maria Rice and I develop websites for a living. In my spare time, I like to read comics and graphic novels. <strong>I am a self-taught artist, with years of experience drawing in traditional ink and <a href="https://www.gimp.org/" target="_blank">GIMP</a>.</strong> 
                    </p>

                    <p>
                        <a href="http://eepurl.com/g8TzPb" target="_blank">Subscribe to my mailing list</a> to recieve notifications about the future <em>Morphic</em> Kickstarter!
                    </p>

                    <p>
                        You can also <a href="https://www.facebook.com/MorphicGraphicNovel/" target="_blank">like and follow "Morphic" on Facebook!</a>
                    </p>

                    <hr/>

                    <p>
                        <small>
                            &#42; <strong>"Errie"</strong> is pronounced like the word <strong>"airy"</strong> (<em>eh·ree</em>). Short for "Erica".
                        </small>
                    </p>

                </div>
                <div className="col">
                    <img src={AboutImage} alt="Errie and the Vines" />
                </div>
            </div>
        </Layout>
    );
};

export default About;