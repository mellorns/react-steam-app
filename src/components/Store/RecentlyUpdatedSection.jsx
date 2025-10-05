import MySlider from "../common/MySlider";
import RecentlyUpdatedSectionSlide from "../slides/RecentlyUpdatedSectionSlide";

export default function RecentlyUpdatedSection() {


    const config = {
        slidesToShow: 4,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }
    return (
        <section className='recently-updated-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Recently Updated</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        <RecentlyUpdatedSectionSlide />
                        <RecentlyUpdatedSectionSlide />
                        <RecentlyUpdatedSectionSlide />
                        <RecentlyUpdatedSectionSlide />
                        <RecentlyUpdatedSectionSlide />
                    </MySlider>
                </div>
            </div>
        </section>
    )
}