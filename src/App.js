import "./App.css";
import Header from "./components/header.js";
import Bio from "./components/bio.js";

import ProjectGrid from "./components/projectGrid";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <ProjectGrid />
      <Footer />
    </div>
  );
}

export default App;
