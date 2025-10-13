import ProfileMainContent from "./ProfileMainContent";
import ProfileSideBar from "./ProfileSideBar";

export default function ProfileMain({friends, games,recentlyPlayed}) {
    return (
        <div className="profile-main" role="main">
            <div className="profile-main-container">
                <ProfileMainContent games={games} recentlyPlayed={recentlyPlayed}/>
                <ProfileSideBar friends={friends}  games={games}/>
            </div>
        </div>
    )
}