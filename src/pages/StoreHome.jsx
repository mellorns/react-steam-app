import { NavLink } from 'react-router'
import Slider from '../components/common/Slider'
import '../assets/styles/slider.scss'



export default function StoreHome() {
    return (
        <>
            <div className='hero-section'>
                <NavLink to='/'>
                    <img src="images/hero_img.png" alt="" />
                </NavLink>
            </div>
            <section className='featured-section'>
                <div className="container">
                    <h2 className='section-header'>Featured</h2>
                    <div className='swiper-container'>
                        <Slider />
                    </div>

                </div>
            </section>
        </>
    )
}