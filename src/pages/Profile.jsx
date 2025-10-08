import { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileMain from "../components/profile/ProfileMain";

export default function Profile() {


    const BASE_URL = "http://localhost:3000/api/steam";

    const STEAM_ID = '76561198297315433'

    const [profileData, setProfileData] = useState(null)


    useEffect(() => {
        async function loadSteamProfile() {
            const res = await fetch(`${BASE_URL}/profile/${STEAM_ID}`);
            const data = await res.json();
            console.log("👤 Профіль:", data);
            setProfileData(data)
        }

        loadSteamProfile();
    }, []);


    return (
        <div className="profile-page">
            <div className="container">
                <ProfileHeader data={profileData} />
                <ProfileMain />

            </div>
        </div>
    )
}