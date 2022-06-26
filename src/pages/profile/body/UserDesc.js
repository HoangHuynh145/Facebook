import { GiSuitcase } from 'react-icons/gi'
import { HiHome } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import './userDesc.scss'
import { userImages, frImages } from '../userData/imageData'

const UserDesc = () => {
    return (
        <div className="descContainer" style={{top: '-88rem'}}>
            <div className="intro bg">
                <div className="header">
                    <h2>Giới thiệu</h2>
                </div>
                <button className="btn">Thêm tiểu sử</button>
                <ul className="userIntro">
                    <li className="items">
                        <span className="icon"><GiSuitcase /></span>
                        <span>Học sinh tại <span className="address">THPT Ngô Quyền</span></span>
                    </li>
                    <li className="items">
                        <span className="icon"><HiHome /></span>
                        <span>Sống tại <span className="address">Đà Nẵng</span></span>
                    </li>
                    <li className="items">
                        <span className="icon"><MdLocationOn /></span>
                        <span>Đến từ <span className="address">Đà Nẵng</span></span>
                    </li>
                </ul>
                <button className="btn">Chỉnh sửa chi tiết</button>
                <button className="btn">Thêm sở thích</button>
                <button className="btn">Thêm nội dung đáng chú ý</button>
            </div>

            <div className="userImage bg">
                <div className="header">
                    <h2>Ảnh</h2>
                    <button className="seeAll">Xem tất cả ảnh</button>
                </div>
                <div className="imageWrapper">
                    {userImages.map(image => (
                        <div className="image" key={image.id}>
                            <img src={image.img} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="userFr bg">
                <div className="header">
                    <h2>Bạn bè</h2>
                    <button className="seeAll">Xem tất cả bạn bè</button>
                </div>
                <div className="frNumb">123 người bạn</div>
                <div className="imageWrapper">
                    {frImages.map(image => (
                        <div className="frImages" key={image.id}>
                            <div className="image">
                                <img src={image.img} />
                            </div>
                            <span className="frName">{image.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserDesc
