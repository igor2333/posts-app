import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import style from './Post.module.css'
import Comment from './Comment'

export default function Post({ title, body, link = null, postId }) {
  const [comments, setComments] = useState(null)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch(error => console.log(error))
  }, [postId])
  
  return (
    <div className={style.postContainer}>
      <div className={style.innerPostContainer}>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link to={link}>{link === null ? '' : 'View Post Page'}</Link>
        <div className={style.postCommentsContainer}>
          <span className="text-align-left">Comments:</span>
          {!!comments && comments.map((comment, index) => {
            return (<Comment key={index} name={comment.name} email={comment.email} body={comment.body}/>)
          })}
        </div>
      </div>
    </div>
  )
}