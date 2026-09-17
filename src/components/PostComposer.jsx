function PostComposer() {
  return (
    <div className="w3-col m12">
      <div className="w3-card w3-round w3-white">
        <div className="w3-container w3-padding">
          <h6 className="w3-opacity">Social Media template by w3.css</h6>
          <textarea
            className="w3-border w3-padding"
            style={{ width: '100%' }}
            placeholder="Status: Feeling Blue"
            rows={1}
          ></textarea>
          <button type="button" className="w3-button w3-theme">
            <i className="fa fa-pencil"></i>  Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostComposer