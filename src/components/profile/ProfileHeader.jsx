export default function ProfileHeader({ data = {}}) {


    return (
        <div className="profile-header">
            <div className="profile-header-content">
                <div className="profile-header-avatar">
                    <div className="profile-header-avatar-frame">
                        <img src={data?.avatarfull ? data.avatarfull : 'images/avatar.png'} alt="" />
                    </div>
                </div>
                <div className="profile-header-user-info">
                    <div className="profile-header-user-name">
                        <span>{data?.personaname}</span>
                        <button>
                            <div className='svg-container'>
                                <svg className='arrow-down'>
                                    <use xlinkHref="images/sprite.svg#arrow"></use>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="profile-header-user-descr">
                        I’m Jux, and this is my favorite spot on Steam!
                    </div>
                </div>
                <div className="profile-account-info">
                    <div className="profile-header-edit-btn">
                        <button className="btn">
                            Edit Profile
                        </button>
                    </div>
                    <div className="profile-header-achievements">
                        <div className="profile-header-user-lvl">
                            <div className="profile-header-lvl-progress">
                                <span>60</span>
                            </div>
                            <div className="profile-header-lvl-text">
                                <div>Level</div>
                                <div className="profile-xp">30,000 XP</div>
                            </div>
                        </div>
                        <div className="profile-header-user-lvl">
                            <div className="profile-header-years">
                                <img src="images/years_service.png" alt="" />
                            </div>
                            <div className="profile-header-lvl-text">
                                <div>Years of Service</div>
                                <div className="profile-xp">300 XP</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}