import React, { Component } from 'react'
import styles from './BoxItem.scss'

class BoxItem extends Component {

  render () {
    const upClass = this.props.isUp ? styles.up : styles.down
    return <td
      onClick={() => this.props.handleClick()}
      className={[styles.root, upClass].join(' ')}>
      <img src={this.props.image} />
    </td>
  }

}

export default BoxItem
