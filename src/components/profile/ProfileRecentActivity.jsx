import ProfileRecentActivityItem from "./ProfileRecentActivityItem";

export default function ProfileRecentActivity() {
    return (
        <section className="items-container recent-activity-section">
            <div className="container-header">
                <h2>Recent Activity</h2>
                <p>15h past 2 weeks</p>
            </div>
          <ProfileRecentActivityItem />
          <ProfileRecentActivityItem />
          <ProfileRecentActivityItem />
        </section>
    )
}