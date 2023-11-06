import './VideoInfo.scss'
import views from '../../assets/icons/views.svg'
import likes from '../../assets/icons/likes.svg'


function VideoInfo({video}) {

    const date = new Date(video.timestamp)  // to change timestamp number to date format
	const currentDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()

    return (
        <div className="video-info">
            <h1 className="video-info__title">{video.title}</h1>
            <div className="video-info__info-area">
                <div className="video-info__channel-date">
                    <p className="video-info__channel">By {video.channel}</p>
                    <p className="video-info__date">{currentDate}</p>
                </div>
                <div className="video-info__views-likes">
                    <div className="video-info__views">
                        <img className="video-info__image" src={views} alt="views" />{video.views}
                    </div>
                    <div className="video-info__likes">
                        <img className="video-info__image" src={likes} alt="likes" />{video.likes}
                    </div>
                </div>
            </div>
            <p className="video-info__description">{video.description}</p>
        </div>
    );
};

export default VideoInfo;