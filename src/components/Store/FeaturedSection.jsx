import MySlider from "../common/MySlider";
import FeaturedSlide from "../slides/FeaturedSlide";

export default function FeaturedSection() {




    const config = {
        slidesToShow: 1,
        rows: 1,
        slidesPerRow: 1,
    }
    
    return (
        <section className='featured-section'>
            <div className="container">
                <h2 className='section-header'>Featured</h2>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        <FeaturedSlide />
                        <FeaturedSlide />
                        <FeaturedSlide />
                    </MySlider>
                </div>
            </div>
        </section>
    )
}