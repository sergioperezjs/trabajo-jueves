import { useState } from 'react'

function Post({ post, onToggleLike, onAddComment, onDeletePost }) {
  const { id, avatar, name, time, text, images, image, liked, likes, comments } = post
  const [comment, setComment] = useState('')
  const [showComments, setShowComments] = useState(false)

  function handleComment() {
    const trimmed = comment.trim()
    if (!trimmed) return
    onAddComment(id, trimmed)
    setComment('')
  }

  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: 60 }} />
      <span className="w3-right w3-opacity">{time}</span>
      <button
        type="button"
        className="w3-right w3-button w3-hover-red w3-text-grey"
        style={{ padding: '0 6px' }}
        onClick={() => onDeletePost(id)}
        title="Delete post"
      >
        <i className="fa fa-trash"></i>
      </button>
      <h4>{name}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{text}</p>
      {images && images.length > 0 && (
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          {images.map((src) => (
            <div className="w3-half" key={src}>
              <img src={src} style={{ width: '100%' }} alt="Post photo" className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}
      {image && <img src={image} style={{ width: '100%' }} className="w3-margin-bottom" alt="Post photo" />}
      <button
        type="button"
        className={`w3-button w3-margin-bottom ${liked ? 'w3-theme' : 'w3-theme-d1'}`}
        onClick={() => onToggleLike(id)}
      >
        <i className="fa fa-thumbs-up"></i>  {liked ? 'Liked' : 'Like'} {likes > 0 && `(${likes})`}
      </button>
      <button
        type="button"
        className="w3-button w3-theme-d2 w3-margin-bottom"
        onClick={() => setShowComments((open) => !open)}
      >
        <i className="fa fa-comment"></i>  Comment{comments.length > 0 && ` (${comments.length})`}
      </button>
      {showComments && (
        <div>
          {comments.map((item, index) => (
            <div key={index} style={{ display: 'flex', gap: 8, margin: '8px 0' }}>
              <img
                src={item.avatar}
                className="w3-circle"
                style={{ width: 32, height: 32 }}
                alt={item.name}
              />
              <div className="w3-card w3-round w3-light-grey w3-padding" style={{ flex: 1 }}>
                <strong>{item.name}</strong>
                <p style={{ margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', gap: 8, margin: '8px 0 16px' }}>
            <textarea
              className="w3-border w3-padding"
              style={{ flex: 1 }}
              placeholder="Write a comment..."
              rows={1}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
            <button
              type="button"
              className="w3-button w3-theme w3-margin-bottom"
              onClick={handleComment}
            >
              <i className="fa fa-pencil"></i>  Comment
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post