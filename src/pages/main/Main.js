import { useState, useRef, useEffect } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { MdOutlineVideoCall } from 'react-icons/md'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { shortCutsData, groupData } from './mainData/shortcutsData'
import { friendData, userGroupData } from './mainData/friendData'
import MainNewsFeed from './MainNewsFeed'
import './main.scss'
import { Link } from 'react-router-dom'

const Main = () => {
    const [isEnlargeShortCuts, setIsEnlargeShortCuts] = useState(false)
    const [isEnlargeGroup, setIsEnlargeGroup] = useState(false)

    const shortcutsRef = useRef()
    const groupRef = useRef()
    const handelEnlarge = (type, name) => {
        if (type === 'shortCuts') {
            const shortCutsActive = document.querySelector(`.${name}.active`)
            console.log(shortCutsActive)
            if (shortCutsActive) {
                shortCutsActive.classList.remove('active')
            } else {
                console.log('Vô đây')
                shortcutsRef.current.classList.add('active')
            }
            setIsEnlargeShortCuts(!isEnlargeShortCuts)
        }
        if (type === 'group') {
            const groupActive = document.querySelector(`.${name}.active`)
            console.log(groupActive)
            if (groupActive) {
                groupActive.classList.remove('active')
            } else {
                groupRef.current.classList.add('active')
            }
            setIsEnlargeGroup(!isEnlargeGroup)
        }
    }

    return (
        <div className="mainContentContainer">
            <div className="contentWrapper">
                <div className="leftContent">
                    <Link className="aboveLeftContent" to='../profile'>
                        <div className="userAvatar">
                            <img src="/Facebook/img/avatar.jpg" alt="avatar"/>
                        </div>
                        <div className="userName">Huỳnh Huy Hoàng</div>
                    </Link>
                    <div className="userShortcuts">
                        <ul
                            ref={shortcutsRef}
                            className="shortcutsList"
                        >
                            {shortCutsData.map(shortCuts => (
                                <li key={shortCuts.id} className="itemShortcut">
                                    {shortCuts.icon}
                                    <span>{shortCuts.name}</span>
                                </li>
                            ))}
                        </ul>
                        <div
                            className="itemShortcut showAllShortcuts"
                            onClick={() => handelEnlarge('shortCuts', 'shortcutsList')}
                        >
                            {isEnlargeShortCuts
                                ?
                                <>
                                    <FaAngleUp />
                                    <span>Ẩn bớt</span>
                                </>
                                :
                                <>
                                    <FaAngleDown />
                                    <span>Xem Thêm</span>
                                </>
                            }
                        </div>
                        <ul
                            ref={groupRef}
                            className="groupList"
                        >
                            <li className="itemShortcut shortcutsTitle">Lối tắt của bạn</li>
                            {groupData.map(groupShortcuts => (
                                <li key={groupShortcuts.id} className="itemShortcut">
                                    {groupShortcuts.icon}
                                    <span>{groupShortcuts.name}</span>
                                </li>
                            ))}
                        </ul>
                        <div
                            className="itemShortcut showAllGroup"
                            onClick={() => handelEnlarge('group', 'groupList')}
                        >
                            {isEnlargeGroup
                                ?
                                <>
                                    <FaAngleUp />
                                    <span>Ẩn bớt</span>
                                </>
                                :
                                <>
                                    <FaAngleDown />
                                    <span>Xem Thêm</span>
                                </>
                            }
                        </div>
                        <div className="space"></div>
                    </div>
                </div>
                <div className="middleContent">
                    <MainNewsFeed />
                </div>
                <div className="rightContent">
                    <div className="adverContainer">
                        <span className="title">Được tài trợ</span>
                        <div className="adsWarpper">
                            <div className="imageAds">
                                <img src='/Facebook/img/rider.jpg' alt="ads"/>
                            </div>
                            <div className="infoAds">
                                <span className="brand"> My ride, My zone</span>
                                <span className="desc">4 wheel move your body, 2 wheel move your soul</span>
                            </div>
                        </div>
                        <div className="adsWarpper">
                            <div className="imageAds">
                                <img src='/Facebook/img/detail.jpg' alt="ads"/>
                            </div>
                            <div className="infoAds">
                                <span className="brand">Detailing</span>
                                <span className="desc">In here, we love your car like your wife</span>
                            </div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="friendListContainer">
                        <div className="titleContainer">
                            <span className="title frTitle">Người liên hệ</span>
                            <div className="icons">
                                <span className="icon"><MdOutlineVideoCall /></span>
                                <span className="icon"><AiOutlineSearch /></span>
                                <span className="icon"><BsThreeDots /></span>
                            </div>
                        </div>
                        <div className="frListWrapper">
                            {friendData.map(friend => (
                                <div className="frListContainer" key={friend.id}>
                                    <div className="avatarWrapper">
                                        <div className="frAvatar">
                                            <img src={friend.avatar} alt="avatar"/>
                                        </div>
                                    </div>
                                    <div className="frName">
                                        <span>{friend.name}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="space"></div>
                            <span className="title frTitle">Cuộc trò chuyện nhóm</span>
                            {userGroupData.map(group => (
                                <div className="frListContainer" key={group.id}>
                                    <div className="avatarWrapper">
                                        <div className="frAvatar">
                                            <img src={group.avatar} alt="avatar"/>
                                        </div>
                                    </div>
                                    <div className="frName">
                                        <span>{group.name}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="addGroup">
                                <div className="addGroupIcon"><div className="icon"><AiOutlinePlus /></div></div>
                                <span className="addGroupTitle">Tạo nhóm mới</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
