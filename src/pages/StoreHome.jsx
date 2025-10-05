import { NavLink } from 'react-router'
import '../assets/styles/slider.scss'
import FeaturedSection from '../components/Store/FeaturedSection'
import SpecialOrderSection from '../components/Store/SpecialOrderSection'
import BrowseSteamSection from '../components/Store/BrowseSteamSection'
import FreeToPlaySection from '../components/Store/FreeToPlaySection'
import RecentlyUpdatedSection from '../components/Store/RecentlyUpdatedSection'
import NewTrendingSection from '../components/Store/NewTrendingSection'
import TopSellersSection from '../components/Store/TopSellersSection'
import SellItemsSection from '../components/Store/SellItemsSection'
import StreamingSection from '../components/Store/StreamingSection'




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
            <FreeToPlaySection />
            <RecentlyUpdatedSection />
            <NewTrendingSection />
            <TopSellersSection />
            <SellItemsSection />
            <StreamingSection />
        </>
    )
}