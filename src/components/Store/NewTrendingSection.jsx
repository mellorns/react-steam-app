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
    return (
        <section className='new-trading-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>New & Trending</h2>
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