import { useState } from "react"
import { NavLink } from "react-router"
import { createSlug } from '../../helpers/helper'

export default function FeaturedSlide({ data }) {
    const [lightBoxImg, setLightBoxImg] = useState(null)

    const [isInFav, setIsInFav] = useState(false)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)

    return (
        <div className='swiper-slide-content'>
            <div className='sale-main-img'>
                <NavLink to={`/game/${data.steam_appid}/${createSlug('ELDEN RING Shadow of the Erdtree')}`}>
                    <img src={data.header_image} alt="" />
                </NavLink>
            </div>
            <div className='item-description'>
                <hgroup>
                    <h3>
                        {data.name}
                    </h3>
                    <p>
                        {data.short_description}
                    </p>
                </hgroup>
            </div>
            <ul className='game-images-list'>
                {data.screenshots.map(img => {
                    return <li key={img.id}>
                        <img src={img.path_thumbnail} onClick={() => openLigthBox(img.path_full)} alt="" />
                    </li>
                })}
            </ul>
            {lightBoxImg &&
                <div className='ligthBox' onClick={closeLigthBox}>
                    <img src={lightBoxImg} alt="" />
                </div>
            }
            <div className='tags-block'>
                <ul className='game-tags-list'>
                    {data.genres.map((genre, i) => {
                        return <li key={i}>
                            <a href="" className='tags-link'>
                                {genre.description}
                            </a>
                        </li>
                    })}
                    <li>
                        <a href="" className='tags-link'>
                            <svg>
                                <use xlinkHref="images/sprite.svg#add_icon"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                {data.platforms.windows && <div className="svg-container system-required">
                    <svg>
                        <use xlinkHref="images/sprite.svg#windows_icon"></use>
                    </svg>
                </div>}
            </div>
            <div className='sale-game-block-bottom'>
                <button className='wish-btn' onClick={() => setIsInFav(!isInFav)}>
                    <span>Wishlist</span>
                    <div className="svg-container">
                        <svg>
                            {isInFav
                                ? <use xlinkHref="images/sprite.svg#whish_heart_icon_filled"></use>
                                : <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                            }
                        </svg>
                    </div>
                </button>
                <div className='product-price'>
                    <span>{data.price_overview.final_formatted}</span>
                    <button className='buy-product'>Buy Now</button>
                </div>

            </div>
        </div>

    )
}