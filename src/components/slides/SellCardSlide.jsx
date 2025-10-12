import { useState } from "react"
import { createSlug } from "../../helpers/helper"
import { NavLink } from "react-router"

export default function SellCardSlide({ data, horizontal }) {
    const [isInFav, setIsInFav] = useState(false)


    return (
        <div className={`swiper-slide-content ${horizontal && 'horizontal'}`}>
            <div className="sell-item-img">
                <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>
                    <img src={data.header_image} alt="" />
                </NavLink>
            </div>
            <div className="sell-item-info">
                <h3 className="sell-item-title">
                    <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>
                        {data.name}
                    </NavLink>
                </h3>
                <div className="sell-item-bottom">
                    {data.platforms.windows &&
                        <div className="svg-container system-required">
                            <svg>
                                <use xlinkHref="images/sprite.svg#windows_icon"></use>
                            </svg>
                        </div>
                    }
                    {data.expiration_date &&
                        <div className="expire-date">
                            {data.expiration_date}
                        </div>
                    }
                    {data.price_overview.discount_percent ?
                        <div className="price-block">
                            <div className="discount-banner">
                                {`-${data.price_overview.discount_percent}%`}
                            </div>
                            <div className="discount-prices">
                                <div className="discount-original-price">
                                    {`$${data.price_overview.initial}`}
                                </div>
                                <div className="discount_final_price">
                                    {`$${data.price_overview.final_formatted}`}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="original-price">
                            {`$${data.price_overview.initial}`}
                        </div>
                    }
                    <button className='wish-btn' onClick={() => setIsInFav(!isInFav)}>
                        <div className="svg-container">
                            <svg>
                                {isInFav
                                    ? <use xlinkHref="images/sprite.svg#whish_heart_icon_filled"></use>
                                    : <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                                }
                            </svg>
                        </div>
                    </button>

                </div>
            </div>
        </div>

    )
}