import '../../assets/styles/site-footer.scss'

export default function SiteFooter() {
    return (
        <footer>
            <div className="container">
                <div className='footer-info'>
                    <div className='footer-links'>
                        <div className="img-container">
                            <a href="#">
                                <img src="images/valve_footer_logo.png" alt="" />
                            </a>
                        </div>
                        <div className="img-container">
                            <a href="#">
                                <img src="images/steam_footer_logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='footer-text'>
                        © 2023 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
                        VAT included in all prices where applicable.
                    </div>
                </div>
                <div className='footer-navigation'>
                    <ul>
                        <li>
                            <a href="#">About Valve</a>
                        </li>
                        <li>
                            <a href="#">Jobs</a>
                        </li>
                        <li>
                            <a href="#">Steamworks</a>
                        </li>
                        <li>
                            <a href="#">Steam Distribution</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-navigation'>
                    <ul>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Legal</a>
                        </li>
                        <li>
                            <a href="#">Steam Subscriber Agreement</a>
                        </li>
                        <li>
                            <a href="#">Refunds</a>
                        </li>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-soc-list'>
                    <ul>
                        <li>
                            <a href="#">
                                <div className="svg-container">
                                    <svg>
                                        <use xlinkHref="images/sprite.svg#facebook-icon"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="svg-container">
                                    <svg>
                                        <use xlinkHref="images/sprite.svg#twitter-icon"></use>
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>


            </div>
        </footer>
    )
}