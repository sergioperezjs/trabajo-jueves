const tags = [
  'News',
  'W3Schools',
  'Labels',
  'Games',
  'Friends',
  'Games',
  'Friends',
  'Food',
  'Design',
  'Art',
  'Photos',
]

const themes = [
  'w3-theme-d5',
  'w3-theme-d4',
  'w3-theme-d3',
  'w3-theme-d2',
  'w3-theme-d1',
  'w3-theme',
  'w3-theme-l1',
  'w3-theme-l2',
  'w3-theme-l3',
  'w3-theme-l4',
  'w3-theme-l5',
]

function Interests() {
  return (
    <div className="w3-card w3-round w3-white w3-hide-small">
      <div className="w3-container">
        <p>Interests</p>
        <p>
          {tags.map((tag, index) => (
            <span className={`w3-tag w3-small ${themes[index]}`} key={index}>
              {tag}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default Interests