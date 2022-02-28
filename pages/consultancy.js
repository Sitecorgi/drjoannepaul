import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import {attributes, react as ConsultancyContent} from '../content/consultancy.md'
import Head from 'next/head';

export default class Consultancy extends Component {

    render() {
      return (
        <>
        <Head>
        <title>Dr Joanne Paul | {attributes.title}</title>
        <meta name="description" content={attributes.description}></meta>
        </Head>
          <div className="main-content">
            <Hero />
            <div className="content-column">
                <Article content={<ConsultancyContent/>} />
            </div>
          </div>
        </>
      );
    }
  }
  