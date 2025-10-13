export default function LibraryHeroSection({ name, backgroundUrl, playtime_forever }) {




    return (
        <div className="game-hero-section" style={{
            backgroundImage: `url(${backgroundUrl})`,
        }} >
            <div className="game-hero-overlay"></div>
            <div className="game-hero-content">
                <h2 className="game-title">{name}</h2>
                <button className="play-btn">
                    <div className='svg-container'>
                        <svg >
                            <use xlinkHref="images/sprite.svg#play_arrow_icon"></use>
                        </svg>
                    </div>
                    <span>Play</span>
                </button>
                <ul className="game-info-list">
                    <li>
                        <div className='svg-container'>
                            <svg >
                                <use xlinkHref="images/sprite.svg#scedule_icon"></use>
                            </svg>
                        </div>
                        <div>
                            <div className="game-info-title">
                                LAST PLAYED
                            </div>
                            <time className="game-info-descr">
                                21 Aug 2022
                            </time>
                        </div>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <svg >
                                <use xlinkHref="images/sprite.svg#time_played_icon"></use>
                            </svg>
                        </div>
                        <div>
                            <div className="game-info-title">
                                PLAY TIME
                            </div>
                            <div className="game-info-descr">
                                {(playtime_forever/60).toFixed(0)} hours
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <svg >
                                <use xlinkHref="images/sprite.svg#cloud_icon"></use>
                            </svg>
                        </div>
                        <div>
                            <div className="game-info-title">
                                CLOUD STATUS
                            </div>
                            <div className="game-info-descr">
                                Up to date
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <svg >
                                <use xlinkHref="images/sprite.svg#achivments_icon"></use>
                            </svg>
                        </div>
                        <div>
                            <div className="game-info-title">
                                ACHIEVEMENTS
                            </div>
                            <div className="game-info-descr">
                                20/65 <progress value="20" max="65"></progress>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="game-setting-list">
                    <li>
                        <div className='svg-container'>
                            <svg >
                                <use xlinkHref="images/sprite.svg#controller_icon"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <svg >
                                <use xlinkHref="images/sprite.svg#people_icon"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <button>
                            <div className='svg-container'>
                                <svg >
                                    <use xlinkHref="images/sprite.svg#star_icon"></use>
                                </svg>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className='svg-container'>
                                <svg >
                                    <use xlinkHref="images/sprite.svg#settings-icon"></use>
                                </svg>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <div className='svg-container'>
                                <svg >
                                    <use xlinkHref="images/sprite.svg#info_icon"></use>
                                </svg>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}