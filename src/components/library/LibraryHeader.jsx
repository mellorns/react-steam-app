import { useState } from 'react'
import { NavLink } from 'react-router'
import Overlay from '../common/Overlay'


export default function LibraryHeader() {


    const [isOpen, setIsOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)


    const openOverlay = () => {
        setIsSearchOpen(true)
    }
    const closeeOverlay = () => {
        setIsSearchOpen(false)
    }

    return (
        <div className={`store-header ${isSearchOpen ? 'search-open' : ''}`}>
            <div className='store-header-left'>
                <ul className="store-header-navigation">
                    <li>
                        <NavLink className='store-navigation-link' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='store-navigation-link' to="/browse">Browse</NavLink>
                    </li>
                    <li>
                        <NavLink className='store-navigation-link' to="/discover">Discover</NavLink>
                    </li>
                    <li>
                        <NavLink className='store-navigation-link' to="/point_shop">Points Shop</NavLink>
                    </li>
                </ul>
                <div className='more' onMouseLeave={() => setIsOpen(false)}>
                    <button className='more-btn' onClick={() => setIsOpen(!isOpen)}>
                        <span>More</span>
                        <div className='svg-container'>
                            <svg className='arrow-down'>
                                <use xlinkHref="images/sprite.svg#arrow"></use>
                            </svg>
                        </div>
                    </button>

                    <div className={`more-dropdown ${isOpen ? 'isOpen' : ''}`} >
                        <ul className="store-header-navigation">
                            <li>
                                <NavLink className='store-navigation-link' to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='store-navigation-link' to="/browse">Browse</NavLink>
                            </li>
                            <li>
                                <NavLink className='store-navigation-link' to="/discover">Discover</NavLink>
                            </li>
                            <li>
                                <NavLink className='store-navigation-link' to="/point_shop">Points Shop</NavLink>
                            </li>
                            <li>
                                <NavLink className='store-navigation-link' to="/curators">Curators</NavLink>
                            </li>
                            <li>
                                <NavLink className='store-navigation-link' to="/gift_cards">Gift Cards</NavLink>
                            </li>
                            <li>
                                <NavLink className='store-navigation-link' to="/news">News</NavLink>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
            <Overlay handleClick={closeeOverlay} isActive={isSearchOpen} />
            <div className='search-form-container' onClick={openOverlay}>
                <form action="">
                    <input type="search" name="store_search" id="store_search" placeholder='Search...' />
                    <button type='submit'>
                        <div className='svg-container'>
                            <svg>
                                <use xlinkHref="images/sprite.svg#search-icon"></use>
                            </svg>
                        </div>
                    </button>
                </form>
            </div>
            <div className='store-header-rigth'>
                <ul className="store-header-navigation">
                    <li>
                        <NavLink className='store-navigation-link' to="/whishlist">Wishlist</NavLink>
                    </li>
                    <li>
                        <NavLink className='store-navigation-link' to="/cart">Cart</NavLink>
                    </li>
                </ul>
                <button className='setting-btn'>
                    <div className='svg-container'>
                        <svg>
                            <use xlinkHref="images/sprite.svg#settings-icon"></use>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}