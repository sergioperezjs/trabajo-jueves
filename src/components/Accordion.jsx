import { useState } from 'react'

const photos = ['lights', 'nature', 'mountains', 'forest', 'nature', 'snow']

function Accordion() {
  const [open, setOpen] = useState({})

  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }))

  const buttonClass = (id) =>
    `w3-button w3-block w3-theme-l1 w3-left-align${open[id] ? ' w3-theme-d1' : ''}`

  const containerClass = (id) => `w3-container${open[id] ? '' : ' w3-hide'}`

  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        <button onClick={() => toggle('Demo1')} className={buttonClass('Demo1')}>
          <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> My Groups
        </button>
        <div className={containerClass('Demo1')}>
          <p>Some text..</p>
        </div>

        <button onClick={() => toggle('Demo2')} className={buttonClass('Demo2')}>
          <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My Events
        </button>
        <div className={containerClass('Demo2')}>
          <p>Some other text..</p>
        </div>

        <button onClick={() => toggle('Demo3')} className={buttonClass('Demo3')}>
          <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
        </button>
        <div className={containerClass('Demo3')}>
          <div className="w3-row-padding">
            <br />
            {photos.map((photo) => (
              <div className="w3-half" key={photo}>
                <img
                  src={`https://www.w3schools.com/w3images/${photo}.jpg`}
                  style={{ width: '100%' }}
                  className="w3-margin-bottom"
                  alt={photo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion