import React, { Component } from "react";

export default class BackToTop extends Component {

    constructor() {
        super();
        this.state = {
            showArrow: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
       /* if (window.scrollTop() > 300) {         // Scrolltop doesn't work!
            this.setState({ showArrow: true });
        } else {
            this.setState({ showArrow: false });
        }*/
    }

    render() {
        return (
            <a id="back-to-top" className={this.showArrow ? 'show' : ''}></a>
        );
    }
}