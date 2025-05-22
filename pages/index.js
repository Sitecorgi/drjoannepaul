import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import Postcard from "../components/Postcard/postcard";
import RightImage from "../components/Article/right-image";
import {attributes, react as HomeContent} from '../content/home.md';
import Head from 'next/head';

export default class Home extends Component {

  render() {
    return (
      <>
        <Head>
        <title>{attributes.title}</title>
        <meta name="description" content={attributes.description}></meta>
        </Head>
        <div className="main-content">
          <Hero display="desktop" url={"Thomas More  Website Graphic.png"}/>
          <Hero display="mobile" url={"djpheadshot1600.jpg"}/>
          <div className="content-column">
            <div className="left">
              <Article content={<HomeContent/>} />
            </div>
            <div className="right">
              <Postcard attributes={attributes} />
              <RightImage/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
