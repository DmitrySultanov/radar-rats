import Header from './components/Header/Header';
import SectionIntro from './components/SectionIntro/SectionIntro';
import SectionStory from './components/SectionStory/SectionStory';
import SectionPhysicalArt from './components/SectionPhysicalArt/SectionPhysicalArt';
import SectionDigitalArt from './components/SectionDigitalArt/SectionDigitalArt';
import SectionPowerChoice from './components/SectionPowerChoice/SectionPowerChoice';
import SectionInfo from './components/SectionInfo/SectionInfo';
import SectionFAQ from './components/SectionFAQ/SectionFAQ';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionIntro />
      <SectionStory />
      <SectionPhysicalArt />
      <SectionDigitalArt />
      <SectionPowerChoice />
      <SectionInfo />
      <SectionFAQ />
      <Footer />
    </div>
  );
}

export default App;
