import { useEffect, useState } from "react";
import NoPageFound from "../common/NoPageFound";
import MySlider from "../common/MySlider";
import SellCardSlide from "../slides/SellCardSlide";


export default function SpecialOrderSection() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const resp = await fetch('data/SpecialOrderSection.json')
            const data = await resp.json()
            setData(data)
        }
        loadData()
    }, [])



    const config = {
        slidesToShow: 3,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }


    if (!data) return <NoPageFound />

    return (
        <section className='special-offers-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Special Offers</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        {data.map((item, i) => {
                            return <SellCardSlide data={item} key={i} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}