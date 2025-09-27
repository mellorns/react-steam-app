import ProfileRecentActivity from "./ProfileRecentActivity";

export default function ProfileMainContent() {
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
                                <div className="games-info-list-counter">350</div>
                                <div className="games-info-list-text">Games owned</div>
                            </li>
                            <li>
                                <div className="games-info-list-counter">600</div>
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
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="game-link">
                                    <img src="src/assets/images/game_1.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <ProfileRecentActivity />
            <section className="profile-comment-section">
                <div className="items-container">
                    <div className="container-header">
                        <h2>Comments</h2>
                        <p>No comments yet</p>
                    </div>
                    <div className="container-item">
                        <div className="comment-block">
                            <div className="comment-profile-avatar avatar-outline">
                                <img src="src/assets/images/mini-profile.png" alt="" />
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