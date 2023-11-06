import axios from "axios";
import { useEffect, useState } from "react";
import Video from "../../components/Video/Video";
import './Home.scss'
import NextVideos from "../../components/NextVideos/NextVideos"
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";


function Home () {
    const [videos, setVideos] = useState([])  // state for all videos (next videos)
    const [video, setVideo] = useState()  // state for video that we are watching currently

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get('http://localhost:3001/videos')
            setVideos(response.data)  // to receive all videos

            let firstVideo = response.data[0]
            const videoResponse = await axios.get(`http://localhost:3001/videos/${firstVideo.id}`)
			setVideo(videoResponse.data)  // to receive first video
        }
        fetchVideos()
    }, [])

    return (
        <div>
            {video && (
                <>
                    <Video streamUrl={video.video} />
                    <div className="container">
                        <div className="container__content">
                            <VideoInfo video={video} /> {/*Current video's information */}
                            <Comments video={video} />
                        </div>
                        <div className="container__sidebar">
                            <NextVideos videos={videos.filter(nextVideo => nextVideo.id !== video.id)} /> {/*Next videos. filter, not to see the same video in current player and nextVideo list*/}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;