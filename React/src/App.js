import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import {BrowserRouter, Route, Routes as Switch} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path='/' element={<NavBar/>}   ></Route>
        <Route exact path='/Culture' element={<NavBar/>}   ></Route>
        <Route exact path='/Sport' element={<NavBar/>}   ></Route>
      </Switch>
    
    {/* <div className="App">
      <NavBar />
    </div> */}
    </BrowserRouter>
    
  );
}

export default App;
