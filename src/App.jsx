import React from "react"; 
import Navbar from "./components/Navbar"; 
import ContactForm from "./components/Form"; 
 
function App() { 
  return ( 
    <div className="App"> 
      <Navbar /> 
      <main style={{ padding: 20 }}> 
        <h1>Welcome to MyApp</h1> 
        <p>Practice branches, merges and pull requests.</p> 
        <ContactForm /> 
      </main> 
    </div> 
  ); 
} 
 
export default App; 