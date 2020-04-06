import React, { Component } from 'react';

class CurrentYear extends Component {
    render() {
        return <span>{(new Date().getFullYear())}</span>;
    }
}

export default CurrentYear;