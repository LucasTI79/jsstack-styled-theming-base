import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';
import { render } from 'react-dom';

export default class Layout extends React.Component {
  componentDidMount(){
    document.addEventListener('scroll', this.handleScrool)
  }
  
  componentWillUnmount(){
    // console.log('componentWillUnmount...');
    document.removeEventListener('scroll', this.handleScrool)
  }

  handleScrool = () => {
    console.log('scroleed...');
  }
  
  render(){
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
