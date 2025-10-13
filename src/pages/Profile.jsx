import { useParams } from "react-router";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileMain from "../components/profile/ProfileMain";
import { useProfileStore } from "../store/useProfileStore";
import { useGamesStore } from "../store/useGamesStore";
import { useFriendsStore } from "../store/useFriendsStore";
import { useRecentlyPlayedStore } from "../store/useRecentlyPlayedStore";

export default function Profile() {

    const { profile, error } = useProfileStore();
    const { games } = useGamesStore();
    const { friends } = useFriendsStore()
    const { recentlyPlayed } = useRecentlyPlayedStore()
    console.log(recentlyPlayed);
    
    if (error) return <p>Помилка: {error}</p>;
    if (!profile || !friends) return <p>Завантаження...</p>;



    return (
        <div className="profile-page">
            < div className="container" >
                <ProfileHeader data={profile} />
                <ProfileMain  friends={friends} games={games} recentlyPlayed={recentlyPlayed}/>
            </div >
        </div >
    )

}