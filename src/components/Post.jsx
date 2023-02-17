import style from './Post.module.css'

export default function Post({ title, body}) {
  return (
    <div className={style.postContainer}>
      <div className={style.innerPostContainer}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}