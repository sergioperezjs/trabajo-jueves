function Post({ avatar, name, time, text, images, image }) {
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
      <br />
      <img src={avatar} alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: 60 }} />
      <span className="w3-right w3-opacity">{time}</span>
      <h4>{name}</h4>
      <br />
      <hr className="w3-clear" />
      <p>{text}</p>
      {images && (
        <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
          {images.map((src) => (
            <div className="w3-half" key={src}>
              <img src={src} style={{ width: '100%' }} alt="Post photo" className="w3-margin-bottom" />
            </div>
          ))}
        </div>
      )}
      {image && <img src={image} style={{ width: '100%' }} className="w3-margin-bottom" alt="Post photo" />}
      <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom">
        <i className="fa fa-thumbs-up"></i>  Like
      </button>
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
        <i className="fa fa-comment"></i>  Comment
      </button>
    </div>
  )
}

export default Post