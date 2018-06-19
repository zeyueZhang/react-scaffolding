import React, { Component } from 'react';
import styles from './index.module.styl'
import './index.styl';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import routesMap from '@/router/routesMap'
import logo from '@/logo.svg';

import {
  inc,
  dec
} from '@/actions/example.js';

class MyTest extends Component {

  render() {
    const{ value, inc, dec } = this.props
    return (
      <div className={styles.test}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{value}</h1>
        <button onClick={inc} className={styles.incIcon}>+</button>
        <button onClick={dec} className={styles.decIcon}>-</button>
        <div><Link to={routesMap.a}>A页面</Link></div>
        <div><Link to={routesMap.b}>B页面</Link></div>

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