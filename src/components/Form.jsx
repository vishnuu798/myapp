import React, { useState } from "react"; 
 
export default function ContactForm() { 
  const [name, setName] = useState(""); 
  const [msg, setMsg] = useState(""); 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert(`Thanks ${name}! Message received: "${msg}"`); 
    setName(""); 
    setMsg(""); 
  }; 
 
  return ( 
    <form id="contact" onSubmit={handleSubmit} style={{ maxWidth: 600 }}> 
      <div> 
        <label>Name</label><br/> 
        <input value={name} onChange={(e)=>setName(e.target.value)} required /> 
      </div> 
      <div style={{ marginTop: 8 }}> 
        <label>Message</label><br/> 
        <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} required /> 
      </div> 
      <div style={{ marginTop: 8 }}> 
        <button type="submit">Send</button> 
      </div> 
    </form> 
  ); 
} 