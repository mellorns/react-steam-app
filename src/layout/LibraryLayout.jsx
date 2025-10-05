import { Outlet } from "react-router";
import LibraryHeader from "../components/library/LibraryHeader";
import LibrarySideBar from "../components/library/LibrarySideBar";


export default function LibraryLayout() {
    return (
        <>
            <LibraryHeader />
            <LibrarySideBar />
            <Outlet />
        </>
    )
}