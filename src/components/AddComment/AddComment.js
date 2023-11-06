import './AddComment.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import add_comment from '../../assets/icons/add_comment.svg'

function AddComment () {
    return (
        <div className="add-comment">
            <h6 className="add-comment__title">JOIN THE CONVERSATION</h6>
            <form className="add-comment__form">
                <div className="add-comment__area">
                    <div className="add-comment__profile">
                        <img className="add-comment__avatar" src={avatar} alt="avatar" />
                    </div>
                    <div className="add-comment__new">
                        <input  className="add-comment__input" type="text" placeholder="Add a new comment"/>
                        <button className="add-comment__button" type="submit">
                            <img className="add-comment__image" src={add_comment} alt="add comment button"/>
                            COMMENT
                        </button>
                    </div>
				</div>
            </form>
        </div>
    );
};

export default AddComment;