import { NavLink, useParams } from "react-router";
import LibraryHeroSection from "../../components/library/LibraryHeroSection";
import ResponsiveList from "../../components/common/ResponsiveList";
import { useFetchSteam } from "../../hooks/useFetchSteam";
import { createSlug } from "../../helpers/helper";
import { useState } from "react";
import { SteamAPI } from "../../api/steamApi";
import { useGamesStore } from "../../store/useGamesStore";
import Loader from "../../components/common/Loader";


export default function LibraryHome() {

    const [lightBoxImg, setLightBoxImg] = useState(null)

    const openLigthBox = (src) => setLightBoxImg(src)
    const closeLigthBox = () => setLightBoxImg(null)

    const { appid } = useParams();
    const { data, error } = useFetchSteam(SteamAPI.getGame, appid)
    const { games } = useGamesStore();


    if (!data) return  <Loader />
    if (error) return <div>{error}</div>


    const currentGame = games.filter(item => item.appid === data.steam_appid)



    return (
        <div className="library-main">
            <LibraryHeroSection name={data.name} backgroundUrl={data.header_image} playtime_forever={currentGame[0].playtime_forever} />
            <div className="game-content-section">
                <ul className="game-content-navigation-list">
                    <li>
                        <NavLink to={`/game/${data.steam_appid}/${createSlug(data.name)}`}>Store Page</NavLink>
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
                            {data.achievements && <ResponsiveList achievements={data.achievements} />}
                        </div>
                        <div>
                            <h3 className="achievements-list-header">Locked Achievements</h3>
                            {data.achievements && <ResponsiveList achievements={data.achievements} />}
                        </div>
                    </section>
                    <section className="screenshots-section">
                        <h3 className="section-header">Screenshots</h3>
                        <ul className="screenshots-list">
                            {data.screenshots.map(item => {
                                return <li key={item.id}>
                                    <div className="img-container">
                                        <img src={item.path_thumbnail} alt="" onClick={() => openLigthBox(item.path_full)} />
                                    </div>
                                </li>
                            })}
                        </ul>
                        {lightBoxImg &&
                            <div className='ligthBox' onClick={closeLigthBox}>
                                <img src={lightBoxImg} alt="" />
                            </div>
                        }
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