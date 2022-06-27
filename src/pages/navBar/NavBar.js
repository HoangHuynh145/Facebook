import { GrSearch } from 'react-icons/gr'
import { AiFillHome, AiFillSetting, AiFillQuestionCircle } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { MdZoomOutMap } from 'react-icons/md'
import { HiUserGroup, HiOutlinePencilAlt } from 'react-icons/hi'
import { RiLiveFill } from 'react-icons/ri'
import { GoTriangleDown, GoReport, GoSearch } from 'react-icons/go'
import { FaBell, FaAngleRight, FaMoon, FaCircle } from 'react-icons/fa'
import { BsDisplay, BsMessenger, BsThreeDots, BsFillCheckCircleFill } from 'react-icons/bs'
import { IoLogoGameControllerA, IoMdChatbubbles } from 'react-icons/io'
import { ImExit } from 'react-icons/im'
import { useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { messages, notifications } from './notificationData'
import './navBar.scss';

const Main = () => {

    const getParent = (element, selector) => {
        if (element.matches(selector)) {
            return element
        } else {
            while (element.parentElement) {
                if (element.parentElement.matches(selector)) {
                    return element.parentElement
                }
                element = element.parentElement
            }
        }
    }

    useEffect(() => {
        const list = document.getElementsByClassName("contactsItem")
        const arrayList = [...list]

        const handelClick = (list) => {
            const activeList = document.querySelector(".contactsItem.active");
            activeList.classList.remove('active')
            list.classList.add('active')
        }


        arrayList.forEach(list => {
            list.addEventListener('click', _ => handelClick(list))
        })

    }, [])

    useEffect(() => {

        const handleHidePopup = (e) => {
            const popups = document.querySelectorAll('.optionWrapper .optionsPopup')
            const popupBtns = document.querySelectorAll('.userNotification .itemsNotification')
            const btnElement = getParent(e.target, '.userNotification')
            let lenght = popupBtns.length

            popups.forEach((popup, index) => {
                if (!btnElement && popup.classList[2] === 'active') {
                    popup.classList.remove('active')
                    popupBtns[lenght - 1 - index].classList.remove('active')
                }
            })
        }

        window.addEventListener('click', (event) => handleHidePopup(event))

        return () => {
            window.removeEventListener('click', handleHidePopup)
        }
    }, [])


    const handleTogglePopup = (type) => {
        const popupActive = document.querySelector('.optionWrapper .optionsPopup.active')
        if (popupActive && popupActive.classList[1] !== type) {
            const btnActive = document.querySelector('.userNotification .itemsNotification.active')
            popupActive.classList.remove('active')
            btnActive.classList.remove('active')
        }
        if (type === 'userPage') {
            const lastPopup = document.querySelector('.optionsPopup.userPage')
            const lastBtn = document.querySelector('.itemsNotification.userPage')
            // console.log(lastBtn)
            lastBtn.classList.toggle('active')
            lastPopup.classList.toggle('active')
        } else if (type === 'notification') {
            const middlePopup = document.querySelector('.optionsPopup.notification')
            const middleBtn = document.querySelector('.itemsNotification.notification')
            // console.log(lastBtn)
            middleBtn.classList.toggle('active')
            middlePopup.classList.toggle('active')
        } else if (type === 'chat') {
            const firstPopup = document.querySelector('.optionsPopup.chat')
            const firstBtn = document.querySelector('.itemsNotification.chat')
            // console.log(lastBtn)
            firstBtn.classList.toggle('active')
            firstPopup.classList.toggle('active')
        }
    }

    return (
        <>
            <div className="navBarWrapper">
                <div className="navBarContainer">
                    <div className="navBarStart">
                        <Link className="imageBrand" to="main">
                            <img src="/Facebook/img/brand.png" alt="user avatar" />
                        </Link>
                        <div className="searchContainer">
                            <span className="iconSearch"><GrSearch /></span>
                            <input placeholder="Tìm kiếm trên Facebook" type='text' />
                        </div>
                    </div>
                    <div className="navBarMiddle">
                        <ul className="contacts">
                            <Link className="contactsItem active" to='main'><AiFillHome /></Link>
                            <li className="contactsItem"><BiUser /></li>
                            <li className="contactsItem"><BsDisplay /></li>
                            <li className="contactsItem"><HiUserGroup /></li>
                            <li className="contactsItem"><IoLogoGameControllerA /></li>
                        </ul>
                    </div>
                    <div className="navBarEnd">
                        <Link className="contactsItem personalPage" to='profile'>
                            <div className="userAvatar">
                                <img src="/Facebook/img/avatar.jpg" alt="Avatar"/>
                            </div>
                            <span className="userName">Hoàng</span>
                        </Link>
                        <ul className="userNotification">
                            <li
                                className='itemsNotification chat'
                                onClick={() => handleTogglePopup('chat')}
                            ><BsMessenger /></li>
                            <li
                                className='itemsNotification notification'
                                onClick={() => handleTogglePopup('notification')}
                            ><FaBell /></li>
                            <li
                                className='itemsNotification userPage'
                                onClick={() => handleTogglePopup('userPage')}
                            ><GoTriangleDown /></li>
                        </ul>
                    </div>
                </div>
                <div className="optionWrapper">
                    <div className="optionsPopup userPage">
                        <Link className="userDesc" to='profile'>
                            <div className="userAvatar">
                                <img src="/Facebook/img/avatar.jpg" alt="Avatar"/>
                            </div>
                            <div className="userInfo">
                                <span className="name">Huỳnh Huy Hoàng</span>
                                <span className="desc">Xem trang cá nhân của bạn</span>
                            </div>
                        </Link>
                        <div className="space"></div>
                        <ul className="option">
                            <li className="item">
                                <div className="icon"><AiFillSetting /></div>
                                <span className="title">Đăng nhập & quyền riêng tư</span>
                                <div className="seeMore"><FaAngleRight /></div>
                            </li>
                            <li className="item">
                                <div className="icon"><AiFillQuestionCircle /></div>
                                <span className="title">Trợ giúp & hỗ trợ</span>
                                <div className="seeMore"><FaAngleRight /></div>
                            </li>
                            <li className="item">
                                <div className="icon"><FaMoon /></div>
                                <span className="title">Màn hình & trợ năng</span>
                                <div className="seeMore"><FaAngleRight /></div>
                            </li>
                            <li className="item">
                                <div className="icon"><GoReport /></div>
                                <span className="title">Đóng góp ý kiến</span>
                            </li>
                            <Link className="item" to="/Facebook">
                                <div className="icon"><ImExit /></div>
                                <span className="title">Đăng xuất</span>
                            </Link>
                        </ul>
                    </div>
                    <div className="optionsPopup notification" onClick={(e) => e.stopPropagation()}>
                        <div className="above">
                            <div className="title">
                                <h2>Thông báo</h2>
                                <div className="iconList">
                                    <div className="icon">
                                        <BsThreeDots />
                                    </div>
                                </div>
                            </div>
                            <div className="aboveOption">
                                <span className="optionItem active">Tất cả</span>
                                <span className="optionItem">Chưa đọc</span>
                            </div>
                        </div>
                        <div className="notiDesc">
                            <span className="descTitle">Trước đó</span>
                            <div className="seeAll">
                                <span>Xem tất cả</span>
                            </div>
                        </div>
                        <ul className="option notification">
                            {notifications.map(notification => (
                                <li className="item" key={notification.id}>
                                    <div className="imageWrapper">
                                        <div className="image">
                                            <img src={notification.avt} alt="notiPic"/>
                                        </div>
                                        <div
                                            className="typePost"
                                            style={{ background: notification.color === 'green' && 'linear-gradient(180deg, rgba(102,227,133,1) 0%, rgba(30,183,68,1) 100%)' }}
                                        >{notification.icon}
                                        </div>
                                    </div>
                                    <div className="title">
                                        <div className="content">
                                            <strong className="author">{notification.frName} </strong>
                                            <span>{notification.title}</span>
                                        </div>
                                        <span
                                            className="time"
                                            style={{ color: !notification.isRead && 'rgb(46, 137, 255)' }}
                                        >{notification.time} {notification.duration}</span>
                                    </div>
                                    <div className="icon noti"><BsThreeDots /></div>
                                    {!notification.isRead && <div className="unread status"><FaCircle /></div>}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="optionsPopup chat" onClick={(e) => e.stopPropagation()}>
                        <div className="above">
                            <div className="title">
                                <h2>Chat</h2>
                                <div className="iconList">
                                    <div className="icon">
                                        <BsThreeDots />
                                    </div>
                                    <div className="icon">
                                        <MdZoomOutMap />
                                    </div>
                                    <div className="icon">
                                        <RiLiveFill />
                                    </div>
                                    <div className="icon">
                                        <HiOutlinePencilAlt />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="notiDesc">
                            <div className="inputWrapper">
                                <GoSearch />
                                <input className="inputMess" placeholder="Tìm kiếm trên Messenger" />
                            </div>
                        </div>
                        <ul className="option chat">
                            <li className="item">
                                <div className="waitMess">
                                    <div className="bgIcon">
                                        <IoMdChatbubbles />
                                    </div>
                                </div>
                                <div className="title">
                                    <div className="content">
                                        <strong className="author">Tin nhắn đang chờ mới</strong>
                                    </div>
                                    <span className="message">Từ hùng và 1 người khác</span>
                                </div>
                                <div className="seeMore"><FaAngleRight /></div>
                            </li>
                            {messages.map(message => (
                                <li className="item" key={message.id}>
                                    <div className="imageWrapper">
                                        <div className="image">
                                            <img src={message.avt} alt="Avatar"/>
                                        </div>
                                    </div>
                                    <div className="title">
                                        <div className="content">
                                            <strong className="author">{message.frName}</strong>
                                        </div>
                                        <div className="messageWrapper">
                                            <span
                                                className="message"
                                                style={{ color: message.isRead ? '#b0b3b8' : 'rgb(46, 137, 255)' }}
                                            >{message.title} </span>
                                            <span className="timeChat">· {message.time} {message.duration}</span>
                                        </div>
                                    </div>
                                    <div className="icon noti"><BsThreeDots /></div>
                                    {message.isRead ? (
                                        <div className="readed status"><BsFillCheckCircleFill /></div>
                                    ) : (
                                        <div className="unread status"><FaCircle /></div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="endChat">
                            <span>Xem tất cả trong messenger</span>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Main