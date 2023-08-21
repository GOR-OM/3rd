import './App.css';
import Navbar from './component/Navbar';
import PreNavbar from './component/PreNavbar';
import Slider from './component/Slider';
import { BrowserRouter as Router } from 'react-router-dom';
import data from './data/data.json';

function App() {
  return (
   <>
   <Router>
   <PreNavbar/>
   <Navbar/>
   {data && data.banner && data.banner.start && data.banner.start.length > 0 ? (
          <Slider start={data.banner.start} />
        ) : (
          <p>No banner images found.</p>
        )}
    
    </Router>


   </>
  );
}

export default App;
