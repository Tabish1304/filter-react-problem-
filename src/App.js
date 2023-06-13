import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<Books/>}/>
      {/* <Home></Home> */}
        {/* <Footer></Footer> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
