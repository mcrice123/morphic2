import React, { Component } from 'react';

import Layout from '../components/layout';
require('../components/styles/subscribe.css');

export default class SubscribeForm extends Component {
    render() {
        return (
            <Layout>
                <div id="subscribe-form">
                    <h3>Under Construction!</h3>
                    <p>Please come back later.</p>
                    <label>Name:</label>
                    <input />
                    <label>Email:</label>
                    <input />
                    <button>Submit</button>
                </div>
            </Layout>
        );
    }
}