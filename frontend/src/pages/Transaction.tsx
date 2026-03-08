// src/components/Transaction.tsx

import React, { useState } from 'react';
import './Transaction.css';

const Transaction = () => {
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
    const newAmount = parseFloat(amount as string);
    const newTransaction = { description, amount: newAmount };
    setTransactions([...transactions, newTransaction]);
    setTotalAmount((prev) => prev + newAmount);
    setDescription('');
    setAmount('');
  };

  return (
    <div className="transaction-container">
      <h2>
        <i className="fas fa-exchange-alt"></i> Quản lý Giao Dịch
      </h2>

      {/* Form thêm giao dịch */}
      <form onSubmit={addTransaction} className="transaction-form">
        <div className="input-group">
          <i className="fas fa-pen"></i>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Mô tả giao dịch"
            required
          />
        </div>
        <div className="input-group">
          <i className="fas fa-dollar-sign"></i>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Số tiền"
            required
          />
        </div>
        <button type="submit" className="btn-add">
          <i className="fas fa-plus-circle"></i> Thêm
        </button>
      </form>

      {/* Danh sách giao dịch */}
      <div className="transaction-list">
        <h3>
          <i className="fas fa-list-ul"></i> Danh sách giao dịch
        </h3>
        {transactions.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#94a3b8', padding: '20px' }}>
            <i className="fas fa-inbox"></i> Chưa có giao dịch nào
          </p>
        ) : (
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>
                <span className="transaction-desc">
                  <i className="fas fa-tag"></i> {transaction.description}
                </span>
                <span className="transaction-amount">
                  {transaction.amount.toLocaleString()} VND
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tổng số tiền */}
      <div className="total-amount">
        <strong>Tổng số tiền:</strong>
        <span>{totalAmount.toLocaleString()} VND</span>
      </div>
    </div>
  );
};

export default Transaction;