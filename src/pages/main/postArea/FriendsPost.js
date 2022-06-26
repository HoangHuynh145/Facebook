import { BiLike, BiHide } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { VscComment } from 'react-icons/vsc'
import { RiShareForwardLine } from 'react-icons/ri'
import { FiDelete } from 'react-icons/fi'
import { GoReport } from 'react-icons/go'
import { MdSaveAlt } from 'react-icons/md'
import { BsThreeDots, BsFillPinAngleFill, BsBellSlashFill } from 'react-icons/bs'

import { useEffect } from 'react'
import Comment from '../comments/Comment'
import { PostContext } from './UserPost'
const FriendsPost = ({ data, postId, handleShowPostOption, handleToggleShowCmt }) => {

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

    const handleContact = (postId) => {
        console.log('Voo day')
        const likeElement = [...document.querySelectorAll('.interactive.friend .like')]
        const likeNumber = [...document.querySelectorAll('.postContact.friend .numberContact')]
        console.log(likeNumber[postId])
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

    const hideFrPost = (postId) => {
        const frPosts = document.querySelectorAll('.frPostsTo')
        frPosts[postId].style.display = 'none'
    }

    useEffect(() => {
        const options = document.querySelectorAll('.frPostsTo .options')
        const userPostOption = document.querySelectorAll('.frPostsTo .userPostOption')
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
        const frPosts = document.querySelectorAll('.frPostsTo')
        frPosts.forEach((frPost, index) => {
            if (index === postId) {
                const cmtOptionPopups = frPost.querySelectorAll('.userCmt .userCmtOption')
                cmtOptionPopups.forEach((cmtOptionPopup, index) => {
                    if (index === cmtIndex) {
                        cmtOptionPopup.classList.toggle('active')
                    } else {
                        cmtOptionPopup.classList.remove('active')
                    }
                })
            } else {
                const cmtOptionActive = frPost.querySelector('.userCmt .userCmtOption.active')
                if (cmtOptionActive) {
                    cmtOptionActive.classList.remove('active')
                }
            }
        })
    }

    return (
        <div className="frPostsTo">
            <div className="userPostAbove">
                <div className="postInfo">
                    <div className="userAvatarWrapper">
                        <div className="image">
                            <img src={data.frAvatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="aboutPost">
                        <div className="tagInfo">
                            <span className="userName">
                                {data.frName}
                                {data.tagged && (<span className="withTitle">cùng với</span>)}
                                <span className="tagged">{data.tagged}</span>
                            </span>

                        </div>
                        <div className="postTime">
                            <span className="time">{data.time} · </span>
                            <FaUserFriends />
                        </div>

                    </div>
                </div>
                <div className="options" onClick={() => handleShowPostOption(postId)}>
                    <BsThreeDots />
                </div>
            </div>
            <div className="userPostOption">
                <div className="faketriangle"></div>
                <div className="savepost">
                    <div className="optionItem">
                        <BsFillPinAngleFill />
                        <span className="optionName">Ghim bài viết</span>
                    </div>
                    <div className="optionItem">
                        <MdSaveAlt />
                        <span className="optionName">Lưu bài viết</span>
                    </div>
                </div>
                <div className="updatePost">
                    <div className="optionItem">
                        <BsBellSlashFill />
                        <span className="optionName">Tắt thông báo về bài viết này</span>
                    </div>
                </div>
                <div className="deletePost">
                    <div className="optionItem">
                        <FiDelete />
                        <span className="optionName">Gỡ thẻ</span>
                    </div>
                    <div className="optionItem" onClick={() => hideFrPost(postId)}>
                        <BiHide />
                        <span className="optionName">Ẩn khỏi trang cá nhân</span>
                    </div>
                    <div className="optionItem">
                        <GoReport />
                        <span className="optionName">Báo cáo bài viết</span>
                    </div>
                </div>
            </div>
            <span className="postContent">
                <div className="text">
                    {data.title}
                </div>
                {data.hastag && (
                    <div className="hastag">
                        {data.hastag}
                    </div>
                )}
                {data.image && (
                    <div className="image">
                        <img src={data.image} alt="postImg" />
                    </div>
                )}
            </span>
            <div className="postContact friend">
                <div className="icon">
                    <img src='/img/heart.png' alt="postImg" />
                    <img src='/img/like.png' alt="postImg" />
                    <span className="numberContact">{data.numbLike}</span>
                </div>
                <div className="cmtnAndShare friend">
                    <span className="cmtNumber">
                        <span className="number">{data.numbCmt} </span> 
                        bình luận
                    </span>
                    <span className="shareNumber">{data.numbShare} chia sẻ</span>
                </div>
            </div>
            <div className="interactive friend">
                <div className="emoticon like" onClick={() => handleContact(postId)}>
                    <BiLike />
                    <span className="title">Thích</span>
                </div>
                <div className="emoticon" onClick={() => handleToggleShowCmt(postId)}>
                    <VscComment />
                    <span className="title">Bình luận</span>
                </div>
                <div className="emoticon">
                    <RiShareForwardLine />
                    <span className="title">Chia sẻ</span>
                </div>
            </div>
            <div className="commentArea cmt">
                <PostContext.Provider value={{ handleShowCmtOptions, getParent, postId, type: "frPost" }}>
                    <Comment type="friend" postId={postId}/>
                </PostContext.Provider>
            </div>
        </div>
    )
}

export default FriendsPost
