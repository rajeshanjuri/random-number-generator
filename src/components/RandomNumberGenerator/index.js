// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  // get the random number

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    this.setState(prevState => {
      const randomNumber = this.getRandomNumber()
      console.log(`the random number generator button is ${prevState.count}`)
      return {count: prevState.count + randomNumber}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
