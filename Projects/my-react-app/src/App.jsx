import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Form() {
    const [name, setName] = useState("");

    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

function Effect() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return <h1>Hello</h1>;
}

function Welcome() {
  return <h2>Welcome to React</h2>;
}
function Click(){
   return (<button onClick={() => alert("Clicked!")}>
      Click Me
   </button>);
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

function User() {
    const users = ["Raj", "Amit", "Riya"];
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

function Login() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome </h1> : <h1>Please Login</h1>}
      <User />
    </div>
  );
}

function CountRun() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

function ApiCall() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using the main products endpoint to ensure we get a full 50 items
    fetch("https://dummyjson.com/products?limit=50") 
      .then((res) => res.json())
      .then((data) => {
        setItems(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center' }}>Loading 50 Products...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>The Product Store</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        {items.map((item) => (
          <div key={item.id} style={{ 
            border: '1px solid #444', 
            borderRadius: '8px', 
            padding: '10px', 
            background: '#1a1a1a',
            color: 'white',
            textAlign: 'center'
          }}>
            <img 
              src={item.thumbnail} 
              alt={item.title} 
              style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <h3 style={{ fontSize: '14px', margin: '10px 0', height: '40px', overflow: 'hidden' }}>
              {item.title}
            </h3>
            <p style={{ color: '#4caf50', fontWeight: 'bold' }}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome />
      <Counter />
      <Click />
      <Login />
      <Effect />
      <CountRun />
      <Router />
      <ApiCall />
      <Form />


    </div>
  ); 
}

export default App;