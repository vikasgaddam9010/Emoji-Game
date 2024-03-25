import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  gameEndedNavBar = () => {
    return (
      <div className="main-container">
        <div className="image-and-emoji-head-container">
          <img
            className="image margin-right"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1>Emoji Game</h1>
        </div>
        <div className="image-and-emoji-head-container">
          <p className="margin-right">Score: {this.props.score}</p>
          <p>Top Score: {this.props.topScore}</p>
        </div>
      </div>
    )
  }
  gameStartedNavBar = () => {
    return (
      <div className="main-container">
        <div className="image-and-emoji-head-container">
          <img
            className="image margin-right"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          />
          <h1>Emoji Game</h1>
        </div>
      </div>
    )
  }
  render() {
    const {isGameEnded, score, topScore} = this.props
    return (
      <div className="nav-container">
        {isGameEnded ? this.gameStartedNavBar() : this.gameEndedNavBar()}
      </div>
    )
  }
}

export default NavBar
