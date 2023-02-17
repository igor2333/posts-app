import { Link } from 'react-router-dom'
import posts from '../data/posts'
import Post from './Post'
import style from './Posts.module.css'

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <div className={style.posts}>
      {posts.map((post, index) => {
        return (
          <div key={post.id}>
            <Post title={post.title} body={post.body}/>
            <Link to={`${post.id}`}>View Post Page</Link>
          </div>
        )
      })}
      </div>
    </div>
  )
}