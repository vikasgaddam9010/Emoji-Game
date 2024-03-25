/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

*/
import {Component} from 'react'
import NavBar from '../NavBar'
import EachEmojiItem from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isGameEnded: false,
    score: 0,
    topScore: 0,
    emojisList: this.props.emojisList,
    addIdToKnowClickedId: [],
  }

  getIdOfEachItem = id => {
    const {addIdToKnowClickedId, emojisList, topScore, score, isGameEnded} =
      this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      const {addIdToKnowClickedId, score} = this.state
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const reShuffledEmojisList = shuffledEmojisList()

    this.setState({emojisList: reShuffledEmojisList})

    const idChecker = addIdToKnowClickedId.includes(id)
    if (idChecker) {
      return this.setState({isGameEnded: true})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    }

    this.setState(prevState => ({
      addIdToKnowClickedId: [...prevState.addIdToKnowClickedId, id],
    }))

    const lengthChecker = addIdToKnowClickedId.length + 1 === emojisList.length
    if (lengthChecker) {
      this.setState({isGameEnded: true})
    }
  }

  returnedUlList = () => {
    const {emojisList} = this.props
    return (
      <ul className="ul-container">
        {emojisList.map(each => (
          <EachEmojiItem
            key={each.id}
            each={each}
            getIdOfEachItem={this.getIdOfEachItem}
          />
        ))}
      </ul>
    )
  }
  passRestFunction = () => {
    const {score, topScore, emojisList, addIdToKnowClickedId} = this.state

    if (topScore <= score) {
      this.setState({topScore: score})
    }

    this.setState({addIdToKnowClickedId: [], score: 0})

    this.isGameEnd(false)
  }
  isGameEnd = value => {
    this.setState({isGameEnded: value})
  }

  render() {
    const {isGameEnded, score, topScore, emojisList, addIdToKnowClickedId} =
      this.state

    return (
      <div>
        <NavBar isGameEnded={isGameEnded} score={score} topScore={topScore} />
        {isGameEnded ? (
          <WinOrLose
            emojisList={emojisList}
            addIdToKnowClickedId={addIdToKnowClickedId}
            score={score}
            topScore={topScore}
            passRestFunction={this.passRestFunction}
          />
        ) : (
          this.returnedUlList()
        )}
      </div>
    )
  }
}

export default EmojiGame
