// import { useState } from "react";

import { useState } from "react";

function ReplyComment ({setShowReplyBox,addComment,id}){
    let[Reply,setReply]=useState("");
    let handlePostReply = ()=>{
        addComment(Reply,id)
        setReply("")
        setShowReplyBox(false);
    }

    return (
        <div className="reply-form">
<textarea className="reply-textarea" value={Reply} onChange={(event)=>setReply(event.target.value)} placeholder="Reply"></textarea>
<button className="post-rly-btn" onClick={handlePostReply}>Post reply</button>
        </div>
    )
}

export default ReplyComment;


// function ReplyComment(params) {
    
//     return (
//         <div className="reply-form">
// <textarea className="reply-textarea" value={Reply} ></textarea>
// <button className="post-rly-btn">Post reply</button>
//         </div>
//     )
    
// }

// export default ReplyComment;