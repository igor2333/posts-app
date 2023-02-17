import { Link, useParams } from 'react-router-dom'
import posts from '../data/posts'
import NotFound from './NotFound'
import Post from './Post'

export default function SinglePost() {
  const params = useParams()
  const post = posts.find((post) => String(post.id) === params.postId)

  if (!post) {
    return <NotFound/>
  }

  return (
    <div>
      <h1>{post.userId}'s Post Info</h1>
      <Post title={post.title} body={post.body}/>
      <Link to=".." relative="path">All posts</Link>
    </div>
  )
}