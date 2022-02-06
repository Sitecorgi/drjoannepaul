import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import {attributes, react as PublicationsContent} from '../content/publications.md'

export default class Publications extends Component {

    render() {
      return (
        <>
          <div className="main-content">
            <Hero />
            <div className="content-column">
                <Article content={<PublicationsContent/>} />
            </div>
          </div>
        </>
      );
    }
  }
  