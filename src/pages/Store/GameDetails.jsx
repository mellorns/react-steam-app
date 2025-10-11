import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import MySlider from "../../components/common/MySlider";

import '../../assets/styles/store/gameDatailPage.scss'
import ResponsiveList from "../../components/common/ResponsiveList";

export default function GameDetails() {
    const { appid } = useParams();
    const [gameData, setGameData] = useState(null);
    const [lightBoxImg, setLightBoxImg] = useState(null)


    useEffect(() => {
        async function loadGame() {
            const res = await fetch(`http://localhost:3000/api/steam/game/${appid}`);
            const data = await res.json();
            setGameData(data);
        }

        loadGame();
    }, [appid]);


    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)


    if (!gameData) return <div>Loading...</div>;

    const achievmentsGainerList = [
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },
        {
            img: "images/achievements_img_1.png"
        },

    ]
    const config = {
        slidesToShow: 3,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }
    const backgroundUrl = gameData?.background || gameData?.background_raw;

    return (
        <div className="game-detail-page" style={{
            backgroundImage: `url(${backgroundUrl})`,
        }} >
            <div className="container">
                <div className="detail-page-header">
                    <h2>{gameData.name}</h2>
                    <div className="action-container">
                        <div>
                            <button className="action-btn ignore-btn">Ignore</button>
                        </div>
                        <div>
                            <button className="action-btn follow-btn">Follow</button>
                        </div>
                        <button className='wish-btn'>
                            <span>Wishlist</span>
                            <div className="svg-container">
                                <svg>
                                    <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                                </svg>
                            </div>
                        </button>
                        <div className="action-btn">
                            <NavLink to={'/'}>Browse All DLCs</NavLink>
                        </div>
                        <div className="action-btn">
                            <NavLink to={'/'}>Community Hub</NavLink>
                        </div>
                    </div>
                </div>
                <div className="block general-block">
                    <div className="slider-block">
                        <div className="main-img-container">
                            <video
                                controls
                                poster={gameData.movies[0].thumbnail}
                                className="trailer-video"
                                autoPlay
                            >
                                <source src={gameData.movies[0].mp4?.max || movie.mp4?.["480"]} type="video/mp4" />
                                <source src={gameData.movies[0].webm?.max || movie.webm?.["480"]} type="video/webm" />
                                Ваш браузер не підтримує відтворення відео.
                            </video>
                        </div>
                        <div className="slider-wrapper">
                            <MySlider config={config}>
                                {gameData.screenshots.map((item, i) => {
                                    return <img src={item.path_thumbnail} onClick={() => openLigthBox(item.path_full)} />
                                })}
                            </MySlider>
                        </div>
                        {lightBoxImg &&
                            <div className='ligthBox' onClick={closeLigthBox}>
                                <img src={lightBoxImg} alt="" />
                            </div>
                        }

                    </div>
                    <div className="content-block">
                        <div className="content-block-img">
                            <img src={gameData.header_image} alt="" />
                        </div>
                        <p className="about-game">
                            {gameData.short_description}
                        </p>
                        <div className="reviews-block">
                            <span>Reviews</span>
                            <div className="reviews-row">
                                <div className="review-time">
                                    Past Month
                                </div>
                                <div className="reviews-percents">
                                    <div className="review-header">
                                        <div className="review-positive">
                                            <span>90%</span>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                        </div>
                                        <div className="review-negative">
                                            <span>10%</span>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                        </div>
                                    </div>
                                    <div className="reviews-bar">
                                        <div className="positive-bar" style={{ width: '90%' }}></div>
                                        <div className="negative-bar" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                                <div className="reviews-count">
                                    534,170 Reviews
                                </div>
                            </div>
                            <div className="reviews-row">
                                <div className="review-time">
                                    All Time
                                </div>
                                <div className="reviews-percents">
                                    <div className="review-header">
                                        <div className="review-positive">
                                            <span>90%</span>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                        </div>
                                        <div className="review-negative">
                                            <span>10%</span>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                        </div>
                                    </div>
                                    <div className="reviews-bar">
                                        <div className="positive-bar" style={{ width: '90%' }}></div>
                                        <div className="negative-bar" style={{ width: '10%' }}></div>
                                    </div>
                                </div>
                                <div className="reviews-count">
                                    534,170 Reviews
                                </div>
                            </div>
                        </div>
                        <div className="content-row">
                            <div className="row-title">Release Date</div>
                            <div className="row-content"><time dateTime="25.02.2022">{gameData.release_date.date}</time></div>
                        </div>
                        <div className="content-row">
                            <div className="row-title">Developer</div>
                            <div className="row-content"><NavLink to={'/'}>{gameData.developers}</NavLink></div>
                        </div>
                        <div className="content-row">
                            <div className="row-title">Publisher</div>
                            <div className="row-content"><NavLink to={'/'}>{gameData.publishers}</NavLink></div>
                        </div>
                        <div className="content-row tags-row">
                            <div className="row-title">Popular Tags</div>

                            <ul className='game-tags-list'>
                                {gameData.genres.map((genre, i) => {
                                    return <li key={i}>
                                        <NavLink key={genre.id} to={`/genre/${genre.description}`} className='tags-link'>
                                            {genre.description}
                                        </NavLink>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid-columns">
                    <div>
                        {/* <div className="block block-row">
                            <div className="block-top-row">
                                <hgroup>
                                    <h3 className="block-title">{gameData.name}</h3>
                                    <p className="block-description"></p>
                                </hgroup>
                                <div className="platforms-list">
                                    <div className="svg-container system-required">
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#windows_icon"></use>
                                        </svg>
                                    </div>
                                </div>

                                {gameData.price_overview.discount_percent ?
                                    <div className="price-block">
                                        <div className="discount-banner">
                                            {`-${gameData.price_overview.discount_percent}%`}
                                        </div>
                                        <div className="discount-prices">
                                            <div className="discount-original-price">
                                                {`$${gameData.price_overview.initial}`}
                                            </div>
                                            <div className="discount_final_price">
                                                {`$${gameData.price_overview.final}`}
                                            </div>
                                        </div>
                                    </div>
                                    : <div className="original-price">
                                        {`$${gameData.price_overview.initial}`}
                                    </div>
                                }

                                <button className="addToCard-btn action-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div> */}
                        {gameData.package_groups[0].subs.map((item, index) => {
                            return (
                                <div className="block" key={index}>
                                    <div className="block-top-row">
                                        <hgroup>
                                            <h3 className="block-title">{item.option_text}</h3>
                                            <p className="block-description"></p>
                                        </hgroup>
                                        <div className="platforms-list">
                                            {gameData.platforms.windows && <div className="svg-container system-required">
                                                <svg>
                                                    <use xlinkHref="images/sprite.svg#windows_icon"></use>
                                                </svg>
                                            </div>}
                                        </div>
                                        {item.percent_savings ?
                                            <div className="price-block">
                                                <div className="discount-banner">
                                                    {`-${gameData.price_overview.discount_percent}%`}
                                                </div>
                                                <div className="discount-prices">
                                                    <div className="discount-original-price">
                                                        {`$${gameData.price_overview.initial}`}
                                                    </div>
                                                    <div className="discount_final_price">
                                                        {`$${gameData.price_overview.final}`}
                                                    </div>
                                                </div>
                                            </div>
                                            : <div className="original-price">
                                                {`$${item.price_in_cents_with_discount}`}
                                            </div>
                                        }
                                        <button className="addToCard-btn action-btn">
                                            Add to Cart
                                        </button>
                                    </div>
                                    {/* <div className="included-content-block">
                                        <p>Includes:</p>
                                        <ul className="included-content-list">
                                            <li>
                                                Elden Ring (full game)
                                            </li>
                                            <li>
                                                Digital Artbook & Original Soundtrack
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            )
                        })}


                        <div className="block">
                            <div className="block-top-row">
                                <h3 className="block-title-gray">About Elden Ring</h3>
                            </div>
                            <div className="game-description-list"
                                dangerouslySetInnerHTML={{ __html: gameData.detailed_description }}
                            >
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-top-row">
                                <h3 className="block-title-gray">System Requirements</h3>
                            </div>
                            <div className="system-requirements-block">
                                <div
                                    dangerouslySetInnerHTML={{ __html: gameData.pc_requirements.minimum }}
                                >
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{ __html: gameData.pc_requirements.recommended }}
                                >
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="block">
                            <div className="block-top-row">
                                <div className="block-title-gray">Features</div>
                            </div>
                            <ul className="features-list">
                                {gameData.categories.map((category, i) => {
                                    return <li key={category.id}>
                                        <div className="svg-container">
                                            <svg>
                                                <use xlinkHref={`images/sprite.svg#${category.id}`}></use>
                                            </svg>
                                        </div>
                                        <span>
                                            {category.description}
                                        </span>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className="block">
                            <div className="block-top-row">
                                <div className="block-title-gray">Languages</div>
                            </div>
                            <div className="language-table">
                                <table className="game-language-options">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Interface</th>
                                            <th>Subtitles</th>
                                            <th>Full Audio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>English</td>
                                            <td className="checked-col"></td>
                                            <td className="checked-col"></td>
                                            <td className="checked-col"></td>
                                        </tr>
                                        <tr>
                                            <td>French</td>
                                            <td className="checked-col"></td>
                                            <td className="checked-col"></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Italian</td>
                                            <td className="checked-col"></td>
                                            <td className="checked-col"></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>German</td>
                                            <td className="checked-col"></td>
                                            <td className="checked-col"></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Spanish - Spain</td>
                                            <td className="checked-col"></td>
                                            <td className="checked-col"></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className="show-all-lang">See all 14 supported languages</button>
                        </div>
                        <div className="block">
                            <div className="block-top-row">
                                <div className="block-title-gray">Achievements</div>
                            </div>
                            <ResponsiveList items={achievmentsGainerList} />
                        </div>
                        <div className="block">
                            <div className="block-top-row">
                                <div className="block-title-gray">Point Shop Items</div>
                            </div>
                            <ResponsiveList items={achievmentsGainerList} />
                        </div>
                        <div className="block sidebar-navigation">
                            <div className="block-top-row">
                                <div className="block-title-gray">Links</div>
                            </div>
                            <ul className="sidebar-navigation-list">
                                <li>
                                    <NavLink to={'/workshop'}>Workshop</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/discussions'}>Discussions</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/news'}>News</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/updates'}>Updates</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/community'}>Community Groups</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/market'}>Marketplace</NavLink>
                                </li>
                                <li>
                                    <ul className="action-links-list">
                                        <li>
                                            <NavLink to={'/market'}>
                                                <div className="svg-container">
                                                    <svg>
                                                        <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                                                    </svg>
                                                </div>
                                                <span>Share</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/market'}>
                                                <div className="svg-container">
                                                    <svg>
                                                        <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                                                    </svg>
                                                </div>
                                                <span>Embed</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'/market'}>
                                                <div className="svg-container">
                                                    <svg>
                                                        <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                                                    </svg>
                                                </div>
                                                <span>Report</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}