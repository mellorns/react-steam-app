import { useEffect, useState } from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileMain from "../components/profile/ProfileMain";
import { SteamAPI } from "../hooks/useFetchSteam";

export default function Profile() {
    const STEAM_ID = "76561198297315433";

    const {data: profileData, error} = SteamAPI.getProfile(STEAM_ID)

    return (
        <div className="profile-page">
            <div className="container">
                <ProfileHeader data={profileData} />
                <ProfileMain data={profileData} />
            </div>
        </div>
    )
}