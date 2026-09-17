import Footer from './components/Footer'
import LeftColumn from './components/LeftColumn'
import MiddleColumn from './components/MiddleColumn'
import Navbar from './components/Navbar'
import PageContainer from './components/PageContainer'
import RightColumn from './components/RightColumn'

function App() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </PageContainer>
      <Footer />
    </>
  )
}

export default App