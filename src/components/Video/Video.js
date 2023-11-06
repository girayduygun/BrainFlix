import "./Video.scss"

function Video ({streamUrl}) {
    return (
        <>
            <div className="video">
                <video className="Video__play" controls src={streamUrl + '?api_key=49684a0e-b049-4af0-8c58-d3e0ad669d28'}></video>
            </div>
        </>

    );
};

export default Video;