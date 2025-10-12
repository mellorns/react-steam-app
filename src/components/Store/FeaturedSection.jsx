import { useEffect, useState } from "react";
import MySlider from "../common/MySlider";
import FeaturedSlide from "../slides/FeaturedSlide";
import NoPageFound from "../common/NoPageFound";

export default function FeaturedSection() {
    const [data, setData] = useState(null)


    const config = {
        slidesToShow: 1,
        rows: 1,
        slidesPerRow: 1,
    }
    useEffect(() => {
        const loadData = async () => {
            const resp = await fetch('data/featuredSetcion.json')
            const data = await resp.json()
            setData(data)
        }
        loadData()
    }, [])

    if(!data) return <NoPageFound />

    return (
        <section className='featured-section'>
            <div className="container">
                <h2 className='section-header'>Featured</h2>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        {data.map((item, i) => {
                            return <FeaturedSlide data={item} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}