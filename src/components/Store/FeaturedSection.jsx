import MySlider from "../common/MySlider";
import FeaturedSlide from "../slides/FeaturedSlide";

export default function FeaturedSection() {
    return (
        <section className='featured-section'>
            <div className="container">
                <h2 className='section-header'>Featured</h2>
                <div className='swiper-container'>
                    <MySlider slides={1}>
                        <FeaturedSlide />
                        <FeaturedSlide />
                        <FeaturedSlide />
                    </MySlider>
                </div>
            </div>
        </section>
    )
}