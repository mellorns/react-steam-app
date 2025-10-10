import { NavLink } from "react-router";
import LibraryHeroSection from "../../components/library/LibraryHeroSection";
import ResponsiveList from "../../components/common/ResponsiveList";


const achievmentsGainerList = [
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },

]
const achievmentsLockedList = [
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },
    {
        img: "images/achievements_img_1.png"
    },

]




export default function LibraryHome() {

    return (
        <div className="library-main">
            <LibraryHeroSection />
            <div className="game-content-section">
                <ul className="game-content-navigation-list">
                    <li>
                        <NavLink to={'/'}>Store Page</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>DLCs</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>Community</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>Discussions</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>Workshop</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>Guides</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>Support</NavLink>
                    </li>
                </ul>
                <div className="information-block">
                    <section className="friends-played-section">
                        <h3 className="section-header">Friends who play this game</h3>
                        <ul className="friends-played-list">
                            <li>
                                <a href="#">
                                    <div className="friend-profile-avatar avatar-outline">
                                        <img src="images/mini-profile.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="friend-profile-avatar avatar-outline">
                                        <img src="images/mini-profile.png" alt="" />
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="friend-profile-avatar avatar-outline">
                                        <img src="images/mini-profile.png" alt="" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="achievements-section">
                        <div>
                            <h3 className="section-header">Achievements</h3>
                            <ResponsiveList items={achievmentsGainerList} />
                        </div>
                        <div>
                            <h3 className="achievements-list-header">Locked Achievements</h3>
                            <ResponsiveList items={achievmentsLockedList} />

                        </div>
                    </section>
                    <section>
                        <h3 className="section-header">Screenshots</h3>
                        <ul className="screenshots-list">
                            <li>
                                <div className="img-container">
                                    <img src="images/srceenshot_img_1.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <img src="images/srceenshot_img_1.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <img src="images/srceenshot_img_1.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <img src="images/srceenshot_img_1.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <img src="images/srceenshot_img_1.png" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="">
                                    <img src="images/srceenshot_img_1.png" alt="" />
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
                <section className="activity-section">
                    <h3 className="activity-section-header">Activity</h3>
                    <ul className="activity-updates-list">
                        <li>
                            <div className="activity-updates-time">
                                <time dateTime="13.07.2025">Oct 13</time>
                            </div>
                            <div className="activity-updates-block">
                                <div className='svg-container'>
                                    <svg >
                                        <use xlinkHref="images/sprite.svg#tools_icon"></use>
                                    </svg>
                                </div>
                                <div className="activity-updates-info">
                                    <p className="activity-updates-title">
                                        Small Update
                                    </p>
                                    <p className="activity-updates-text">
                                        It’s just a small but noteworthy update~
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="activity-updates-time">
                                <time dateTime="">Oct 13</time>
                            </div>
                            <div className="activity-updates-block">
                                <div className='svg-container'>
                                    <svg >
                                        <use xlinkHref="images/sprite.svg#tools_icon"></use>
                                    </svg>
                                </div>
                                <div className="activity-updates-info">
                                    <p className="activity-updates-title">
                                        Small Update
                                    </p>
                                    <p className="activity-updates-text">
                                        It’s just a small but noteworthy update~
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    )
}