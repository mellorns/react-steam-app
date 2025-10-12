import MySlider from "../common/MySlider";
import SellCardSlide from "../slides/SellCardSlide";
import { useEffect, useState } from "react";
import NoPageFound from "../common/NoPageFound";

export default function TopSellersSection() {


    const [data, setData] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const resp = await fetch('data/TopSellersSection.json')
            const data = await resp.json()
            setData(data)
        }
        loadData()
    }, [])

    const config = {
        rows: 3,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 20000,
                settings: {
                    slidesPerRow: 2,
                    rows: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesPerRow: 1,
                    rows: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                }
            },
        ]
    }

    if (!data) return <NoPageFound />
    return (
        <section className='top-sellers-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Top Sellers</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        {data.map((item, i) => {
                            return (
                                <div key={i} className="row-item">
                                    <SellCardSlide data={item} horizontal={true} />
                                </div>
                            )
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}