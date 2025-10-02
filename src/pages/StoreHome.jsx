import { NavLink } from 'react-router'
import '../assets/styles/slider.scss'
import FeaturedSection from '../components/Store/FeaturedSection'
import SpecialOrderSection from '../components/Store/SpecialOrderSection'
import BrowseSteamSection from '../components/Store/BrowseSteamSection'




export default function StoreHome() {
    return (
        <>
            <div className='hero-section'>
                <NavLink to='/'>
                    <img src="images/hero_img.png" alt="" />
                </NavLink>
            </div>
            <FeaturedSection />
            <SpecialOrderSection />
            <BrowseSteamSection />
        </>
    )
}