import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Landing from '../Landing/Landing';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
