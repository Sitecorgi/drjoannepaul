import { Component } from "react";
import Hero from "../components/Hero/hero";
import Article from "../components/Article/article";
import {attributes, react as ContactContent} from '../content/contact.md'
import Head from 'next/head';

export default class Contact extends Component {

    render() {
      return (
        <>
        <Head>
          <title>Dr Joanne Paul | Contact</title>
        </Head>
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
  