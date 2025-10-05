import MySlider from "../common/MySlider";
import SellCardSlide from "../slides/SellCardSlide";

export default function SpecialOrderSection() {


    const data = [
        {
            img: 'images/special_offer_1_img.png',
            title: 'The Last of Us: Part 1',
            expDate: 'Until Nov 2',
            discount: 20,
            price: 59.99,
        },
        {
            img: 'images/special_offer_1_img.png',
            title: 'The Last of Us: Part 1',
            expDate: 'Until Nov 2',
            discount: 20,
            price: 59.99,
        },
        {
            img: 'images/special_offer_1_img.png',
            title: 'The Last of Us: Part 1',
            expDate: 'Until Nov 2',
            discount: 20,
            price: 59.99,
        },
        {
            img: 'images/special_offer_1_img.png',
            title: 'The Last of Us: Part 1',
            expDate: 'Until Nov 2',
            discount: 20,
            price: 59.99,
        },
        {
            img: 'images/special_offer_1_img.png',
            title: 'The Last of Us: Part 1',
            expDate: 'Until Nov 2',
            discount: 20,
            price: 59.99,
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
                    <h2>Special Offers</h2>
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