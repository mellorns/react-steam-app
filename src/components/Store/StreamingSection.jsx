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

    return (
        <section className='streaming-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Games Streaming Now</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider slides={3}>
                        {data.map((item, i) => {
                            return <StreamingSlide data={item} key={i} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}