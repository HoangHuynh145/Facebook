import { AiOutlineTable, AiOutlineCheckCircle } from 'react-icons/ai'
import { RiLiveFill } from 'react-icons/ri'
import { BsImages, BsList } from 'react-icons/bs'
import { MdOutlineInsertEmoticon } from 'react-icons/md'
import { IoMdSettings } from 'react-icons/io'
import { CgOptions } from 'react-icons/cg'
import { useState } from 'react'

import { useStore, actions } from '../store'
import UserPost from './UserPost'
import FriendsPost from './FriendsPost'
import { frPosts } from './postData'
import './postArea.scss'

const PostArea = ({ isProfile }) => {
    const [state, dispatch] = useStore()
    const { posts, postInput } = state
    const [isDisabled, setIsDisabled] = useState(true)


    const deleteActive = (element) => {
        element.classList.remove('active')
    }

    const handleInput = (e) => {
        if (e.target.value) {
            setIsDisabled(false)
        }
        dispatch(actions.setPostInput(e.target.value))
    }

    const handleShowPostOption = (postId, type) => {
        if (type === 'userPost') {
            const optionList = document.querySelectorAll('.userPostOption')
            optionList.forEach((option, index) => {
                if (index === postId) {
                    option.classList.toggle('active')
                } else {
                    option.classList.remove('active')
                }
            })
        } else if (type === 'frPost') {
            const optionList = document.querySelectorAll('.frPostsTo .userPostOption')
            optionList.forEach((option, index) => {
                if (index === postId) {
                    option.classList.toggle('active')
                } else {
                    option.classList.remove('active')
                }
            })
        }
    }

    const hanleSubmitPost = () => {
        dispatch(actions.addPost(postInput))
        dispatch(actions.setPostInput(''))
        setIsDisabled(true)
    }

    const handleToggleShowCmt = (cmtId, type) => {
        if (type === 'userPost') {
            const cmtElements = [...document.querySelectorAll('.userPost .commentArea.cmt')]
            cmtElements.forEach((cmtElement, index) => {
                if (cmtId === index) {
                    cmtElement.classList.contains('active') ?
                        deleteActive(cmtElement) :
                        cmtElement.classList.add('active')
                }
            })
        } else if (type === 'frPost') {
            const cmtElements = [...document.querySelectorAll('.frPostsTo .commentArea.cmt')]
            cmtElements.forEach((cmtElement, index) => {
                if (cmtId === index) {
                    cmtElement.classList.contains('active') ?
                        deleteActive(cmtElement) :
                        cmtElement.classList.add('active')
                }
            })
        }
    }

    return (
        <div className="postContainer">
            <div className="postArea">
                <div className="postAreaAbove">
                    <div className="userAvatar">
                        <img src="/Facebook/img/avatar.jpg" alt="avatar" />
                    </div>
                    <div className="postInput">
                        <input
                            value={postInput}
                            placeholder="Hoàng ơi, bạn đang nghĩ gì thế?"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <button
                    disabled={isDisabled}
                    className={`postSubmit ${!isDisabled ? 'active' : ''}`}
                    onClick={hanleSubmitPost}
                >Đăng</button>
                <div className="postOption">
                    <div className="postOptionIcon">
                        <RiLiveFill />
                        <span>Video trực tiếp</span>
                    </div>
                    <div className="postOptionIcon">
                        <BsImages />
                        <span>Ảnh/Video</span>
                    </div>
                    <div className="postOptionIcon">
                        <MdOutlineInsertEmoticon />
                        <span>Cảm xúc/Hoạt động</span>
                    </div>
                </div>
            </div>

            {isProfile ?
                <div className="profilePostOption">
                    <div className="optionHeader">
                        <h2 className="title">Bài viết</h2>
                        <div className="optionButton">
                            <button>
                                <div className="buttonIcon"><CgOptions /></div>
                                <span className="buttonTitle">Bộ lọc</span>
                            </button>
                            <button>
                                <div className="buttonIcon"><IoMdSettings /></div>
                                <span className="buttontitle">Quản lý bài viết</span>
                            </button>
                        </div>
                    </div>
                    <div className="viewMode">
                        <button className="active">
                            <div className="buttonIcon"><BsList /></div>
                            <span className="buttontitle">Xem theo danh sách</span>
                        </button>
                        <button>
                            <div className="buttonIcon"><AiOutlineTable /></div>
                            <span className="buttontitle">Chế độ xem lưới</span>
                        </button>
                    </div>
                </div>
                : null
            }

            <div className="mainPost">
                {/* user post  */}
                {posts.map((post, index) => (
                    <div key={index}>
                        <UserPost
                            post={post}
                            postId={index}
                            handleShowPostOption={() => handleShowPostOption(index, 'userPost')}
                            handleToggleShowCmt={() => handleToggleShowCmt(index, 'userPost')}
                        />
                    </div>
                ))}

                {/* friend post */}
                {frPosts.map((frPost, index) => (
                    <div key={frPost.id}>
                        {isProfile ? (
                            frPost.tag && (
                                <FriendsPost
                                    data={frPost}
                                    postId={index}
                                    handleShowPostOption={() => handleShowPostOption(index, 'frPost')}
                                    handleToggleShowCmt={() => handleToggleShowCmt(index, 'frPost')}
                                />
                            )
                        ) : (
                            <FriendsPost
                                data={frPost}
                                postId={index}
                                handleShowPostOption={() => handleShowPostOption(index, 'frPost')}
                                handleToggleShowCmt={() => handleToggleShowCmt(index, 'frPost')}
                            />
                        )
                        }
                    </div>
                ))}

                <div className="endPost">
                    <div className="icon">
                        <AiOutlineCheckCircle />
                    </div>
                    <h4 className="title">
                        Bạn đã đọc hết các bài viết
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default PostArea
