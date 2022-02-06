import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import {attributes, react as ContactContent} from '../content/contact.md'

export default class Contact extends Component {

    render() {
      return (
        <>
          <div className="main-content">
            <Hero />
            <div className="content-column">
                <Article content={<ContactContent/>} />
            </div>
          </div>
        </>
      );
    }
  }
  