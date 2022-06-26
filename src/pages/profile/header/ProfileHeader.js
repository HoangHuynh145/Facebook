import { AiFillPlusCircle, AiFillCamera, AiOutlinePlus, AiOutlineBorderOuter } from 'react-icons/ai'
import { VscTriangleDown } from 'react-icons/vsc'
import { BsArrowsMove } from 'react-icons/bs'
import { FaPen, FaImages, FaTrash } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { HiUpload } from 'react-icons/hi'
import { useState, useEffect, useRef } from 'react'

import { frImagesBelowAvt, suggImg, uploaded, avtImg, posterImg } from '../userData/imageData'
import './profileHeader.scss'

const ProfileHeader = () => {
    const [avatar, setAvatar] = useState()
    const [coverImg, setCoverImg] = useState()
    const [hideChangeAvt, setHideChangeAvt] = useState(true)

    const popupCoverRef = useRef()

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
        const frImages = [...document.querySelectorAll('.imageWrapper')]
        const frImagesLenght = frImages.length;
        let zIndexCount = frImagesLenght;
        for (let i = 0; i < frImagesLenght; i++) {
            frImages[i].style.zIndex = zIndexCount;
            zIndexCount--;
        }
    }, [])

    useEffect(() => {
        const changeCoverPopup = document.querySelector('.popupChangeCoverImg')
        const coverPopupBtn = document.querySelector('.changeCoverImage')
        const handleHideOption = (e) => {
            if (changeCoverPopup.classList[1] === 'active') {
                if (getParent(e.target, '.changeCoverImage') !== coverPopupBtn) {
                    changeCoverPopup.classList.remove('active')
                }
            }
        }

        window.addEventListener('click', (event) => handleHideOption(event))

        return () => {
            window.removeEventListener('click', handleHideOption)
        }
    }, [])


    const toggleShowHideChangeAvt = () => {
        setHideChangeAvt(!hideChangeAvt)
        console.log('vo day')

        // lên lịch chứ chưa re-render
        const profileContainer = document.querySelector('.profileContainer')
        // tại đây vẫn lấy giá trị trước do chưa tới thời điểm re-render
        if (!hideChangeAvt) {
            profileContainer.style.height = 'unset'
            profileContainer.style.width = 'unset'
            profileContainer.style.overflow = 'unset'
        } else {
            profileContainer.style.height = '100vh'
            profileContainer.style.width = '100%'
            profileContainer.style.overflow = 'hidden'
        }
    }

    const togglePopupChangeCoverImg = () => {
        popupCoverRef.current.classList.toggle('active')
    }

    const handelUpdateImg = (e, type) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        if (type === 'avt') {
            setAvatar(file)
            toggleShowHideChangeAvt()
        } else if (type === 'cover') {
            setCoverImg(file)
        }
    }

    return (
        <>
            <div className="headerWrapper">
                <div className="coverImageWrapper">
                    <div className="image">
                        {coverImg ? (
                            <img src={coverImg.preview} alt="bia" />
                        ) : (
                            <img src="/img/bia.jpg" alt="anh_bia" />
                        )}
                    </div>
                    <div className="linear"></div>
                    <button className="changeCoverImage" onClick={togglePopupChangeCoverImg}>
                        <AiFillCamera />
                        <span>Chỉnh sửa ảnh bìa</span>
                    </button>
                    <div ref={popupCoverRef} className="popupChangeCoverImg">
                        <div className="optionCoverImg">
                            <div className="option">
                                <FaImages />
                                Chọn ảnh
                            </div>
                        </div>
                        <div className="optionCoverImg">
                            <label htmlFor="filesCover" className="option" onClick={togglePopupChangeCoverImg}>
                                <HiUpload />
                                Tải ảnh lên
                            </label>
                            <input
                                type='file'
                                style={{ display: 'none' }}
                                id="filesCover"
                                onChange={(e) => handelUpdateImg(e, 'cover')}
                            />
                        </div>
                        <div className="optionCoverImg">
                            <div className="option">
                                <BsArrowsMove />
                                Chọn lại vị trí
                            </div>
                        </div>
                        <hr />
                        <div className="optionCoverImg">
                            <div className="option">
                                <FaTrash />
                                Gỡ
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userInfo">
                    <div className="userAvatar">
                        <div className="image">
                            {avatar ? (
                                <img src={avatar.preview} alt="avatar" />
                            ) : (
                                <img src="/img/avatar.jpg" alt="avatar" />
                            )}
                        </div>
                        <button className="changeAvatar" onClick={toggleShowHideChangeAvt}>
                            <AiFillCamera />
                        </button>
                    </div>

                    <div className="aboutUser">
                        <h1 className="userName">Huỳnh Huy Hoàng</h1>
                        <span className="numberFr">123 bạn bè</span>
                        <div className="frImages">
                            {frImagesBelowAvt.map(image => (
                                <div className="imageWrapper" key={image.id}>
                                    <div className="image" >
                                        <img src={image.img} alt={image.name} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="headerOptions">
                        <button className="addNews">
                            <AiFillPlusCircle />
                            <span>Thêm vào tin</span>
                        </button>
                        <button className="updateProfile">
                            <FaPen />
                            <span>Chỉnh sửa trang cá nhân</span>
                        </button>
                    </div>
                </div>
                <div className="horizontalSideBar">
                    <ul className="sidebarItems">
                        <li className="item active">Bài viết</li>
                        <li className="item">Giới thiệu</li>
                        <li className="item">Bạn bè</li>
                        <li className="item">Ảnh</li>
                        <li className="item">Video</li>
                        <li className="item">Check in</li>
                        <li className="item">
                            Xem thêm
                            <VscTriangleDown />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`popupChangeAvt ${hideChangeAvt ? '' : 'active'}`} onClick={toggleShowHideChangeAvt}>
                <div className="popupWrapper" onClick={(e) => e.stopPropagation()}>
                    <div className="popupHeader">
                        <h2 className="title">Cập nhật ảnh đại diện</h2>
                        <button className="closePopup" onClick={toggleShowHideChangeAvt}>
                            <GrClose />
                        </button>
                    </div>
                    <div className="popupBody">
                        <div className="popupOption">
                            <label htmlFor="filesAvt" className="inputTitle btn">
                                <AiOutlinePlus />
                                Tải ảnh lên
                            </label>
                            <input
                                id="filesAvt" style={{ display: 'none' }}
                                type="file"
                                onChange={(e) => handelUpdateImg(e, 'avt')}
                            />
                            <button className="addBorder btn">
                                <AiOutlineBorderOuter />
                                Thêm khung
                            </button>
                            <button className="lctPic">
                                <FaPen />
                            </button>
                        </div>
                        <div className="popupContent">
                            <div className="contentWrapper">
                                <h3 className="title">Ảnh gợi ý</h3>
                                <div className="picList">
                                    {suggImg.map(img => (
                                        <div className="suggImg" key={img.id}>
                                            <img src={img.img} alt="suggImg"/>
                                        </div>
                                    ))}
                                </div>
                                <button className="seeMore">Xem thêm</button>
                            </div>
                            <div className="contentWrapper">
                                <h3 className="title">Ảnh đã tải lên</h3>
                                <div className="picList">
                                    {uploaded.map(img => (
                                        <div className="suggImg" key={img.id}>
                                            <img src={img.img} alt="uploaded"/>
                                        </div>
                                    ))}
                                </div>
                                <button className="seeMore">Xem thêm</button>
                            </div>
                            <div className="contentWrapper">
                                <h3 className="title">Ảnh đại diện</h3>
                                <div className="picList">
                                    {avtImg.map(img => (
                                        <div className="suggImg" key={img.id}>
                                            <img src={img.img} alt="avtImg"/>
                                        </div>
                                    ))}
                                </div>
                                <button className="seeMore">Xem thêm</button>
                            </div>
                            <div className="contentWrapper">
                                <h3 className="title">Ảnh bìa</h3>
                                <div className="picList">
                                    {posterImg.map(img => (
                                        <div className="suggImg" key={img.id}>
                                            <img src={img.img} alt="posterImg"/>
                                        </div>
                                    ))}
                                </div>
                                <button className="seeMore">Xem thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileHeader