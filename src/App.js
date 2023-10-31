 import './App.css';
import Button from './components/Buttons/Button';
import Goback from './components/back/Goback';
import Contact from './components/cards/Contact';
import Issue from './components/cards/Issue';
import Sugest from './components/cards/Sugest';
import Landing from './components/homePage/Landing';
  
  import Navbar from './components/navbar/Navbar';

function App() {
   const Fab=()=>{
    return(
      <img src={'/images/Fab.svg'} alt="" />
    )
   }
  return (
    <div className="App">
       <Navbar/>
       <Goback/>
       <Landing/>
         {/* <Issue/> */}
       {/* <Sugest/> */}
       {/* <Contact/> */}
       <Button/>
    </div>
  );
}

export default App;
