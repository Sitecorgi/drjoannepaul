import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import Head from 'next/head';
import {attributes, react as AboutContent} from '../content/about.md'

export default class About extends Component {

    render() {
      return (
        <>
        <Head>
          <title>Dr Joanne Paul | {attributes.title}</title>
          <meta name="description" content={attributes.description}></meta>
        </Head>
          <div className="main-content">
          <Hero display="desktop" url={"cover.jpg"}/>
          <Hero display="mobile" url={"jo_headshot2.jpeg"}/>
            <div className="content-column">
                <Article content={<AboutContent/>} />
            </div>
          </div>
        </>
      );
    }
  }
  