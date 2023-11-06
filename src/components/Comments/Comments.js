import './Comments.scss';
import AddComment from '../AddComment/AddComment';

function Comments({ video }) {
    return (
        <div className="comments">
            <div className="comments__title">
                {video.comments.length} Comments 
            </div>

            <AddComment />

            <div className="comments__list">
                {video.comments.map(comment => {

                    const date = new Date(comment.timestamp) // to change timestamp number to date format
					const currentDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()

                    return (
                        <div key={comment.id} className="commments__list-comment">
                            <div className="commments__list-comment-avatar"></div>
                            <div>
                                <div className="commments__list-comment-header">
                                    <p className="commments__list-comment-name">{comment.name}</p>
                                    <div className="commments__list-comment-date">{currentDate}</div>
                                </div>
                                <div className="commments__list-comment-content">{comment.comment}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Comments;