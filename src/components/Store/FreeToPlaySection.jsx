import MySlider from "../common/MySlider";
import FreeToPlaySlide from "../slides/FreeToPlaySlide";

export default function FreeToPlaySection() {
    return (
        <section className='slider-section free-toPlay-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Free-to-Play Games</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider slides={3}>
                        <FreeToPlaySlide />
                        <FreeToPlaySlide />
                        <FreeToPlaySlide />
                        <FreeToPlaySlide />
                    </MySlider>
                </div>
            </div>
        </section>
    )
}