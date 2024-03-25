import './index.css'

const EachEmojiItem = props => {
  const {each, getIdOfEachItem} = props
  const {id, emojiName, emojiUrl} = each

  const passIdOfEachItem = () => {
    const {id} = each
    getIdOfEachItem(id)
  }
  return (
    <li className="li-container">
      <button onClick={passIdOfEachItem} className="btn">
        <img src={emojiUrl} alt={emojiName} />
        <h1>{id}</h1>
      </button>
    </li>
  )
}

export default EachEmojiItem
