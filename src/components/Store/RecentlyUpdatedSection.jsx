import MySlider from "../common/MySlider";
import RecentlyUpdatedSectionSlide from "../slides/RecentlyUpdatedSectionSlide";

export default function RecentlyUpdatedSection() {
    return (
        <section className='recently-updated-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Recently Updated</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider slides={4}>
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