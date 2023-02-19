import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from './Post'
import style from './Posts.module.css'

export default function Posts() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])


  return (
    <div>
      <h1>Posts</h1>
      <div className={style.posts}>
      {isLoading ? <span>Loading...</span> : ''}
      {data === null ? '' : data.map((post) => {
        return (
            <Post key={post.id} title={post.title} body={post.body} link={`${post.id}`}/>
        )
      })}
      </div>
    </div>
  )
}