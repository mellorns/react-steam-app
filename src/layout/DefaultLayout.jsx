import { NavLink, Outlet } from "react-router";
import SiteHeader from "../components/common/SiteHeader";
import SiteFooter from "../components/common/SiteFooter";

export default function DefaultLayout() {
    return (
        <div className="page-wrapper">
            <SiteHeader />
            <main>
                <Outlet />
            </main>
            <SiteFooter />
        </div>
    )
}