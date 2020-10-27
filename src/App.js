import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Project from './components/project';
import ProjectGrid from './components/projectGrid';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProjectGrid/>
      
    </div>
  );
}

export default App;
