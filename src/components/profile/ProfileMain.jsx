import { NavLink } from "react-router";
import ProfileMainContent from "./ProfileMainContent";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileMain() {
    return (
        <div className="profile-main" role="main">
            <div className="profile-main-container">
                <ProfileMainContent />
                <ProfileSideBar />
            </div>
        </div>
    )
}