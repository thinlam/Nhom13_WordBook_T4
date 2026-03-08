// src/App.tsx

import { useState } from 'react';
import './App.css';  // Đảm bảo rằng CSS đã được cập nhật

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [transactions, setTransactions] = useState<any[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  const [totalAmount, setTotalAmount] = useState(0);

  // Hàm thêm giao dịch
  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    const newTransaction = { description, amount: parseFloat(amount as string) };
    setTransactions([...transactions, newTransaction]);
    setTotalAmount((prev) => prev + newTransaction.amount);
    setDescription('');
    setAmount('');
  };

  return (
    <div className="App">
      <h1>Quản lý giao dịch</h1>
      
      {/* Form thêm giao dịch */}
      <form onSubmit={addTransaction}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Nhập mô tả giao dịch"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Nhập số tiền"
          required
        />
        <button type="submit">Thêm giao dịch</button>
      </form>
      
      {/* Danh sách giao dịch */}
      <div className="transaction-list">
        <h3>Danh sách giao dịch</h3>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.description}: {transaction.amount} VND
            </li>
          ))}
        </ul>
      </div>
      
      {/* Tổng số tiền */}
      <div className="total-amount">
        <strong>Tổng số tiền: </strong>{totalAmount} VND
      </div>
    </div>
  );
}

export default App;