import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileMain from "../components/profile/ProfileMain";

export default function Profile() {
    return (
        <div className="profile-page">
            <div className="container">
                <ProfileHeader />
                <ProfileMain />
               
            </div>
        </div>
    )
}