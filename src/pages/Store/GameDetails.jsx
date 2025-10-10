import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import MySlider from "../../components/common/MySlider";

import '../../assets/styles/store/gameDatailPage.scss'
import SellCardSlide from "../../components/slides/SellCardSlide";
import { countPriceWithDiscount } from "../../helpers/helper";
import ResponsiveList from "../../components/common/ResponsiveList";

export default function GameDetails() {
    const { appid } = useParams();
    const [game, setGame] = useState(null);

    // useEffect(() => {
    //     async function loadGame() {
    //         const res = await fetch(`http://localhost:3000/api/steam/game/${appid}`);
    //         const data = await res.json();
    //         setGame(data);
    //         console.log(data);

    //     }

    //     loadGame();
    // }, [appid]);

    // if (!game) return <div>Loading...</div>;



    const images = [
        { img: 'images/slider_1_2.png' },
        { img: 'images/slider_1_3.png' },
        { img: 'images/slider_1_4.png' },
        { img: 'images/slider_1_5.png' },
    ]


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

    const data = {
        img: 'images/special_offer_1_img.png',
        title: 'The Last of Us: Part 1',
        expDate: 'Until Nov 2',
        discount: 20,
        price: 59.99,
    }

    const finalPrice = countPriceWithDiscount(data.price, data.discount)

    return (
        <div className="game-detail-page">
            <div className="container">
                <div className="detail-page-header">
                    <h2>Elden Ring</h2>
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
                            <img src="images/game_main_img.png" alt="" />
                        </div>
                        <div className="slider-wrapper">
                            <MySlider config={config}>
                                {images.map((item, i) => {
                                    return <img src={item.img} />
                                })}
                            </MySlider>
                        </div>

                    </div>
                    <div className="content-block">
                        <div className="content-block-img">
                            <img src="images/slider_1_1.png" alt="" />
                        </div>
                        <p className="about-game">
                            THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
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
                            <div className="row-content"><time dateTime="25.02.2022">25 Feb 2022</time></div>
                        </div>
                        <div className="content-row">
                            <div className="row-title">Developer</div>
                            <div className="row-content"><NavLink to={'/'}>FromSoftware</NavLink></div>
                        </div>
                        <div className="content-row">
                            <div className="row-title">Publisher</div>
                            <div className="row-content"><NavLink to={'/'}>FromSoftware, Bandai Namco Entertainment</NavLink></div>
                        </div>
                        <div className="content-row tags-row">
                            <div className="row-title">Popular Tags</div>

                            <ul className='game-tags-list'>
                                <li>
                                    <a href="" className='tags-link'>
                                        Souls-like
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='tags-link'>
                                        RPG
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='tags-link'>
                                        Dark Fantasy
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='tags-link'>
                                        Open-world
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='tags-link'>
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#add_icon"></use>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid-columns">
                    <div>


                        <div className="block block-row">
                            <div className="block-top-row">
                                <hgroup>
                                    <h3 className="block-title">Elden Ring</h3>
                                    <p className="block-description">WEEKEND DEAL! Offer ends 19 October</p>
                                </hgroup>
                                <div className="svg-container system-required">
                                    <svg>
                                        <use xlinkHref="images/sprite.svg#windows_icon"></use>
                                    </svg>
                                </div>
                                {data.discount ?
                                    <div className="price-block">
                                        <div className="discount-banner">
                                            {`-${data.discount}%`}
                                        </div>
                                        <div className="discount-prices">
                                            <div className="discount-original-price">
                                                {`$${data.price}`}
                                            </div>
                                            <div className="discount_final_price">
                                                {`$${finalPrice}`}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="original-price">
                                        {`$${data.price}`}
                                    </div>
                                }

                                <button className="addToCard-btn action-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-top-row">
                                <hgroup>
                                    <h3 className="block-title">Elden Ring</h3>
                                    <p className="block-description">Elden Ring Deluxe Edition</p>
                                </hgroup>
                                <div className="svg-container system-required">
                                    <svg>
                                        <use xlinkHref="images/sprite.svg#windows_icon"></use>
                                    </svg>
                                </div>
                                {data.discount ?
                                    <div className="price-block">
                                        <div className="discount-banner">
                                            {`-${data.discount}%`}
                                        </div>
                                        <div className="discount-prices">
                                            <div className="discount-original-price">
                                                {`$${data.price}`}
                                            </div>
                                            <div className="discount_final_price">
                                                {`$${finalPrice}`}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="original-price">
                                        {`$${data.price}`}
                                    </div>
                                }

                                <button className="addToCard-btn action-btn">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="included-content-block">
                                <p>Includes:</p>
                                <ul className="included-content-list">
                                    <li>
                                        Elden Ring (full game)
                                    </li>
                                    <li>
                                        Digital Artbook & Original Soundtrack
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-top-row">
                                <h3 className="block-title-gray">DLCs</h3>
                                <button className="browse-btn">Browse All DLCs</button>
                            </div>

                            <ul className="dlc-list">
                                <li>
                                    <div className="dlc-title">
                                        DLC 1
                                    </div>
                                    {data.discount ?
                                        <div className="price-block">
                                            <div className="discount-banner">
                                                {`-${data.discount}%`}
                                            </div>
                                            <div className="discount-prices">
                                                <div className="discount-original-price">
                                                    {`$${data.price}`}
                                                </div>
                                                <div className="discount_final_price">
                                                    {`$${finalPrice}`}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="original-price">
                                            {`$${data.price}`}
                                        </div>
                                    }
                                </li>
                                <li>
                                    <div className="dlc-title">
                                        DLC 1
                                    </div>
                                    {data.discount ?
                                        <div className="price-block">
                                            <div className="discount-banner">
                                                {`-${data.discount}%`}
                                            </div>
                                            <div className="discount-prices">
                                                <div className="discount-original-price">
                                                    {`$${data.price}`}
                                                </div>
                                                <div className="discount_final_price">
                                                    {`$${finalPrice}`}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="original-price">
                                            {`$${data.price}`}
                                        </div>
                                    }
                                </li>
                                <li>
                                    <div className="dlc-title">
                                        DLC 1
                                    </div>
                                    {data.discount ?
                                        <div className="price-block">
                                            <div className="discount-banner">
                                                {`-${data.discount}%`}
                                            </div>
                                            <div className="discount-prices">
                                                <div className="discount-original-price">
                                                    {`$${data.price}`}
                                                </div>
                                                <div className="discount_final_price">
                                                    {`$${finalPrice}`}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="original-price">
                                            {`$${data.price}`}
                                        </div>
                                    }
                                </li>
                            </ul>
                            <div className="block-bottom-row">
                                {data.discount ?
                                    <div className="price-block">
                                        <div className="discount-banner">
                                            {`-${data.discount}%`}
                                        </div>
                                        <div className="discount-prices">
                                            <div className="discount-original-price">
                                                {`$${data.price}`}
                                            </div>
                                            <div className="discount_final_price">
                                                {`$${finalPrice}`}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="original-price">
                                        {`$${data.price}`}
                                    </div>
                                }

                                <button className="addToCard-btn action-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-top-row">
                                <h3 className="block-title-gray">About Elden Ring</h3>
                            </div>
                            <figure className="game-gif-block">
                                <img src="images/game_about.gif" alt="" />
                                <figcaption>THE NEW FANTASY ACTION RPG.Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</figcaption>
                            </figure>
                            <dl className="game-description-list">
                                <dt>• A Vast World Full of Excitement</dt>
                                <dd>
                                    A vast world where open fields with
                                    a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.
                                </dd>
                                <dt>• Create your Own Character</dt>
                                <dd>
                                    In addition to customizing the appearance of your character, you can freely combine the weapons, armor, and magic that you equip. You can develop your character according to your play style, such as increasing your muscle strength to become a strong warrior, or mastering magic.
                                </dd>
                                <dt>• An Epic Drama Born from a Myth</dt>
                                <dd>
                                    A multilayered story told in fragments. An epic drama in which the various thoughts of the characters intersect in the Lands Between.
                                </dd>
                                <dt>• Unique Online Play that Loosely Connects You to Others</dt>
                                <dd>
                                    In addition to multiplayer, where you can directly connect with other players and travel together, the game supports a unique asynchronous online element that allows you to feel the presence of others.
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="block">
                            <div className="block-top-row">
                                <div className="block-title-gray">Features</div>
                            </div>
                            <ul className="features-list">
                                <li>
                                    <div className="svg-container">
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                                        </svg>
                                    </div>
                                    <span>
                                        Single Player
                                    </span>
                                </li>
                                <li>
                                    <div className="svg-container">
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#people"></use>
                                        </svg>
                                    </div>
                                    <span>
                                        Online Co-Op
                                    </span>
                                </li>
                                <li>
                                    <div className="svg-container">
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#star_icon"></use>
                                        </svg>
                                    </div>
                                    <span>
                                        Steam Achievements
                                    </span>
                                </li>
                                <li>
                                    <div className="svg-container">
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#controller_icon"></use>
                                        </svg>
                                    </div>
                                    <span>
                                        Full Controller Support
                                    </span>
                                </li>
                                <li>
                                    <div className="svg-container">
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                                        </svg>
                                    </div>
                                    <span>
                                        Steam Trading Cards
                                    </span>
                                </li>
                                <li>
                                    <div className="svg-container">
                                        <svg>
                                            <use xlinkHref="images/sprite.svg#cloud_icon"></use>
                                        </svg>
                                    </div>
                                    <span>
                                        Steam Cloud
                                    </span>
                                </li>
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