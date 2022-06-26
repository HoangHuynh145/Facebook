import { FaUserFriends, FaUsers } from 'react-icons/fa'
import { MdVideogameAsset, MdGroup } from 'react-icons/md'
import { AiFillFlag } from 'react-icons/ai'
import { BsMessenger, BsCloudSunFill, BsFillStarFill } from 'react-icons/bs'

const shortCutsData = [
    { 
        id: 1, 
        icon: <FaUserFriends/>,
        name: "Bạn bè",
    },
    { 
        id: 2, 
        icon: <FaUsers/>,
        name: "Nhóm",
    },
    { 
        id: 3, 
        icon: <BsMessenger/>,
        name: "Messenger",
    },
    { 
        id: 4, 
        icon: <BsCloudSunFill/>,
        name: "Thời Tiết",
    },
    { 
        id: 5, 
        icon: <BsFillStarFill/>,
        name: "Yêu thích",
    },
    { 
        id: 6, 
        icon: <MdVideogameAsset/>,
        name: "Chơi game",
    },
    { 
        id: 7, 
        icon: <AiFillFlag/>,
        name: "Trang",
    },
];

const groupData = [
    {
        id: 1, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
    {
        id: 2, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
    {
        id: 3, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
    {
        id: 4, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
    {
        id: 5, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
    {
        id: 6, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
    {
        id: 7, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
    {
        id: 8, 
        icon: <MdGroup />,
        name: "Group của Hoàng",
    },
]

export {shortCutsData, groupData};
