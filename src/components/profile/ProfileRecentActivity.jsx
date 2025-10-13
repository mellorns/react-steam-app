import ProfileRecentActivityItem from "./ProfileRecentActivityItem";

export default function ProfileRecentActivity({ recentlyPlayed }) {


    const playtime_2weeks = ((recentlyPlayed.reduce((accum, current) => accum + current.playtime_2weeks, 0)) / 60).toFixed(2)
    return (
        <section className="items-container recent-activity-section">
            <div className="container-header">
                <h2>Recent Activity</h2>
                <p>{playtime_2weeks} Hrs</p>
            </div>
            {recentlyPlayed.map((item, index) => {
                return <ProfileRecentActivityItem item={item} key={index} />
            })}
        </section>
    )
}