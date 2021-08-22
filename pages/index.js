import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import Postcard from "../components/Postcard/postcard";
import RightImage from "../components/Article/right-image";
import Twitter from "../components/Socials/twitter";
import {attributes, react as HomeContent} from '../content/home.md';

export default class Home extends Component {

  render() {
    return (
      <>
        <div className="main-content">
          <Hero />
          <div className="content-column">
            <div className="left">
              <Article content={<HomeContent/>} />
              <Twitter attributes={attributes} />
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
