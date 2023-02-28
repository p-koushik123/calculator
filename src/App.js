import './App.css';
import {Routes,Route} from 'react-router-dom';
import calculator from './components/calculator';
function App() {
  return (
   <>
    
    <Routes>
    <calculator title="KL University" aboutText="Aboutus" />
     
    </Routes>
   </>
  );
}

export default App;
