
import {Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {

  return (<>
  
  <Route path='/' exact component={HomePage}/>
  <Route path='/contact' exact component={ContactPage}/>
  <Route path='/about' exact component={About}/>
  <Footer/>
  
  </>);
}

export default App;
