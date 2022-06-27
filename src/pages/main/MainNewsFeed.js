import { AiOutlinePlus, AiOutlineArrowRight } from 'react-icons/ai'
import './MainNewsFeed.scss'
import newsData from './mainData/newsData'
import PostArea from './postArea/PostArea'

const MainNewsFeed = () => {

    return (
        <div className="newsFeedContainer">
            <div className="newsFeedWrapper">
                <div className="userNews">
                    <div className="createNews">
                        <div className="imageWarpper">
                            <div className="image">
                                <img src="/Facebook/img/avatar.jpg" alt="avatar" />
                            </div>
                            <div className="iconAddNews">
                                <AiOutlinePlus />
                            </div>
                        </div>
                        <span className="addNewsTitle">Tạo tin</span>
                    </div>
                    {newsData.map(news => (
                        <div className='news' key={news.id}>
                            <div className="newsContent">
                                <div className="image">
                                    <img src={news.image} alt="postImg" />
                                </div>
                                <div className="linear"></div>
                                <div className="authorInfo">
                                    <div className="authorAvatar">
                                        <div className="avatarWrapper">
                                            <img src={news.avatar} alt="avatar" />
                                        </div>
                                    </div>
                                    <div className="authorName">{news.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="seeAllNews">
                        <AiOutlineArrowRight />
                    </div>
                </div>
                <PostArea />
            </div>
        </div>
    )
}

export default MainNewsFeed
