import { BsThreeDots, BsFillPinAngleFill, BsBellSlashFill, BsBoxSeam } from 'react-icons/bs'
import { FaUserFriends, FaPen, FaTrash } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'
import { SiGoogletranslate } from 'react-icons/si'
import { IoIosCalendar } from 'react-icons/io'
import { VscComment } from 'react-icons/vsc'
import { MdSaveAlt } from 'react-icons/md'
import { BiLike } from 'react-icons/bi'
import { useEffect, createContext } from 'react'

import { useStore, actions } from '../store'
import Comment from '../comments/Comment'

const PostContext = createContext()

const UserPost = ({ postId, post, handleShowPostOption, handleToggleShowCmt }) => {
    const [ , dispatch] = useStore()

    const deleteActive = (element) => {
        element.classList.remove('active')
    }

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

    const handleDeletePost = (postId) => {
        dispatch(actions.deletePost(postId))
    }

    useEffect(() => {
        const options = document.querySelectorAll('.userPost .options')
        const userPostOption = document.querySelectorAll('.userPost .userPostOption')
        const handleClick = (e) => {
            if (getParent(e.target, '.options') !== options[postId]) {
                userPostOption[postId].classList.remove('active')
            } 
        }
        window.addEventListener('click', (event) => handleClick(event))

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [postId])

    const handleShowCmtOptions = (postId, cmtIndex) => {
        const userPosts = document.querySelectorAll('.userPost')
        userPosts.forEach((userPost, index) => {
            if (index === postId) {
                const cmtOptionPopups = userPost.querySelectorAll('.userCmt .userCmtOption')
                cmtOptionPopups.forEach((cmtOptionPopup, index) => {
                    if (index === cmtIndex) {
                        cmtOptionPopup.classList.toggle('active')
                    } else {
                        cmtOptionPopup.classList.remove('active')
                    }
                })
            } else {
                const cmtOptionActive = userPost.querySelector('.userCmt .userCmtOption.active')
                if (cmtOptionActive) {
                    cmtOptionActive.classList.remove('active')
                }
            }
        })
    }

    const handleContact = (postId) => {
        const likeElement = [...document.querySelectorAll('.interactive.user .like')]
        const likeNumber = [...document.querySelectorAll('.postContact.user .numberContact')]
        likeElement.forEach((likeIcon, index) => {
            let postLike = +likeNumber[index].innerHTML
            if (postId === index) {
                if (likeIcon.classList.contains('active')) {
                    likeNumber[index].innerHTML = --postLike
                    deleteActive(likeIcon)
                } else {
                    likeNumber[index].innerHTML = ++postLike
                    likeIcon.classList.add('active')
                }
            }
        })
    }


    return (
        <div className="userPost" >
            <div className="userPostAbove">
                <div className="postInfo">
                    <div className="userAvatarWrapper">
                        <div className="image">
                            <img src="/Facebook/img/avatar.jpg" alt="avatar" />
                        </div>
                    </div>
                    <div className="aboutPost">
                        <span className="userName">Hoang Huynh</span>
                        <div className="postTime">
                            <span className="time">1 Ph??t ?? </span>
                            <FaUserFriends />
                        </div>

                    </div>
                </div>
                <div className="options"
                    onClick={() => handleShowPostOption(postId)}
                >
                    <BsThreeDots />
                </div>
            </div>
            <div className="userPostOption">
                <div className="faketriangle"></div>
                <div className="savepost">
                    <div className="optionItem">
                        <BsFillPinAngleFill />
                        <span className="optionName">Ghim b??i vi???t</span>
                    </div>
                    <div className="optionItem">
                        <MdSaveAlt />
                        <span className="optionName">L??u b??i vi???t</span>
                    </div>
                </div>
                <div className="updatePost">
                    <div className="optionItem">
                        <FaPen />
                        <span className="optionName">Ch???nh s???a b??i vi???t</span>
                    </div>
                    <div className="optionItem">
                        <FaUserFriends />
                        <span className="optionName">Ch???nh s???a ?????i t?????ng</span>
                    </div>
                    <div className="optionItem">
                        <BsBellSlashFill />
                        <span className="optionName">T???t th??ng b??o v??? b??i vi???t n??y</span>
                    </div>
                    <div className="optionItem">
                        <SiGoogletranslate />
                        <span className="optionName">T???t b???n d???ch</span>
                    </div>
                    <div className="optionItem">
                        <IoIosCalendar />
                        <span className="optionName">Ch???nh s???a ng??y</span>
                    </div>
                </div>
                <div className="deletePost">
                    <div className="optionItem">
                        <BsBoxSeam />
                        <span className="optionName">Chuy???n v??o kho l??u tr???</span>
                    </div>
                    <div className="optionItem" onClick={() => handleDeletePost(postId)}>
                        <FaTrash />
                        <span className="optionName">Xo?? b??i vi???t</span>
                    </div>
                </div>
            </div>
            <span className="postContent">
                <span className="text">{post}</span>
            </span>
            <div className="postContact user">
                <div className="icon">
                    <img src='/Facebook/img/heart.png' alt="postImg" />
                    <img src='/Facebook/img/like.png' alt="postImg" />
                    <span className="numberContact">0</span>
                </div>
                <div className="cmtnAndShare user">
                    <span className="cmtNumber">
                        <span className="number">0 </span> 
                        b??nh lu???n
                    </span>
                    <span className="shareNumber">0 chia s???</span>
                </div>
            </div>
            <div className="interactive user">
                <div className="emoticon like" onClick={() => handleContact(postId)}>
                    <BiLike />
                    <span className="title">Th??ch</span>
                </div>
                <div className="emoticon" onClick={() => handleToggleShowCmt(postId)}>
                    <VscComment />
                    <span className="title">B??nh lu???n</span>
                </div>
                <div className="emoticon">
                    <RiShareForwardLine />
                    <span className="title">Chia s???</span>
                </div>
            </div>
            <div className="commentArea cmt">
                <PostContext.Provider 
                    value={{ handleShowCmtOptions, getParent, postId, type: "userPost" }}
                >
                    <Comment type="user" postId={postId}/>
                </PostContext.Provider>
            </div>
        </div>
    )
}

export default UserPost
export { PostContext }
