import './App.css';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import RatingOne from './components/RatingOne/RatingOne';
import WorkingState from './components/WorkingState/WorkingState';
import RatingTwo from './components/RatingTwo/RatingTwo'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <WorkingState></WorkingState>
      <RatingOne></RatingOne>
      <Features></Features>
      <RatingTwo></RatingTwo>
    </div>
  );
}

export default App;
