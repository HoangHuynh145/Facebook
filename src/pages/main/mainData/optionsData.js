import { BsPinAngle, BsFillBellSlashFill, BsGlobe, BsCalendar3 } from 'react-icons/bs'
import { MdPanoramaVertical } from 'react-icons/md'
import { FaPen, FaUserFriends } from 'react-icons/fa'
import { CgBox } from 'react-icons/cg'
import { IoTrashOutline } from 'react-icons/io'

const savePostOptions = [
    { 
        id: 1,
        icon: <BsPinAngle />,
        name: 'Ghim',
    },
    { 
        id: 2,
        icon: <MdPanoramaVertical />,
        name: 'Lưu bài viết',
    },
]

const updatePostOptions = [
    { 
        id: 1,
        icon: <FaPen />,
        name: 'Chỉnh sửa bài viết',
    },
    { 
        id: 2,
        icon: <FaUserFriends />,
        name: 'Chỉnh sửa đối tượng',
    },
    { 
        id: 3,
        icon: <BsFillBellSlashFill />,
        name: 'Tắt thông báo về bài viết này',
    },
    { 
        id: 4,
        icon: <BsGlobe />,
        name: 'Tắt bảng dịch',
    },
    { 
        id: 5,
        icon: <BsCalendar3 />,
        name: 'Chỉnh sửa ngày',
    },
]

const deletePostOptions = [
    { 
        id: 1,
        icon: <CgBox />,
        name: 'Chuyển vào kho lưu trữ',
    },
    { 
        id: 2,
        icon: <IoTrashOutline />,
        name: 'Xóa bài viết',
    },
]

export { savePostOptions, updatePostOptions, deletePostOptions }