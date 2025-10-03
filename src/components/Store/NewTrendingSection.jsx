import MySlider from "../common/MySlider";
import SellCardSlide from "../slides/SellCardSlide";

export default function NewTrendingSection() {



    const data = [
        {
            img: 'images/sell_item_img_1.png',
            title: 'Cities Skylines II',
            price: '49.99',
        },
        {
            img: 'images/sell_item_img_1.png',
            title: 'Cities Skylines II',
            price: '49.99',
        },
        {
            img: 'images/sell_item_img_1.png',
            title: 'Cities Skylines II',
            price: '49.99',
        },
    ]
    return (
        <section className='new-trading-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>New & Trending</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider slides={3}>
                        {data.map((item, i) => {
                            return <SellCardSlide data={item} key={i}/>
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}