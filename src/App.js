import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/pages/Aboutme/Aboutme";
import Work from "./components/pages/Work/Work";
import ContactMe from "./components/pages/Contact/Contact"

function App() {
  return (
    <div >
      <Navbar/>
      <MainContent/>
      <Work/>
      <ContactMe/>
    </div>
  );
}

export default App;
