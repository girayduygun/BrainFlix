import './Upload.scss'
import thumbnail from "../../assets/images/Upload-video-preview.jpg"
import publish from "../../assets/icons/publish.svg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function Upload() {

	const navigate = useNavigate() // to navigate to / (home page) 1 second later after submit the video
	const [success, setSuccess] = useState()  //state for the form submitted successfully

	const [title,setTitle] = useState('')
	const [description,setDescription] = useState('')

	const submitHandle = async e => {
		e.preventDefault()  // to prevent refresh the page
		await axios.post('http://localhost:3001/videos',{
			title,
			description
		})
		setSuccess(true)
		setTimeout(() => {
			navigate('/')  // to navigate to / (home page) 1 second later after submit the video
		}, 1000)
	}

	return (
		<div className="upload-container">
			<h1 className="upload-container__title">Upload Video</h1>

			{/*conditional rendering - upload message after the form is submitted successfully - if success is true */}
			{success && (
				<div className="upload-container__success">
					<p className="upload-container__success-text">Video uploaded</p>
				</div>
			)}

			{!success && (
				<form className="upload-container__form" onSubmit={submitHandle}>
					<div className="upload-container__submit">
						<div className="upload-container__thumbnail">
							<h6 className="upload-container__thumbnail-text">VIDEO THUMBNAIL</h6>
							<img src={thumbnail} className="upload-container__thumbnail-image" alt="upload video preview" />
						</div>
						<div className="upload-container__add">
							<div className="upload-container__textarea">
								<p className="upload-container__text">TITLE YOUR VIDEO</p>
								<input onChange={e => setTitle(e.target.value)} type="text" placeholder="Add a title to your video"/>
							</div>
							<div className="upload-container__textarea">
								<p className="upload-container__text">ADD A VIDEO DESCRIPTION</p>
								<textarea onChange={e => setDescription(e.target.value)} cols="30" rows="10" placeholder="Add a description to your video" />
							</div>
						</div>
					</div>
					<div className="upload-container__button">
						<button onClick={() => navigate('/')} type="button" className="upload-container__button-cancelTablet">CANCEL</button>
						<button disabled={!title || !description} type="submit" className="upload-container__button-publish">PUBLISH</button>
						<button onClick={() => navigate('/')} type="button" className="upload-container__button-cancelMobile">CANCEL</button>
					</div>
				</form>
			)}
		</div>
	)
}

export default Upload
