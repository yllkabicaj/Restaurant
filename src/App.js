import './App.css';
import Navigation from './components/navigation/Navigation';
import Chinese from './components/sections/minisection1/Chinese';
import FindUs from './components/sections/minisection2/FindUs';
import Iframe from './components/sections/minisection3/Iframe';
import Home from './components/sections/section1/Home';
import Story from './components/sections/section2/Story';
import Packages from './components/sections/section3/Packages';
import FullMenu from './components/sections/section4/FullMenu';
import Contact from './components/sections/section5/Contact';
import Footer from './components/sections/section6/Footer';

function App() {
  return (
    <div>
   <Navigation></Navigation>
   <Home></Home>
   <Chinese></Chinese>
   <Story></Story>
   <Packages></Packages>
   <FullMenu></FullMenu>
   <FindUs></FindUs>
   <Iframe></Iframe>
   <Contact></Contact>
   <Footer></Footer>
   </div>
  );
}

export default App;
