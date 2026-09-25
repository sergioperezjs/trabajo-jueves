import { useRef, useState } from 'react'

function PostComposer({ onAddPost }) {
  const [text, setText] = useState('')
  const [images, setImages] = useState([])
  const fileInputRef = useRef(null)

  function handleFiles(event) {
    const files = Array.from(event.target.files)
    if (!files.length) return
    const readers = files.map((file) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result)
      })
    })
    Promise.all(readers).then((results) => setImages((prev) => [...prev, ...results]))
    event.target.value = ''
  }

  function handlePost() {
    const trimmed = text.trim()
    if (!trimmed && !images.length) return
    onAddPost(trimmed, images)
    setText('')
    setImages([])
  }

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
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
          {images.length > 0 && (
            <div className="w3-row-padding" style={{ margin: '8px 0' }}>
              {images.map((src, index) => (
                <div className="w3-quarter" key={index}>
                  <img src={src} style={{ width: '100%' }} className="w3-margin-bottom" alt="Preview" />
                </div>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              onChange={handleFiles}
            />
            <button type="button" className="w3-button w3-theme" onClick={() => fileInputRef.current?.click()}>
              <i className="fa fa-image"></i>  Photo
            </button>
            <button type="button" className="w3-button w3-theme" onClick={handlePost}>
              <i className="fa fa-pencil"></i>  Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostComposer