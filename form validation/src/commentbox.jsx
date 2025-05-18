import { useState } from 'react';
import ReplyComment from './replycomment';

function CommentBox({comment,allcomment,addComment,deleteComment}) {
    let [ShowReplyBox,setShowReplyBox]=useState(false)
    let handleClick = ()=>{
        setShowReplyBox(!ShowReplyBox);
    }
    return (
        <div className='main'>
        <div className='comment-container'>
            <div className='comment-header'>
                <p className='comment-value'>{comment.value}</p>
                <div className='comment-actions'>
                    <button className='reply-btn' onClick={handleClick}>{ShowReplyBox ? "Cancle": "Reply"} </button>
                    <button className='delete-btn' onClick={()=>deleteComment(comment.id)}>Delete</button>
                </div>
            </div>
            {ShowReplyBox && <ReplyComment setShowReplyBox={setShowReplyBox}  addComment={addComment} id={comment.id}/> }
            <div className='nested-comments'>
                {comment.children.map((chilId)=>{
                    return <CommentBox key={chilId} comment={allcomment[chilId]} allcomment={allcomment} addComment={addComment} deleteComment={deleteComment}/>
                })}
               

            </div>
           
        </div>
        </div>
    )
}

export default CommentBox;