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

    return (
        <section className='special-offers-section slider-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Special Offers</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider slides={3} spaceBetween={20}>
                        {data.map((item, i) => {
                            return <SellCardSlide data={item} key={i}/>
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}