import { NavLink } from "react-router";
import ProfileRecentActivity from "./ProfileRecentActivity";

export default function ProfileMainContent({ games, recentlyPlayed }) {
 
       

    return (
        <div className="profile-main-content">
            <section className="items-container">
                <div className="container-header">
                    <h2>Game Collector</h2>
                </div>
                <div className="container-item">
                    <div className="profile-games-info">

                        <ul className="profile-games-info-list">
                            <li>
                                <div className="games-info-list-counter">{games.length}</div>
                                <div className="games-info-list-text">Games owned</div>
                            </li>
                            <li>
                                <div className="games-info-list-counter">{games.length}</div>
                                <div className="games-info-list-text">DLCs owned</div>
                            </li>
                            <li>
                                <div className="games-info-list-counter">32</div>
                                <div className="games-info-list-text">Reviewed</div>
                            </li>
                            <li>
                                <div className="games-info-list-counter">120</div>
                                <div className="games-info-list-text">Wishlisted</div>
                            </li>
                        </ul>

                    </div>
                    <div className="profile-games-items">
                        <ul className="profile-games-items-list">
                            {games.map(item => {
                                return <li key={item.appid}>
                                    <NavLink to={`/library/${item.appid}`} className="game-link">
                                        <img src={`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${item.appid}/capsule_231x87.jpg?t=1750959031`}
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null;
                                                currentTarget.src = "images/game_1.png";
                                            }} alt="" />
                                    </NavLink>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </section>
            <ProfileRecentActivity recentlyPlayed={recentlyPlayed} />
            <section className="profile-comment-section">
                <div className="items-container">
                    <div className="container-header">
                        <h2>Comments</h2>
                        <p>No comments yet</p>
                    </div>
                    <div className="container-item">
                        <div className="comment-block">
                            <div className="comment-profile-avatar avatar-outline">
                                <img src="images/mini-profile.png" alt="" />
                            </div>
                            <div className="comment-form-container">
                                <form>
                                    <input placeholder="Add a comment..." type="text" id="comment" name="comment" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}