import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import "./App.css";

function App() {
  return (
    <div>
      <ForgotPasswordPage />
    </div>
// src/App.tsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 1, name: 'Danh mục 1' },
    { id: 2, name: 'Danh mục 2' },
    { id: 3, name: 'Danh mục 3' }
  ];
import './App.css'
import Wallet from "./pages/wallet";

function App() {
  return (
    <Wallet />
import './App.css';
import Transaction from './pages/Transaction';

function App() {
  return <Transaction />;
// src/App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Register from './pages/register'; // Import component Register

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Giao diện danh mục */}
      <div className="category-list">
        <h2>Danh Mục</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
    </>
      {/* Định tuyến giữa các trang */}
      <Routes>
        {/* Route cho trang đăng ký */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;