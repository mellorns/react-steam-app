import { useState } from "react"
import { NavLink } from "react-router"

export default function StreamingSlide({ data }) {
    const [lightBoxImg, setLightBoxImg] = useState(null)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)

    return (
        <div className='slide-content'>
            <div className="slide-main-img">
                <NavLink to={'/'}>
                    <img src="images/freeToPlay_img_1.png" alt="" />
                </NavLink>
            </div>
            <div className="slide-info-block">
                <h3 className="slide-title">
                    <a href="#">
                        {data.title}
                    </a>
                </h3>
                <div className="slide-bottom">
                    <div className="viewer_bar">
                        <div className="svg-container">
                            <svg>
                                <use xlinkHref="images/sprite.svg#view_eye"></use>
                            </svg>
                        </div>
                        <span className="viewer_count">
                            {data.viewers}
                        </span>
                    </div>
                    <NavLink to={'/'} className='viewer-link'>
                        Store Page
                    </NavLink>
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