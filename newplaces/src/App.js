import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div>
      <h1 className='text-5xl text-black-500 bg-purple-200 mt-5 p-2'>Welcome to Home Page</h1>
      <Hello></Hello>
    </div>
  );
}

export default App;
