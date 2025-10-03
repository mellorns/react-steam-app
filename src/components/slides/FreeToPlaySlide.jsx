import { useState } from "react"
import { NavLink } from "react-router"

export default function FreeToPlaySlide({ data }) {
    const [lightBoxImg, setLightBoxImg] = useState(null)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)

    return (
        <div className='swiper-slide-content'>
            <div className="sell-item-img">
                <NavLink to={'/'}>
                    <img src="images/freeToPlay_img_1.png" alt="" />
                </NavLink>
            </div>
            <div className="sell-item-info">
                <h3>
                    <a href="#" className="sell-item-title">
                        Destiny 2
                    </a>
                </h3>
                <div className="sell-item-bottom">
                    <div className="svg-container system-required">
                        <svg>
                            <use xlinkHref="images/sprite.svg#windows_icon"></use>
                        </svg>
                    </div>
                    <div className="price-block free">
                        Free
                    </div>
                    <button className='play-now-btn'>
                        Play now
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