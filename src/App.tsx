
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from '../components/mainPage/Hero'
import AboutSection from '../components/mainPage/AboutSection'
import Carousel from '../components/mainPage/Carousel'
import SendSurvey from '../components/mainPage/SendSurvey'
import LatestSurveys from '../components/mainPage/LatestSurveys'



function App() {


  return (
    <main>
      <Hero/>
      <AboutSection/>
      <Carousel/>
      <SendSurvey/>
      <LatestSurveys/>
    </main>
  )
}

export default App
