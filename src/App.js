import './App.css';
// import Accordion from './Components/Accordion/Accordion';
import Faq from './Components/FAQ section/Faq';
import Feedback from './Components/Feedback section/Feedback';
import Footer from './Components/Footer section/Footer';
import Intro from './Components/Introduction section/Intro';
import Navbar from './Components/Navbar/Navbar';
import Newsletter from './Components/Newsletter section/Newsletter';
import Services from './Components/Service.js/Services';
import Teams from './Components/Teams Section/Teams';
import StarSection from './Components/star section/StarSection';

function App() {
  return (
    <div className="">
      <Navbar />
      <StarSection />
      <Intro />
      <Services />
      <Feedback />
      <Teams />
      <Faq />
      <div className="bg-[#1d1d1d] pt-28 pb-48 px-44">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
