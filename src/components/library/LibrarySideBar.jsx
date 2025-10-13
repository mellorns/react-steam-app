import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";


export default function LibrarySideBar({ changeSidebarWidth, data, onSelect }) {




    const resize = useRef(false)

    useEffect(() => {
        function resizeSidebar(e) {
            if (!resize.current) return
            if (e.clientX > 390) return
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
                    {data.map(item => {
                        return <li key={item.appid}>
                            <NavLink to={`/library/${item.appid}`} onClick={() => onSelect(item.appid)}>
                                <div className="img-container">
                                    <img src={`https://media.steampowered.com/steamcommunity/public/images/apps/${item.appid}/${item.img_icon_url}.jpg`} alt={item.name} />
                                </div>
                                <div className="game-title">{item.name}</div>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
            <div className="sidebar-resize-handle" onMouseDown={handleResize}></div>
        </div>
    )
}