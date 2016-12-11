/* bring in the magic Component object from react and set it to the keyword React */
import React, { Component } from 'react'
/* bring in the related stylesheet by associating it with an scss file */
import styles from './App.scss'
/* bring in the stylesheet from any other scss files that have to do with elements represented here */
import BoxItem from './BoxItem'

// bring in any images or files stored in a json file
import images from '../images.json'

// start this component function
class App extends Component {

  // set the initial state of the app using this function
  constructor () {
    // set the hierarchy of this initial state to it's superior
    super()
    // explicitly say what the initial state of the app should be with this initial function
    this.state = {
      // use keys and set their initial values (3x)
      matched: [],
      picks: [],
      won: false
    }
  }
  // this function sets what happens when the cards are chosen
  choose (card) {
    /* an if statement that says "if the 'picks length state' is 2
    OR the 'matched state' includes the original card
    then return/bail out of the function" */
    if (this.state.picks.length === 2 || this.state.matched.includes(card)) { return }
    /* at this point, if the above if test failed,
    then set the state to what is in the current picks array */
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      if (this.state.picks.length === 2) {
        this.check()
      }
    })
  }

  check () {
    const picks = this.state.picks
    if (images[picks[0]] === images[picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...picks],
        picks: []
      }, () => {
        if (this.state.matched.length === images.length) {
          this.setState({
            won: true
          })
        }
      })
    }
    setTimeout(() => {
      this.setState({ picks: [] })
    }, 2000)
  }

  // this is the basic function for every React component.
  render () {
    // set constants for primary states of the actionable items
    const picks = this.state.picks
    const matched = this.state.matched
    // start laying out 'returning' the basic JSX for the page
    return <div>
      {/* - this section must be wrapped in a div.
          - elements can be set with inline functions that determine their state dependant on conditions (if/else) */}
      {/* a title or message ba */}
      <h1>{this.state.won ? 'YOU WIN!!!' : 'Bill MEMEurray'}</h1>
      {/* the basic gameboard */}
      <section>
        {/* a table */}
        <table>
          {/* table rows */}
          <tr>
            {/* The cards go here which will appear as components inside self-closing JSX angle brackets.
            These items are individual expressions of the components set up in the other component file. */}
            {/* Each item/element/component-expression contains...
              - the name of the component which acts as a self-closing JSX element
              - image class that is set to a function that calls a position in the array of images contained in the referenced
                .json file where the images are located.
              -
              - */}
            <BoxItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
            <BoxItem image={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
            <BoxItem image={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
            <BoxItem image={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
          <tr>
            <BoxItem image={images[4]} isUp={picks.includes(4) || matched.includes(4)} handleClick={() => this.choose(4)} />
            <BoxItem image={images[5]} isUp={picks.includes(5) || matched.includes(5)} handleClick={() => this.choose(5)} />
            <BoxItem image={images[6]} isUp={picks.includes(6) || matched.includes(6)} handleClick={() => this.choose(6)} />
            <BoxItem image={images[7]} isUp={picks.includes(7) || matched.includes(7)} handleClick={() => this.choose(7)} />
          </tr>
          <tr>
            <BoxItem image={images[8]} isUp={picks.includes(8) || matched.includes(8)} handleClick={() => this.choose(8)} />
            <BoxItem image={images[9]} isUp={picks.includes(9) || matched.includes(9)} handleClick={() => this.choose(9)} />
            <BoxItem image={images[10]} isUp={picks.includes(10) || matched.includes(10)} handleClick={() => this.choose(10)} />
            <BoxItem image={images[11]} isUp={picks.includes(11) || matched.includes(11)} handleClick={() => this.choose(11)} />
          </tr>
          <tr>
            <BoxItem image={images[12]} isUp={picks.includes(12) || matched.includes(12)} handleClick={() => this.choose(12)} />
            <BoxItem image={images[13]} isUp={picks.includes(13) || matched.includes(13)} handleClick={() => this.choose(13)} />
            <BoxItem image={images[14]} isUp={picks.includes(14) || matched.includes(14)} handleClick={() => this.choose(14)} />
            <BoxItem image={images[15]} isUp={picks.includes(15) || matched.includes(15)} handleClick={() => this.choose(15)} />
          </tr>
        </table>
      </section>
    </div>
  }
}

// export this component
export default App
