import { useState } from "react"
import { NavLink } from "react-router"

export default function RecentlyUpdatedSectionSlide({ data }) {
    const [lightBoxImg, setLightBoxImg] = useState(null)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)

    return (
        <div className='swiper-slide-content'>
            <div className="slide-item-img">
                <NavLink to={'/'}>
                    <img src="images/updates_img_1.png" alt="" />
                </NavLink>
            </div>
            <div className="slide-item-info">
                <hgroup>
                    <h3 className="slide-item-title">
                        <a href="#" className="slide-item-link">
                            Cyberpunk 2077
                        </a>
                    </h3>
                    <p className="slide-item-text">
                        The free Update 2.0 brings brand new ways to play Cyberpunk 2077...
                    </p>
                </hgroup>
                <div className="slide-item-bottom">
                    <button className="in-whishList-btn">
                        In Wishlist
                    </button>
                    <button className='viewUpdates-btn'>
                        View Updates
                    </button>
                </div>
            </div>
            {lightBoxImg &&
                <div className='ligthBox' onClick={closeLigthBox}>
                    <img src={lightBoxImg} alt="" />
                </div>
            }
        </div>

    )
}