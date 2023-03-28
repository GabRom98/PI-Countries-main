import { Home, Landing, Form, Detail } from "./views/index";
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"

function App() {
  
  const location = useLocation()

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path='/home' element= { <Home/> } />
        <Route path='/create' element= { <Form/> } />
        <Route path='/home/:id' element= { <Detail/> } />
        <Route path='/' element= { <Landing/> } />
      </Routes>
    </div>
  );
}

export default App;
