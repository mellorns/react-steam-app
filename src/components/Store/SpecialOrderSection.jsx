import MySlider from "../common/MySlider";
import SpecialOrderSlide from "../slides/SpecialOrderSlide";

export default function SpecialOrderSection() {
    return (
        <section className='special-offers-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Special Offers</h2>
                    <a href="#">See more</a>
                </div>

                <div className='swiper-container'>
                    <MySlider slides={3} spaceBetween={20}>
                        <SpecialOrderSlide />
                        <SpecialOrderSlide />
                        <SpecialOrderSlide />
                        <SpecialOrderSlide />
                    </MySlider>
                </div>
            </div>
        </section>
    )
}