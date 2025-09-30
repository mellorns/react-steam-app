import { Outlet } from "react-router";
import StoreHeader from "../components/Store/StoreHeader";

export default function StoreLayout() {
    return (
        <>
            <StoreHeader />
            <Outlet />
        </>
    )
}