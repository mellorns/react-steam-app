import { Outlet } from "react-router";
import LibraryHeader from "../components/library/LibraryHeader";
import LibrarySideBar from "../components/library/LibrarySideBar";

import '../assets/styles/library/library-home.scss'
import { useState } from "react";


export default function LibraryLayout() {

    const [sidebarWidth, setSideBarWidth] = useState(390)

    return (
        <div className="library-layout" style={{ gridTemplateColumns: `${sidebarWidth}px 1fr` }}>
            <LibraryHeader />
            <LibrarySideBar changeSidebarWidth={setSideBarWidth}/>
            <Outlet />
        </div>
    )
}