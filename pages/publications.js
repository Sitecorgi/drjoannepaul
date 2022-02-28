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
          <title>Dr Joanne Paul | Publications</title>
        </Head>
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
  