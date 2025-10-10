import { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileMain from "../components/profile/ProfileMain";

export default function Profile() {

    const [profileData, setProfileData] = useState({})
    const [userGameData, setUserGameData] = useState({})


    const BASE_URL = "http://localhost:3000/api/steam";
    const STEAM_ID = "76561198297315433";

    useEffect(() => {
        async function loadProfile() {
            const res = await fetch(`${BASE_URL}/profile/${STEAM_ID}`);
            const data = await res.json();
            console.log("👤 Профіль:", data);
        }

        async function loadGames() {
            const res = await fetch(`${BASE_URL}/games/${STEAM_ID}`);
            const data = await res.json();
            console.log("🎮 Ігри:", data);
        }

        loadProfile();
        loadGames();
    }, []);




    return (
        <div className="profile-page">
            <div className="container">
                <ProfileHeader data={profileData} />
                <ProfileMain data={userGameData} />

            </div>
        </div>
    )
}