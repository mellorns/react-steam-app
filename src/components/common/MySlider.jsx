import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
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

export default function MySlider({ children, slides = 1, rows = 1, slidesPerRow = 1 }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        dots: true,
        rows: rows,
        slidesPerRow: slidesPerRow,
        dotsClass: "slick-dots slick-thumb",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );

}
