import { BsThreeDots } from 'react-icons/bs'

import { PostContext } from '../postArea/UserPost'
import { useContext, useEffect } from 'react'
const Cmt = ({ cmt, cmtId, handleDeleteComment, handleUpdateComment }) => {

    const { handleShowCmtOptions, getParent, postId, type } = useContext(PostContext)
    useEffect(() => {
        // User Post
        const userPost = type === 'userPost' && document.querySelectorAll('.userPost')[postId]
        const cmtUserOptionBtn = type === 'userPost' && userPost.querySelectorAll('.cmtOptionBtn')
        const userCmtOption = type === 'userPost' && userPost.querySelectorAll('.userCmtOption')
        // User Post

        // Friend Post
        const friendPost = type === 'frPost' && document.querySelectorAll('.frPostsTo')[postId]
        const cmtFrOptionBtn = type === 'frPost' && friendPost.querySelectorAll('.cmtOptionBtn')
        const frCmtOption = type === 'frPost' && friendPost.querySelectorAll('.userCmtOption')
        // Friend Post
        const handleClick = (e) => {
            if (type === 'userPost' && getParent(e.target, '.cmtOptionBtn') !== cmtUserOptionBtn[cmtId]) {
                userCmtOption[cmtId].classList.remove('active')
            } else if (type === 'frPost' && getParent(e.target, '.cmtOptionBtn') !== cmtFrOptionBtn[cmtId]) {
                frCmtOption[cmtId].classList.remove('active')
            }
        }
        window.addEventListener('click', (event) => handleClick(event))

        return () => {
            window.removeEventListener('click', (event) => handleClick(event))
        }
    }, [postId])


    return (
        <>
            <div className="userAvatarWrapper">
                <div className="image">
                    <img src="/img/avatar.jpg" alt="avatar" />
                </div>
            </div>
            <div className="cmtTitle">
                <div className="author">Huynh Hoang</div>
                <p className="title">{cmt}</p>
            </div>
            <div className="userCmt">
                <div className="cmtOptionBtn" onClick={() => handleShowCmtOptions(postId, cmtId)}>
                    <BsThreeDots />
                </div>
                <div className="userCmtOption">
                    <div className="faketriangle"></div>
                    <div className="optionCmt">
                        <div className="optionItem" onClick={() => handleUpdateComment(cmt, cmtId)}>
                            <span className="optionName">Chỉnh sửa</span>
                        </div>
                        <div className="optionItem" onClick={() => handleDeleteComment(cmtId)}>
                            <span className="optionName">Xoá</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cmt
