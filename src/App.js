import "./App.css";
import Header from "./components/Header/Header";
import Bio from "./components/Bio/Bio";

import ProjectGrid from "./components/projectGrid";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
    <div className="wrapper">
      <Header />
      <Bio />
      <Footer />
      <ProjectGrid />
    </div>
    </div>
  );
}

export default App;
