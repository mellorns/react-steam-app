export default function ProfileRecentActivityItem() {
    return (
     <div className="container-item game-info">
  <div className="game-info-cap">
    <img src="src/assets/images/game_1.png" alt="" />
  </div>

  <div className="game-info-details-top">
    <p className="game-info-title">Mass Effect: Legendary Edition</p>
    <div>
      <div className="game-firstTimePlay">
        <div className="svg-container">
          <svg>
            <use xlinkHref="src/assets/images/sprite.svg#date_range"></use>
          </svg>
        </div>
        <span>3 Oct 2023</span>
      </div>
      <div className="game-hoursPlayed">
        <div className="svg-container">
          <svg>
            <use xlinkHref="src/assets/images/sprite.svg#timelapse"></use>
          </svg>
        </div>
        <span>32 hours</span>
      </div>
    </div>
  </div>

  <div className="game-info-achievements">
    <div className="svg-container">
      <svg>
        <use xlinkHref="src/assets/images/sprite.svg#stars"></use>
      </svg>
    </div>
    <label>35/127 </label>
    <progress value={35} max={127}></progress>

    <ul className="game-info-achievements-list">
      <li><div className="img-container"><img src="src/assets/images/achv_1.png" alt="" /></div></li>
      <li><div className="img-container"><img src="src/assets/images/achv_1.png" alt="" /></div></li>
      <li><div className="img-container"><img src="src/assets/images/achv_1.png" alt="" /></div></li>
      <li><div className="img-container"><img src="src/assets/images/achv_1.png" alt="" /></div></li>
      <li><div className="img-container"><img src="src/assets/images/achv_1.png" alt="" /></div></li>
      <li><div className="img-container"><img src="src/assets/images/achv_1.png" alt="" /></div></li>
    </ul>
  </div>
</div>

    )
}