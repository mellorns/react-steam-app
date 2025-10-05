import MySlider from "../common/MySlider";
import SellCardSlide from "../slides/SellCardSlide";
import StreamingSlide from "../slides/StreamingSlide";

export default function StreamingSection() {


    const data = [
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            viewers: 20,
        },
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            viewers: 20,

        },
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            viewers: 20,
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
        <section className='streaming-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Games Streaming Now</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        {data.map((item, i) => {
                            return <StreamingSlide data={item} key={i} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}