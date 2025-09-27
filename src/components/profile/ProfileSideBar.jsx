export default function ProfileSideBar() {
    return (
        <div className="profile-sidebar">
            <div className="prifile-sidebar-navigation-section">
                <ul className="profile-sidebar-navigation">
                    <li className="sidebar-navigation-item">
                        <button>
                            <span className="inner-item-wrapper">
                                <span className="sidebar-navigation-item-title">Status</span>
                                <span className="sidebar-navigation-item-status">Online</span>
                            </span>
                        </button>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Badges</span>
                            <span className="sidebar-navigation-item-count">84</span>
                        </a>
                        <ul className="sidebar-badges-list">
                            <li>
                                <a href="#" title="badge_1">
                                    <img src="src/assets/images/badge_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="badge_1">
                                    <img src="src/assets/images/badge_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="badge_1">
                                    <img src="src/assets/images/badge_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="badge_1">
                                    <img src="src/assets/images/badge_1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="badge_1">
                                    <img src="src/assets/images/badge_1.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Games</span>
                            <span className="sidebar-navigation-item-count">350</span>
                        </a>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Wishlist</span>
                            <span className="sidebar-navigation-item-count">120</span>
                        </a>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Inventory</span>
                        </a>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Screenshots</span>
                            <span className="sidebar-navigation-item-count">40</span>
                        </a>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Videos</span>
                            <span className="sidebar-navigation-item-count">2</span>
                        </a>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Workshop Items</span>
                            <span className="sidebar-navigation-item-count">3</span>
                        </a>
                    </li>
                    <li className="sidebar-navigation-item">
                        <a href='#'>
                            <span className="sidebar-navigation-item-title">Reviews</span>
                            <span className="sidebar-navigation-item-count">32</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="prifile-sidebar-friends-section">
                <div className="friends-section-header">
                    <h2>Friends (4)</h2>
                    <button>
                        <div className='svg-container'>
                            <svg className='arrow-down'>
                                <use xlinkHref="src/assets/images/sprite.svg#arrow"></use>
                            </svg>
                        </div>
                    </button>
                </div>
                <ul className="friends-list">
                    <li>
                        <a href="#" className="friend-list-link">
                            <div className="friend-content">
                                <div className="friend-profile-avatar avatar-outline">
                                    <img src="src/assets/images/mini-profile.png" alt="" />
                                </div>
                                <div className="friend-description">
                                    <div className="friend-name">
                                        Friend 1
                                    </div>
                                    <div className="friend-status">
                                        Counter-Strike 2
                                    </div>
                                </div>
                            </div>
                            <div className="profile-header-lvl-progress">
                                <span>72</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="friend-list-link">
                            <div className="friend-content">
                                <div className="friend-profile-avatar avatar-outline">
                                    <img src="src/assets/images/mini-profile.png" alt="" />
                                </div>
                                <div className="friend-description">
                                    <div className="friend-name">
                                        Friend 1
                                    </div>
                                    <div className="friend-status">
                                        Counter-Strike 2
                                    </div>
                                </div>
                            </div>
                            <div className="profile-header-lvl-progress">
                                <span>72</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="friend-list-link">
                            <div className="friend-content">
                                <div className="friend-profile-avatar avatar-outline">
                                    <img src="src/assets/images/mini-profile.png" alt="" />
                                </div>
                                <div className="friend-description">
                                    <div className="friend-name">
                                        Friend 1
                                    </div>
                                    <div className="friend-status">
                                        Counter-Strike 2
                                    </div>
                                </div>
                            </div>
                            <div className="profile-header-lvl-progress">
                                <span>72</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="friend-list-link">
                            <div className="friend-content">
                                <div className="friend-profile-avatar avatar-outline">
                                    <img src="src/assets/images/mini-profile.png" alt="" />
                                </div>
                                <div className="friend-description">
                                    <div className="friend-name">
                                        Friend 1
                                    </div>
                                    <div className="friend-status">
                                        Counter-Strike 2
                                    </div>
                                </div>
                            </div>
                            <div className="profile-header-lvl-progress">
                                <span>72</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}