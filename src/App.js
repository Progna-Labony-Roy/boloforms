import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RatingOne from './components/RatingOne/RatingOne';
import WorkingState from './components/WorkingState/WorkingState';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <WorkingState></WorkingState>
      <RatingOne></RatingOne>
    </div>
  );
}

export default App;
