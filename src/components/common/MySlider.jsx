import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <button className="custom-next" onClick={onClick}>
            <svg>
                <use xlinkHref="images/sprite.svg#arrow"></use>
            </svg>
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button className="custom-prev" onClick={onClick}>
            <svg>
                <use xlinkHref="images/sprite.svg#arrow"></use>
            </svg>
        </button>
    );
}


export default function MySlider({ children, config }) {

    // const [settings, setSettings] = useState({
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     rows: 1,
    //     slidesPerRow: 1,
    //     dotsClass: "slick-dots slick-thumb",
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     ...config
    // })

    // useEffect(() => {
    //     let slides = settings.slidesToShow
    //     settings.responsive.forEach((brkp) => {
    //         if (brkp.breakpoint >= window.innerWidth) {
    //             slides = brkp.settings.slidesToShow
    //         }
    //     })
    //     setSettings({ ...settings, slidesToShow: slides })
    // }, [])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        rows: 1,
        slidesPerRow: 1,
        dotsClass: "slick-dots slick-thumb",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [],
        ...config
    }

    settings.responsive.forEach((brkp) => {
        if (brkp.breakpoint >= window.innerWidth) {
            settings.slidesToShow = brkp.settings.slidesToShow || settings.slidesToShow
            settings.rows = brkp.settings.rows ||  settings.rows 
            settings.slidesPerRow = brkp.settings.slidesPerRow ||  settings.slidesPerRow 
        }
    })

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );

}
