import MySlider from "../common/MySlider";
import FreeToPlaySlide from "../slides/FreeToPlaySlide";

export default function FreeToPlaySection() {

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
        <section className='slider-section free-toPlay-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Free-to-Play Games</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
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