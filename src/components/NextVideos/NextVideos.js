import { Link } from "react-router-dom";
import './NextVideos.scss'

function NextVideos({videos}) {
    return (
        <div className="next__videos" >
            <h6 className="next__videos-heading">NEXT VIDEOS</h6>
            {/*to show each video inside with 'map'*/}
            {videos.map(video => (
                <Link key={video.id} to={`/video/${video.id}`} className="next__videos-video" >
                <img className="next__videos-image" src={video.image} alt="next-video" />
                <div className="next__videos-text">
                    <h3 className="next__videos-title" >{video.title}</h3>
                    <p className="next__videos-channel">{video.channel}</p>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default NextVideos;