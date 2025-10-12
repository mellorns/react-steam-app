import { NavLink } from "react-router"
import { createSlug } from "../../helpers/helper"

export default function FreeToPlaySlide({ data }) {

    return (
        <div className='swiper-slide-content'>
            <div className="sell-item-img">
                <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>
                    <img src={data.header_image} alt="" />
                </NavLink>
            </div>
            <div className="sell-item-info">
                <h3>
                    <a href="#" className="sell-item-title">
                        {data.name}
                    </a>
                </h3>
                <div className="sell-item-bottom">
                    {data.platforms?.windows && <div className="svg-container system-required">
                        <svg>
                            <use xlinkHref="images/sprite.svg#windows_icon"></use>
                        </svg>
                    </div>}
                    <div className="price-block free">
                        Free
                    </div>
                    <button className='play-now-btn'>
                        Play now
                    </button>
                </div>
            </div>
        </div>

    )
}