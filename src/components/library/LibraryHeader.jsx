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
        <div className={`library-header ${isSearchOpen ? 'search-open' : ''}`}>
            <div className='library-header-left'>
                <ul className="library-header-navigation">
                    <li>
                        <NavLink className='library-navigation-link' to="/library">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='library-navigation-link' to="/browse">Collections</NavLink>
                    </li>
                    <li>
                        <NavLink className='library-navigation-link' to="/discover">News and Updates</NavLink>
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
                        <ul className="library-header-navigation">
                            <li>
                                <NavLink className='library-navigation-link' to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='library-navigation-link' to="/browse">Browse</NavLink>
                            </li>
                            <li>
                                <NavLink className='library-navigation-link' to="/discover">Discover</NavLink>
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
            <div className='library-header-rigth'>
                <ul className='filters-list'>
                    <li>
                        <div className='svg-container'>
                            <svg>
                                <use xlinkHref="images/sprite.svg#filter_icon"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <svg>
                                <use xlinkHref="images/sprite.svg#clock_icon"></use>
                            </svg>
                        </div>
                    </li>
                    <li>
                        <div className='svg-container'>
                            <svg>
                                <use xlinkHref="images/sprite.svg#play_icon"></use>
                            </svg>
                        </div>
                    </li>
                </ul>
                <div className='change-view-block'>
                    <span>View</span>
                    <ul className='view-list'>
                        <li className='active'>
                            <div className='svg-container'>
                                <svg>
                                    <use xlinkHref="images/sprite.svg#grid_view1"></use>
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className='svg-container'>
                                <svg>
                                    <use xlinkHref="images/sprite.svg#grid_view"></use>
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className='svg-container'>
                                <svg>
                                    <use xlinkHref="images/sprite.svg#grid_view3"></use>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>

                <ul className="library-header-navigation">
                    <li>
                        <NavLink className='library-navigation-link' to="/">Activate a Product</NavLink>
                    </li>
                    <li>
                        <NavLink className='library-navigation-link' to="/">Add a non-Steam Game</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    )
}