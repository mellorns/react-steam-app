import { useState } from "react"
import { NavLink } from "react-router"

export default function BrowseSteamSectionSlide({data}) {
    const [lightBoxImg, setLightBoxImg] = useState(null)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)    

    return (
        <div className='swiper-slide-content'>
            <NavLink to={'/'}>
                <div className="genre-img">
                    <img src={data.img} alt="" />
                </div>
                <div className="genre-title">
                    {data.title}
                </div>
            </NavLink>
            {lightBoxImg &&
                <div className='ligthBox' onClick={closeLigthBox}>
                    <img src={lightBoxImg} alt="" />
                </div>
            }
        </div>

    )
}