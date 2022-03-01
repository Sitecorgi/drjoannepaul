import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import {attributes, react as PublicationsContent} from '../content/publications.md'
import Head from 'next/head';

export default class Publications extends Component {

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
                <Article content={<PublicationsContent/>} />
            </div>
          </div>
        </>
      );
    }
  }
  