import React, { Component } from 'react';
import styles from './index.module.styl'
import './index.styl';

class MyTest extends Component {

  testClick = () => {
    console.log(1111)
  }

  render() {
    return (
      <div className={styles.test}>
        test
        <p className='test2' onClick={this.testClick}>test2</p>
      </div>
    );
  }
}

export default MyTest;