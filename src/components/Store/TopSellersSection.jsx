import MySlider from "../common/MySlider";
import SellCardSlide from "../slides/SellCardSlide";

export default function TopSellersSection() {



    const data = [
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
        {
            img: 'images/sell_item_img_2.png',
            title: 'Baldur’s Gate',
            price: '59.99',
        },
    ]

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