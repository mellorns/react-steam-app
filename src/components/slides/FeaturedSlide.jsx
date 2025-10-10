import { useState } from "react"
import { NavLink } from "react-router"

export default function FeaturedSlide() {
    const [lightBoxImg, setLightBoxImg] = useState(null)



    // const openLigthBox = (src) => setLightBoxImg(src)
    // const closeLigthBox = () => setLightBoxImg(null)

    return (
        <div className='swiper-slide-content'>
            <div className='sale-main-img'>
                <NavLink to={`/game/${2778580}`}>
                    <img src="images/slider_1_1.png" alt="" />
                </NavLink>
            </div>
            {/* <div className="add-info sale-game-block"> */}
            <div className='item-description'>
                <hgroup>
                    <h3>
                        Elden Ring
                    </h3>
                    <p>
                        HE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
                    </p>
                </hgroup>
            </div>
            <ul className='game-images-list'>
                <li>
                    <img src="images/slider_1_2.png" onClick={() => openLigthBox("images/slider_1_2.png")} alt="" />
                </li>
                <li>
                    <img src="images/slider_1_3.png" onClick={() => openLigthBox("images/slider_1_3.png")} alt="" />
                </li>
                <li>
                    <img src="images/slider_1_4.png" onClick={() => openLigthBox("images/slider_1_4.png")} alt="" />
                </li>
                <li>
                    <img src="images/slider_1_5.png" onClick={() => openLigthBox("images/slider_1_5.png")} alt="" />
                </li>
            </ul>
            {lightBoxImg &&
                <div className='ligthBox' onClick={closeLigthBox}>
                    <img src={lightBoxImg} alt="" />
                </div>
            }
            <div className='tags-block'>
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
                <div className="svg-container system-required">
                    <svg>
                        <use xlinkHref="images/sprite.svg#windows_icon"></use>
                    </svg>
                </div>
            </div>
            <div className='sale-game-block-bottom'>
                <button className='whish-btn'>
                    <span>Wishlist</span>
                    <div className="svg-container">
                        <svg>
                            <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                        </svg>
                    </div>
                </button>
                <div className='product-price'>
                    <span>$59.99</span>
                    <button className='buy-product'>Buy Now</button>
                </div>

            </div>

            {/* </div> */}
        </div>

    )
}