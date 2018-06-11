import React, { Component } from 'react';
import styles from './index.module.styl'
import './index.styl';

class MyTest extends Component {
  render() {
    return (
      <div className={styles.test}>
        test
        <p className='test2'>test2</p>
      </div>
    );
  }
}

export default MyTest;