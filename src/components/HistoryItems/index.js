import './index.css'

const HistoryItem = props => {
  const {historyDetails, key, onDeleteHistoryItem} = props
  const {id, title, logoUrl, domainUrl, timeAccessed} = historyDetails
  console.log(key)
  const onDelete = () => {
    onDeleteHistoryItem(id)
  }
  return (
    <li className="history-item">
      <div className="time-box">
        <p className="time-p">{timeAccessed}</p>
      </div>
      <div className="history">
        <div className="history-text">
          <img src={logoUrl} className="logo-img" alt="domain logo" />
          <div className="history-title">
            <p className="title-p">{title}</p>
            <p className="domain-p">{domainUrl}</p>
          </div>
        </div>
        <div>
          <button
            data-testid="delete"
            onClick={onDelete}
            className="delete-btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-icon"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default HistoryItem
