import { AiFillCamera, AiOutlineFileGif } from 'react-icons/ai'
import { MdOutlineInsertEmoticon } from 'react-icons/md'
import { BiSticker } from 'react-icons/bi'

// import { PostContext } from '../postArea/UserPost'
import { useState, useRef, useEffect } from 'react'
import Cmt from './Cmt'
import './cmt.scss';
const Comment = ({type, postId}) => {
    const [comment, setComment] = useState('')
    const [addComment, setAddComment] = useState([])
    const [updateInfo, setUpdateInfo] = useState({
        cmtId: 0,
        isUpdate: false,
    })
    const inputRef = useRef()

    useEffect(() => {
        if(type === 'user') {
            const userCmtNumber =  document.querySelectorAll('.cmtnAndShare.user .cmtNumber .number')
            if(userCmtNumber){
                userCmtNumber[postId].innerHTML = `${addComment.length} `
            }
        } else if (type === 'friend'){
            const frCmtNumber =  document.querySelectorAll('.cmtnAndShare.friend .cmtNumber .number')
            if(frCmtNumber[postId]){
                frCmtNumber[postId].innerHTML = `${addComment.length} `
            }
        }
    }, [addComment.length])


    const handleComment = (e) => {
        if (e.key === 'Enter') {
            if (!updateInfo.isUpdate) {
                setAddComment([...addComment, comment])
            } else {
                const newCommentArr = [...addComment]
                newCommentArr.splice(updateInfo.cmtId, 1, comment)
                setAddComment(newCommentArr)
                setUpdateInfo({
                    cmtId: 0,
                    isUpdate: false,
                })
            }
            setComment('')
            inputRef.current.blur()
        }
    }

    const handleDeleteComment = (cmtId) => {
        const newCommentArr = [...addComment]
        newCommentArr.splice(cmtId, 1)
        setAddComment(newCommentArr)
    }

    const handleUpdateComment = (cmtTitle, cmtId) => {
        setUpdateInfo({
            isUpdate: true,
            cmtId
        })
        setComment(cmtTitle)
        inputRef.current.focus()
    }

    return (
        <>
            <ul className="postCmt">
                {addComment.map((cmt, index) => (
                    <div className="cmtWrapper" key={index}>
                        <Cmt
                            cmt={cmt}
                            cmtId={index}
                            handleDeleteComment={() => handleDeleteComment(index)}
                            handleUpdateComment={() => handleUpdateComment(cmt, index)}
                        />
                    </div>
                ))}
            </ul>
            <div className="inputCmtContainer">
                <div className="userAvatarWrapper">
                    <div className="image">
                        <img src="/img/avatar.jpg" alt="avatar" />
                    </div>
                </div>
                <div className="commentInput">
                    <div className='inputText'>
                        <input
                            ref={inputRef}
                            value={comment}
                            placeholder="Viết bình luận..."
                            onChange={(e) => setComment(e.target.value)}
                            onKeyPress={handleComment}
                        />
                    </div>
                    <div className="iconContainer">
                        <span className="icon"><MdOutlineInsertEmoticon /></span>
                        <span className="icon"><AiFillCamera /></span>
                        <span className="icon"><AiOutlineFileGif /></span>
                        <span className="icon"><BiSticker /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment
