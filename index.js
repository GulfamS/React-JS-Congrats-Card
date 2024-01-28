const element = (
  <div className='bg-container'>
    <div>
      <h1 className='greeting'>Congratulations</h1>
    </div>
    <div className='card-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='profile-img'
      />
      <p className='profile-name'> Kiran V</p>
      <p className='profile-description'>
        Vishnu Institute of COmputer Education and Technology, Bhimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
