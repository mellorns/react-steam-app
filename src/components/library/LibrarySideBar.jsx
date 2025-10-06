import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";


export default function LibrarySideBar({ changeSidebarWidth }) {




    const resize = useRef(false)

    useEffect(() => {
        function resizeSidebar(e) {
            if (!resize.current) return
            if(e.clientX > 390) return
            changeSidebarWidth(Math.max(220, e.clientX))
        }

        function onMouseUpHandler() {
            resize.current = false
        }

        window.addEventListener('mousemove', resizeSidebar)
        window.addEventListener('mouseup', onMouseUpHandler)

        return () => {

            window.removeEventListener('mousemove', resizeSidebar)
            window.removeEventListener('mouseup', onMouseUpHandler)
        }
    }, [])

    function handleResize() {
        resize.current = true
    }


    return (
        <div className="library-sidebar custom-scroll">
            <div className="sidebar-container">
                <ul className="sidebar-navigation-list">
                    <li>
                        <NavLink to={'/library'} title="Bioshock">
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <div className="game-title">Bioshock</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <div className="img-container">
                                <img src="images/game_img_mini_1.png" alt="" />
                            </div>
                            <span>Bioshock</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="sidebar-resize-handle" onMouseDown={handleResize}></div>
        </div>
    )
}