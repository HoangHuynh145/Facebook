import { HiTag } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'
import { MdCommentBank } from 'react-icons/md'


const randomNumberTime = () => {
    let numb = Math.floor(Math.random() * 24)
    if(numb === 0) {
        numb = Math.floor(Math.random() * 24)
    } else {
        return numb
    }  
}
const randomType = () => {
    return Math.floor(Math.random() * 4)
}
const randomSatus = () => {
    return Math.floor(Math.random() * 2)
}
const type = ['Phút', 'Giờ', 'Ngày', 'Tuần' ]
const isRead = [true, false]

const messages = [
    {
        id: 1,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
    {
        id: 2,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello 2',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
    {
        id: 3,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello 3',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
    {
        id: 4,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello 4',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
    {
        id: 5,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello 4',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
    {
        id: 6,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello 4',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
    {
        id: 7,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello 4',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
    {
        id: 8,
        frName: 'Hoang Huynh',
        avt: '/Facebook/img/avatar.jpg',
        title: 'Hello 4',
        time: randomNumberTime(),
        duration: type[randomType()],
        isRead: isRead[randomSatus()],
    },
];

const notifications = [
    {
        id: 1,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Senyamiku',
        title: 'đã gắn thẻ bạn trong 1 bài viết',
        icon: <HiTag />,
        color: 'green',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 2,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Senyamiku',
        title: 'đăng một ảnh mới trên dòng thời gian của cô ấy.',
        icon: <MdCommentBank />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 3,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Senyamiku',
        title: 'Đã gắn thẻ bạn trong 1 bài viết',
        icon: <HiTag />,
        color: 'green',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 4,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Đặng Lê Nguyên Vũ',
        title: 'đã chấp nhận lời mời kết bạn của bạn bây giờ hai bạn có thể nhắn tin cho nhau.',
        icon: <FaUsers />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 5,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Senyamiku',
        title: 'đã đăng một bài viết mới trên dòng thời gian của cô ấy.',
        icon: <MdCommentBank />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 6,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Đặng Lê Nguyên Vũ',
        title: 'Đã gắn thẻ bạn trong 1 bài viết',
        icon: <HiTag />,
        color: 'green',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 7,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Đặng Lê Nguyên Vũ',
        title: 'đã bày tỏ cảm xúc về một bài viết mà bạn đã được gắn thẻ',
        icon: <FaUsers />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 8,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Nguyễn Quốc Cường',
        title: 'đã đăng một ảnh mới trên dòng thời gian của anh ấy',
        icon: <MdCommentBank />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 9,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Phạm Trần Nhật Minh',
        title: 'đã chấp nhận lời mời kết bạn của bạn bây giờ hai bạn có thể nhắn tin cho nhau.',
        icon: <FaUsers />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 10,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Độ Phùng',
        title: 'đã gửi đến cho bạn lời mời kết bạn.',
        icon: <FaUsers />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
    {
        id: 11,
        avt: '/Facebook/img/avatar.jpg',
        frName: 'Độ Phùng',
        title: 'đã gắn thẻ bạn vào một bài viết',
        icon: <FaUsers />,
        color: 'blue',
        isRead: isRead[randomSatus()],
        time: randomNumberTime(),
        duration: type[randomType()],
    },
]

export { messages, notifications }
