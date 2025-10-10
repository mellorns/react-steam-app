import { NavLink } from "react-router";
import ProfileMainContent from "./ProfileMainContent";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileMain({data}) {
    return (
        <div className="profile-main" role="main">
            <div className="profile-main-container">
                <ProfileMainContent data={data}/>
                <ProfileSideBar />
            </div>
        </div>
    )
}