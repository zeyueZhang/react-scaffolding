import React, { Component } from 'react'
import styles from './index.module.styl'

class NotFound extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.cover}></div>
        <h3 className={styles.tip}>咦？出错了...</h3>
      </div>
    )
  }
}

export default NotFound
