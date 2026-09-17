import Accordion from './Accordion'
import AlertBox from './AlertBox'
import Interests from './Interests'
import Profile from './Profile'

function LeftColumn() {
  return (
    <div className="w3-col m3">
      <Profile />
      <br />
      <Accordion />
      <br />
      <Interests />
      <br />
      <AlertBox />
    </div>
  )
}

export default LeftColumn