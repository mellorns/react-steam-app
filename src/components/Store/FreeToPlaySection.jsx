import { useEffect, useState } from "react";
import MySlider from "../common/MySlider";
import FreeToPlaySlide from "../slides/FreeToPlaySlide";
import NoPageFound from "../common/NoPageFound";

export default function FreeToPlaySection() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const resp = await fetch('data/FreeToPlaySection.json')
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
        <section className='slider-section free-toPlay-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Free-to-Play Games</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        {data.map((item, i) => {
                            return <FreeToPlaySlide data={item} key={i} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}