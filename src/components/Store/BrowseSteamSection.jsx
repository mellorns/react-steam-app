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


    const config = {
        slidesToShow: 5,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }


    return (
        <section className='browse-steam-section'>
            <div className="container">
                <div className='section-header'>
                    <h2>Browse Steam</h2>
                    <a href="#">See more</a>
                </div>
                <div className='swiper-container'>
                    <MySlider config={config}>
                        {data.map((item, i) => {
                            return <BrowseSteamSectionSlide data={item} key={i} />
                        })}
                    </MySlider>
                </div>
            </div>
        </section>
    )
}