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
          <title>Dr Joanne Paul | About</title>
        </Head>
          <div className="main-content">
            <Hero />
            <div className="content-column">
                <Article content={<AboutContent/>} />
            </div>
          </div>
        </>
      );
    }
  }
  