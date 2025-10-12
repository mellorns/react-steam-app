import { NavLink } from "react-router"
import { createSlug } from "../../helpers/helper"

export default function RecentlyUpdatedSectionSlide({ data }) {

    return (
        <div className='swiper-slide-content'>
            <div className="slide-item-img">
                <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>
                    <img src={data.header_image} alt="" />
                </NavLink>
            </div>
            <hgroup>
                <h3 className="slide-item-title">
                    <a href="#" className="slide-item-link">
                        {data.name}
                    </a>
                </h3>
                <p className="slide-item-text">
                    {data.short_description}
                </p>
            </hgroup>
            <div className="slide-item-bottom">
                <button className="in-whishList-btn">
                    In Wishlist
                </button>
                <NavLink className='viewUpdates-btn' to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>
                      View Updates
                </NavLink>
            </div>
        </div>

    )
}