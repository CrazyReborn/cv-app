import GeneralInfo from "./components/general-info";
import Education from "./components/education";
import Experience from "./components/experience";
import './App.css'

function App() {
  return (
    <div className='main-container'>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
    
  );
}

export default App;
