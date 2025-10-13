import { Outlet, useNavigate, useParams } from "react-router";
import LibraryHeader from "../components/library/LibraryHeader";
import LibrarySideBar from "../components/library/LibrarySideBar";
import '../assets/styles/library/library-home.scss'
import { useEffect, useState } from "react";
import { useGamesStore } from "../store/useGamesStore";
import Loader from "../components/common/Loader";


export default function LibraryLayout() {

    const [sidebarWidth, setSideBarWidth] = useState(390)

    const { appid } = useParams();
    const navigate = useNavigate();
    const { games } = useGamesStore();



    useEffect(() => {
        if (games && games.length > 0 && !appid) {
            navigate(`/library/${games[0].appid}`, { replace: true });
        }
    }, [games, appid, navigate]);
    if (!games) return <Loader />
    return (
        <div className="library-layout" style={{ gridTemplateColumns: `${sidebarWidth}px 1fr` }}>
            <LibraryHeader />
            <LibrarySideBar data={games} changeSidebarWidth={setSideBarWidth} onSelect={(appid) => navigate(`/library/${appid}`)} />
            <Outlet />
        </div>
    )
}