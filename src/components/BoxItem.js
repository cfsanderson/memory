/* import the built-in component function from React */
import React, { Component } from 'react'
/* import styles from the applicable stylesheet folders. Lines __ and __ point to these styles */
import styles from './BoxItem.scss'

/* set up this component using the "class ComponentName extends Component" syntax */
class BoxItem extends Component {

  /* a basic render function required by all React components that will manage each card's actions */
  render () {
    /* Make a 'potato' constant called upClass that is set to an inline if/else statement
    (using a Conditional (ternary) Operator = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    The statement should check the 'isUp' property using this.props.isUp (which should evaluate to either true/false).
    The card's 'isUp' property is set to false by default. If the card has beeen clicked then it will evaluate to true
    and therefore will change the style to 'up'. */
    const upClass = this.props.isUp ? styles.up : styles.down
    /* 'return' a JSX table data cell with onClick and className properties */
    return <td
      /* the onClick property is set to call a function that takes as it's arguement the 'handleClick' function that is
      on each element/component in the App.js render section (e.g. last property on any one of the <BoxItem /> components) */
      onClick={() => this.props.handleClick()}
      /* set the className to a string that is an array made up of 'styles.root' and 'upClass' joined by a space between them */
      className={[styles.root, upClass].join(' ')}>
      {/* add a self-closing img tag here with it's src set to an string of 'this.props.image' which points to the image
      url given to it in App.js component in the App.js render section which would in turn set it to the given postiion in the array of images
      in the images.json file. */}
      <img src={this.props.image} />
      {/* close the element */}
    </td>
  }
}

/* export the component using the "export default ComponentName" syntax. This should be the last thing in the file. */
export default BoxItem

/* Some questions, terms to define, and/or ways to talk about what is happening...
- is this a "Potato"?
-
*/
