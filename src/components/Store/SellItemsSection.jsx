import MySlider from "../common/MySlider";
import SellCardSlide from "../slides/SellCardSlide";

export default function SellItemsSection() {


    const data = [
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            expDate: 'Until Oct 31',
            discount: '75',
            price: '19.99',
        },
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            expDate: 'Until Oct 31',
            discount: '75',
            price: '19.99',
        },
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            expDate: 'Until Oct 31',
            discount: '75',
            price: '19.99',
        },
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            expDate: 'Until Oct 31',
            discount: 75,
            price: 19.99,
        },
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            expDate: 'Until Oct 31',
            discount: 75,
            price: 19.99,
        },
        {
            img: 'images/sell_item_img_3.png',
            title: 'American Truck Simulator',
            expDate: 'Until Oct 31',
            discount: 75,
            price: 19.99,
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
        <section className='special-offers-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Under $5</h2>
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