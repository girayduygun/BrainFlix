import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoPlayer from "../../components/Video/Video"

function Video ()  {

    const [videos, setVideos] = useState([]) // state for all videos (next videos)
    const [video,setVideo] = useState() // state for video that we are watching currently
    const {id} = useParams()

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await axios.get ('http://localhost:3001/videos') // to receive all videos
            setVideos(response.data)
        }
        fetchVideos()
    }, [])

    useEffect(() => {
        const fetchVideo = async () => {
            const videoResponse = await axios.get(`http://localhost:3001/videos/${id}`) // to receive first video
			setVideo(videoResponse.data)  
        }
        fetchVideo()

    }, [id])
    return (
        <div>
            {video && (
                <>
                    <VideoPlayer streamUrl={video.video} />
                    <div className="container">
                        <div className="container__content">
                            <VideoInfo video={video} /> {/*Current video's information */}
                            <Comments video={video} />
                        </div>
                        <div className="container__sidebar">
                            <NextVideos videos={videos.filter(nextVideo => nextVideo.id !== video.id)} /> {/*Next videos. - filter, not to see the same video in current player and nextVideo list*/}
                        </div>
                    </div>
                </>
            )}
        </div>
    ); 
};

export default Video;