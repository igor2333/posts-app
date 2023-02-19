import style from './Comment.module.css'

export default function Comment({ name, email, body }) {
  return (
    <div className={style.commentContainer}>
      <span>{`${name} (${email}):`}</span>
      <hr/>
      <p>{body}</p>
    </div>
  )
}