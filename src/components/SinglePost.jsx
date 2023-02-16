import { Link, useParams } from 'react-router-dom'
import posts from '../data/posts'
import NotFound from './NotFound'
import style from './SinglePost.module.css'

export default function SinglePost() {
  const params = useParams()
  const post = posts.find((post) => String(post.id) === params.postId)

  if (!post) {
    return <NotFound/>
  }

  return (
    <div className={style.postContainer}>
      <h1>{post.userId}'s Post Info</h1>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
      <Link to=".." relative="path">All posts</Link>
    </div>
  )
}