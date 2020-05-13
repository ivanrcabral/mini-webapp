import React from 'react';
import Header from '../Header/header'
import Movies from './movies'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Movies history={this.props.history}/>
      </div>)
  }
}

export default Home;

