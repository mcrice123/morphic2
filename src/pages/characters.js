import React, { Component } from 'react';

import Layout from '../components/layout';
export default class Characters extends Component {

    renderList() {
        const testList = ["a", "b", "c"];
        return (
            <ul>
              {
                testList.map(item => {
                  return <li>{item}</li>;
                })
              }
            </ul>
        );
    }

    render() {
      return (
        <Layout>
            <h1>Characters</h1>
            {
              this.renderList()
            }
        </Layout>
    );
  }
}
