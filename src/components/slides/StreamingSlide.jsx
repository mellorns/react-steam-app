import { NavLink } from "react-router"
import { createSlug } from "../../helpers/helper"

export default function StreamingSlide({ data }) {

    return (
        <div className='slide-content'>
            <div className="slide-main-img">
                <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>
                    <img src={data.header_image} alt="" />
                </NavLink>
            </div>
            <div className="slide-info-block">
                <h3 className="slide-title">
                    <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>
                        {data.name}
                    </NavLink>
                </h3>
                <div className="slide-bottom">
                    <div className="viewer_bar">
                        <div className="svg-container">
                            <svg>
                                <use xlinkHref="images/sprite.svg#view_eye"></use>
                            </svg>
                        </div>
                        <span className="viewer_count">
                            {data.live_viewers}
                        </span>
                    </div>
                    <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`} className='viewer-link'>
                        Store Page
                    </NavLink>
                </div>
            </div>
        </div>

    )
}