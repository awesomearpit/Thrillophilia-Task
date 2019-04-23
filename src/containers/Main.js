import React, { Component } from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import BodyInfo from '../components/BodyInfo';
import Footer from '../components/Footer';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <BodyInfo />
        <Footer />
      </div>
    )
  }
}

export default Main;
