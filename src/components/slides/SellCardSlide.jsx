import { useState } from "react"
import { countPriceWithDiscount } from "../../helpers/helper"

export default function SellCardSlide({ data, horizontal }) {
    const [lightBoxImg, setLightBoxImg] = useState(null)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)

    const finalPrice = countPriceWithDiscount(data.price, data.discount)



    return (
        <div className={`swiper-slide-content ${horizontal && 'horizontal'}`}>
            <div className="sell-item-img">
                <a href="#">
                    <img src={data.img} alt="" />
                </a>
            </div>
            <div className="sell-item-info">
                <h3 className="sell-item-title">
                    <a href="#" >
                        The Last of Us: Part 1
                    </a>
                </h3>
                <div className="sell-item-bottom">
                    <div className="svg-container system-required">
                        <svg>
                            <use xlinkHref="images/sprite.svg#windows_icon"></use>
                        </svg>
                    </div>
                    {data.expDate &&
                        <div className="expire-date">
                            {data.expDate}
                        </div>
                    }
                    {data.discount ?
                        <div className="price-block">
                            <div className="discount-banner">
                                {`-${data.discount}%`}
                            </div>
                            <div className="discount-prices">
                                <div className="discount-original-price">
                                    {`$${data.price}`}
                                </div>
                                <div className="discount_final_price">
                                    {`$${finalPrice}`}
                                </div>
                            </div>
                        </div>
                        :
                        <div className="original-price">
                            {`$${data.price}`}
                        </div>
                    }
                    <button className='wish-btn'>
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