import { NavLink } from "react-router";

export default function ProfileRecentActivityItem({ item }) {
  return (
    <div className="container-item game-info">
      <div className="game-info-cap">
        <NavLink to={`/library/${item.appid}`}>
          <img src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${item.appid}/capsule_231x87.jpg?t=1750959031`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "images/game_1.png";
            }} alt="" />
        </NavLink>
      </div>

      <div className="game-info-details-top">
        <p className="game-info-title">{item.name}</p>
        <div>
          <div className="game-firstTimePlay">
            <div className="svg-container">
              <svg>
                <use xlinkHref="images/sprite.svg#date_range"></use>
              </svg>
            </div>
            <span>3 Oct 2023</span>
          </div>
          <div className="game-hoursPlayed">
            <div className="svg-container">
              <svg>
                <use xlinkHref="images/sprite.svg#timelapse"></use>
              </svg>
            </div>
            <span>{item.playtime_forever / 60} Hrs</span>
          </div>
        </div>
      </div>

      <div className="game-info-achievements">
        <div className="svg-container">
          <svg>
            <use xlinkHref="images/sprite.svg#stars"></use>
          </svg>
        </div>
        <label>35/127 </label>
        <progress value={35} max={127}></progress>

        <ul className="game-info-achievements-list">
          <li><div className="img-container"><img src="images/achv_1.png" alt="" /></div></li>
          <li><div className="img-container"><img src="images/achv_1.png" alt="" /></div></li>
          <li><div className="img-container"><img src="images/achv_1.png" alt="" /></div></li>
          <li><div className="img-container"><img src="images/achv_1.png" alt="" /></div></li>
          <li><div className="img-container"><img src="images/achv_1.png" alt="" /></div></li>
          <li><div className="img-container"><img src="images/achv_1.png" alt="" /></div></li>
        </ul>
      </div>
    </div>

  )
}