import MySlider from "../common/MySlider";
import BrowseSteamSectionSlide from "../slides/BrowseSteamSectionSlide";

export default function BrowseSteamSection() {


    const data = [
        {
            img: 'images/genre_action_img.png',
            title: 'action'
        },
        {
            img: 'images/genre_action_img.png',
            title: 'RPG'
        },
        {
            img: 'images/genre_action_img.png',
            title: 'Free to play'
        },
        {
            img: 'images/genre_action_img.png',
            title: 'Co-Op'
        },
        {
            img: 'images/genre_action_img.png',
            title: 'Anime'
        },
        {
            img: 'images/genre_action_img.png',
            title: 'Horror'
        },
    ]

    return (
        <section className='browse-steam-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Browse Steam</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider slides={5} spaceBetween={20}>
                        {data.map((item, i) => {
                            return <BrowseSteamSectionSlide data={item} key={i} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}