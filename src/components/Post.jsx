import { Link } from 'react-router-dom'
import style from './Post.module.css'

export default function Post({ title, body, link = null}) {
  return (
    <div className={style.postContainer}>
      <div className={style.innerPostContainer}>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link to={link}>{link === null ? '' : 'View Post Page'}</Link>
      </div>
    </div>
  )
}