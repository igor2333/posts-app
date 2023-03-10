import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import style from './Post.module.css'
import Comment from './Comment'

export default function Post({ title, body, link = null, postId }) {
  const initialState = {name: '', email: '', body: ''}
  const [comments, setComments] = useState(null)
  const [form, setForm] = useState(initialState)

  function inputChangeHandler(e, name) {
    setForm({...form, [name]: e.target.value})
  }

  async function onSubmitHandler(e) {
    e.preventDefault()

      try {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, form)
        setComments([...comments, response.data])
      } catch (error) {
        console.log(error)
      }

    setForm(initialState)
  }

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
        <hr/>
        <div className={style.postCommentsContainer}>
          <div className={style.postComments}>
            <span>Comments:</span>
            {comments === null ? '' : comments.map((comment, index) => {
              return (<Comment key={index} name={comment.name} email={comment.email} body={comment.body}/>)
            })}
          </div>
          <form onSubmit={onSubmitHandler} className={style.leaveComment}>
            <span>Leave your comment</span>
            <input value={form.name} onChange={(e) => inputChangeHandler(e, 'name')} className={style.leaveCommentInput} placeholder='Enter your name...'/>
            <input value={form.email} onChange={(e) => inputChangeHandler(e, 'email')} className={style.leaveCommentInput} placeholder='Enter your email...'/>
            <input value={form.comment} onChange={(e) => inputChangeHandler(e, 'body')} className={style.leaveCommentInput} placeholder='Enter your comment...'/>
            <button>Leave comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}