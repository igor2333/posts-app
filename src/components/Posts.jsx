import { Link } from 'react-router-dom'
import posts from '../data/posts'
import style from './Posts.module.css'

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <div className={style.posts}>
      {posts.map((post) => {
        return (<Link to={`${post.id}`} key={post.id}>{post.title}</Link>)
      })}
      </div>
    </div>
  )
}