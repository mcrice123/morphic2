import React, { Component } from 'react';
import {StaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import Layout from '../components/layout';
import TabList from '../components/tablist';

require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
require('../components/styles/character-bio.scss');

export default class Characters extends Component {

  constructor() {
    super();

    this.state = {
        tabIndex: 0,
        tabItems: [],
        allCategories: ["Book 1", "Book 2"],
    };
    this.generateTabItems = this.generateTabItems.bind(this);
    this.changeTabs = this.changeTabs.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  generateTabItems() {
    const items = this.state.allCategories.map((cat, index) => {
      return {
        value: cat.toLowerCase().replace(/\s+/g, ""),
        label: cat,
        onClick: () => this.changeTabs(index),
        selected: this.state.tabIndex === index,
      };
    });
    return items;
  }

  changeTabs(index) {
    this.setState({ tabIndex: index });
  }

  renderList() {
    return (
      <StaticQuery
        query={graphql`
          query characters {
            allMarkdownRemark (
              filter: {frontmatter: {type: { eq: "characters"}}},
              sort: {fields: [frontmatter___date], order: ASC},
            ){
              edges {
                node {
                  html
                    frontmatter {
                      type
                      name
                      image
                      categories
                      color
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `}
        render={
          data => {
            const slides = data.allMarkdownRemark.edges.map(
              (item) => {
                return {
                  name: item.node.frontmatter.name,
                  image: item.node.frontmatter.image,
                  categories: item.node.frontmatter.categories,
                  color: item.node.frontmatter.color,
                  slug: item.node.fields.slug
                };
              }
            );
            const settings = {
              dots: false,
              infinite: true,
              speed: 500,
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: 
                [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      dots: false,
                      infinite: true,
                      speed: 500,
                      arrows: true,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 750,
                    settings: {
                      slidesToShow: 1,
                      dots: false,
                      infinite: true,
                      speed: 500,
                      arrows: true,
                      slidesToScroll: 1,
                    }
                  },
                ]
            }
            return ( 
              <div id={"cast"}>
                <Slider {...settings}>
                  {slides
                    .filter(edge => {
                      const { categories } = edge;
                      const currentTab = (this.state.allCategories[this.state.tabIndex]).toLowerCase().replace(/\s+/g, "");
                      if (categories.includes(currentTab)) {
                        return edge;
                      }
                      else return null;
                    })
                    .map(slide => {
                      return (
                        <div className="slide" key={slide.slug}>
                          <div className="bottom" style={{background: 'linear-gradient(to bottom, #fff, ' + slide.color + ', #000)'}}></div>
                          <div className="top" style={{background: 'radial-gradient(circle, rgba(255,255,255,.85) 0%, rgba(255,255,255,.5) 60%, rgba(255,255,255,0) 100%)'}}>
                            <img src={slide.image} alt={slide.name} />
                            <h1>{slide.name}</h1>
                          </div>
                        </div>
                      );
                    })
                  }
                </Slider>
              </div>
            );
          }
        }
      />
    );
  }
  render() {
    return (
      <Layout
        title="Cast"
        description={[
          "Work in Progress: Come back later to see a glimpse of each of the characters in the webcomic, Morphic!",
        ]}
        keywords={[
          "characters",
          "cast",
          "glimpse",
          "slideshow",
        ]}
      >
        <div className="post-body">
          <h1>Characters</h1>
          <TabList items={this.generateTabItems()} />
          {this.renderList()}
        </div>
      </Layout>
    );
  }
}
