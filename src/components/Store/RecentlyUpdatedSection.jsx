import { useEffect, useState } from "react";
import MySlider from "../common/MySlider";
import RecentlyUpdatedSectionSlide from "../slides/RecentlyUpdatedSectionSlide";
import NoPageFound from "../common/NoPageFound";
import Loader from "../common/Loader";

export default function RecentlyUpdatedSection() {

    const [data, setData] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            const resp = await fetch('data/RecentlyUpdatedSection.json')
            const data = await resp.json()
            setData(data)
        }
        loadData()
    }, [])

    const config = {
        slidesToShow: 4,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }

    if (!data) return <Loader />

    return (
        <section className='recently-updated-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Recently Updated</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        {data.map((item, i) => {
                            return <RecentlyUpdatedSectionSlide data={item} key={i} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}