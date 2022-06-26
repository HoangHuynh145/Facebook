import ProfileHeader from "./header/ProfileHeader"
import PostArea from '../main/postArea/PostArea'
import UserDesc from "./body/UserDesc"
import './profile.scss'
const Profile = () => {

    return (
        <div className="profileContainer">
            <ProfileHeader />
            <div className="profileBody">
                <div className="bodyWrapper">
                    <div className="leftBody">
                        <UserDesc />
                    </div>
                    <div className="mainBody">
                        <PostArea isProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
