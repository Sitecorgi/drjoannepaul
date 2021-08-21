import { Component } from "react";
import Hero from "../components/Hero/hero";
import Intro from "../components/Article/intro";
import Postcard from "../components/Postcard/postcard";
import LatestPublication from "../components/Article/latest-publication";
import RightImage from "../components/Article/right-image";
import Twitter from "../components/Socials/twitter";
import {attributes, react as HomeContent} from '../content/home.md';
export default class Home extends Component {

  render() {
    let {intro} = attributes;
    return (
      <>
        <div className="main-content">
          <Hero />
          <div className="two-column">
            <div className="left">
              <Intro content={intro} />
              <LatestPublication/>
              <Twitter/>
            </div>
            <div className="right">
              <Postcard/>
              <RightImage/>
            </div>
          </div>
        </div>
      </>
    );
  }
}
