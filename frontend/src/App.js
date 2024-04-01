import './App.css';
import HomePage from './Pages/Home/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <HomePage />
      <ToastContainer />

    </div>

  );
}

export default App;
