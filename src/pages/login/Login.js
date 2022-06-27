import { useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi'
import { IoCloseSharp } from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'
import styles from './Login.module.scss';
import { Link } from 'react-router-dom'

const Login = () => {
    const [isShow, setIsShow] = useState(false)
    const [isHidePopup, setIsHidePopup] = useState(false)

    const handelShowPopUp = () => {
        setIsShow(!isShow)
    }

    const handelHidePopUp = () => {
        setIsHidePopup(true)
    }

    return (
        <>
            <div 
                className={styles.popupStarted} 
                style={{display: isHidePopup ? 'none' : 'block'}}
                onClick={handelHidePopUp}
            >
                
                <div 
                    className={styles.popupWrapper}
                    onClick={(e) => e.stopPropagation()}    
                >
                    <div className={styles.popupHeader}>
                        <div className={styles.iconClose} onClick={handelHidePopUp}>
                            <IoCloseSharp />
                        </div>
                        <div className={styles.greeting}>Xin Chào!</div>
                    </div>
                    <div className={styles.popupContent}>
                        <div className={styles.content}>
                            Chào bạn,
                            Trang web này được xây dựng dựa trên Facebook với mục đích học tập. Có sử dụng hình ảnh của một số cá nhân.
                            <br />
                            Nếu có bất cứ vấn đề hay góp ý gì vui lòng liên hệ trực tiếp với bạn Hoàng. Have fun ^^.
                            <br />
                            <ul>
                                <li>Version: 1.0.0</li>
                                <li>- Đăng bài viết</li>
                                <li>- Tương tác bài viết</li>
                                <li>- Thay đổi ảnh bìa, ảnh đại diện</li>
                            </ul>
                        </div>
                    </div>
                    <button className={styles.popupBtn} onClick={handelHidePopUp}>
                        Xác nhận
                    </button>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.loginWrapper}>
                    <div className={styles.loginLeft}>
                        <div className={styles.loginLeftAbove}>
                            <p className={styles.brand}>facebook</p>
                            <p className={styles.title}>Đăng nhập gần đây</p>
                            <p className={styles.description}>Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
                        </div>
                        <div className={styles.userAvatarWarpper}>
                            <div className={styles.loginLeftAvatar} onClick={handelShowPopUp}>
                                <div className={styles.avatarWrapper}>
                                    <div className={styles.deleteAcount}>
                                        <FaTimes />
                                    </div>
                                    <img className={styles.userAvatar} src="/Facebook/img/avatar.jpg" />
                                </div>
                                <div className={styles.userName}>
                                    <span>Hoàng</span>
                                </div>
                            </div>

                            <div className={styles.loginLeftAvatar}>
                                <div className={styles.iconAddLogin}><HiPlusCircle /></div>
                                <div className={styles.title}>
                                    <span>Thêm tài khoản</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.loginRight}>
                        <div className={styles.loginRightContainer}>
                            <input placeholder='Email hoặc số điện thoại' />
                            <input placeholder='Mật khẩu' />
                            <Link className={styles.btnLogin} to='navBar/main'>
                                Đăng nhập
                            </Link>
                            <span>Quên mật khẩu?</span>
                            <div className={styles.createAcount}>
                                <button>Tạo tài khoản mới</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: isShow ? 'block' : 'none' }}>
                    <div className={styles.popupLogin}>
                        <div className={styles.popupContainer}>
                            <div className={styles.popupClose} onClick={handelShowPopUp}>
                                <FaTimes />
                            </div>
                            <div className={styles.popupUserInfo}>
                                <div className={styles.img}>
                                    <img src="/img/avatar.jpg" />
                                </div>
                                <div className={styles.userName}>
                                    <p>Huỳnh Huy Hoàng</p>
                                </div>
                            </div>
                            <div className={styles.popupInput}>
                                <input placeholder="Mật khẩu" type="password" />
                                <div className={styles.forgotPassword}>
                                    <input type="checkbox" id="password" />
                                    <label htmlFor="password">Nhớ mật khẩu</label>
                                </div>
                            </div>
                            <div className={styles.popupButton}>
                                <button><Link to="navBar/main">Đăng nhập</Link></button>
                                <span>Quên mật khẩu?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login