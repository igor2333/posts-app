import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import NotFound from './NotFound'
import Post from './Post'

export default function SinglePost() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch(error => console.log(error))
  }, [])

  const params = useParams()
  let post

  if (data === null) {
    return ''
  } else {
    post = data.find((post) => String(post.id) === params.postId)
  }

  if (!post) {
    return <NotFound/>
  }

  return (
    <>
    <div>
      <h1>{post.userId}'s Post Info</h1>
      <Post title={post.title} body={post.body}/>
      <Link to=".." relative="path">All posts</Link>
    </div>
    </>
  )
}