import { useState } from "react"

export default function SpecialOrderSlide() {
    const [lightBoxImg, setLightBoxImg] = useState(null)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)

    return (
        <div className='swiper-slide-content'>
            <div className="sell-item-img">
                <a href="#">
                    <img src="images/special_offer_1_img.png" alt="" />
                </a>
            </div>
            <div className="sell-item-info">
                <h3>
                    <a href="#" className="sell-item-link">
                        The Last of Us: Part 1
                    </a>
                </h3>
                <div className="sell-item-bottom">
                    <div className="svg-container system-required">
                        <svg>
                            <use xlinkHref="images/sprite.svg#windows_icon"></use>
                        </svg>
                    </div>
                    <div className="expire-date">
                        Until Nov 2
                    </div>
                    <div className="price-block">
                        <div className="discount-banner">
                            -20%
                        </div>
                        <div className="discount-prices">
                            <div className="discount-original-price">
                                $59.99
                            </div>
                            <div className="discount_final_price">
                                $47.99
                            </div>
                        </div>
                    </div>
                    <button className='whish-btn'>
                        <div className="svg-container">
                            <svg>
                                <use xlinkHref="images/sprite.svg#whish_heart_icon"></use>
                            </svg>
                        </div>
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