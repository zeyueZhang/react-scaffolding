import React, { Component } from 'react';
import styles from './index.module.styl'
import './index.styl';
import { connect } from 'react-redux'
import reducers from '@/reducers/example.js'
import {
  inc,
  dec
} from '@/actions/example.js';

class MyTest extends Component {

  render() {
    const{ value, inc, dec } = this.props
    return (
      <div className={styles.test}>
        <h1>{value}</h1>
        <button onClick={inc} className={styles.incIcon}>+</button>
        <button onClick={dec} className={styles.decIcon}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.example.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch({type: 'INC'}),
    dec: () => dispatch({type: 'DEC'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTest)