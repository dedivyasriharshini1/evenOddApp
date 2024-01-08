import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncreament = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <h1 className="heading1">Count {count}</h1>
        <p className="heading2">Count is {displayText}</p>
        <button type="button" className="btn" onClick={this.onClickIncreament}>
          Increment
        </button>
        <p className="paragraph">*Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
