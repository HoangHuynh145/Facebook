import { useState } from 'react';
import { HiPlusCircle } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import styles from './Login.module.scss';
import { Link } from 'react-router-dom'

const Login = () => {
    const [isShow, setIsShow] = useState(false)

    const handelShowPopUp = () => {
        setIsShow(!isShow)
    }

    return (
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
                                <img className={styles.userAvatar} src="/img/avatar.jpg" />
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
                        <button className={styles.btnLogin}>
                            <Link to='navBar/main'>Đăng nhập</Link>
                        </button>
                        <span>Quên mật khẩu?</span>
                        <div className={styles.createAcount}>
                            <button>Tạo tài khoản mới</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: isShow ? 'block' : 'none'}}>
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
    )
}

export default Login