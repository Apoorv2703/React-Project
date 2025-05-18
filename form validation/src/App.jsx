import { useState } from 'react'
// import Comment from './commentbox'
import CommentBox from './commentbox';
import commentsData from "./commentsData.json";
import './App.css';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Form from './form'

// function App() {
  

//   return (
//     <>
//       <Form />
//     </>
//   )
// }

// export default App

function App() {

  let [Comments,setComments]=useState(commentsData.comments)
  let addComment = (value,parentId)=>{
    let newId = Date.now();
    let newComment = {id:newId,value,parentId,children:[]}
      setComments((prevComments)=>{
        let updatedComment = {...prevComments,[newId]:newComment};
        updatedComment[parentId].children.push(newId);
        return updatedComment;
      })

    }

    const deleteComment = (id)=>{
      const parentId = Comments[id].parentId;
      setComments((prevComments)=>{
        const updatedComment = {...prevComments};
        updatedComment[parentId].children=updatedComment[
          parentId
        ].children.filter((childId)=>{
          return childId !==id;
        });
        const queue = [id];
        while(queue.length>0){
          const nodeToDelete=queue.shift();
          queue.push(...updatedComment[nodeToDelete].children);
          delete updatedComment[nodeToDelete];
        }
        return updatedComment
      })

    }
  return (
    <div>
      
<CommentBox comment={Comments[1]} allcomment={Comments} addComment={addComment} deleteComment={deleteComment} />

    </div>
  )
  
}

export default App;
