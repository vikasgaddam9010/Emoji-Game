import './index.css'

const WinOrLose = props => {
  const {score, topScore, emojisList, addIdToKnowClickedId, passRestFunction} =
    props

  const getBoolena = addIdToKnowClickedId.length === emojisList.length

  const headStatus = getBoolena ? 'You Won' : 'You Lose'
  const scoreLabel = getBoolena ? 'Best Score' : 'Score'
  const altText = getBoolena ? 'win' : 'lose'
  const imgUrl = getBoolena
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickresetBtn = () => {
    passRestFunction()
  }
  return (
    <div className="win-lose-container">
      <div className="row-container">
        <div className="scor-card">
          <h1>{headStatus}</h1>
          <p className="score-text">{scoreLabel}</p>
          <p className="score">{score}/12</p>
          <button
            data-testid="play again"
            onClick={onClickresetBtn}
            className="button"
          >
            Play Again
          </button>
        </div>
        <img alt="win or lose" src={imgUrl} />
      </div>
    </div>
  )
}

export default WinOrLose
