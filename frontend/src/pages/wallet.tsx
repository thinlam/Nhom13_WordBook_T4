import React from "react";
import "./wallet.css";

const wallets = [
  {
    name: "Tiền mặt",
    balance: "12.450.000 ₫",
    tag: "Mặc định",
  },
  {
    name: "Vietcombank Digital",
    balance: "85.600.000 ₫",
    tag: "****8892",
  },
  {
    name: "Ví Momo",
    balance: "4.200.000 ₫",
    tag: "E-Wallet",
  },
  {
    name: "Techcombank Savings",
    balance: "48.000.000 ₫",
    tag: "6.5% / năm",
  },
];

const Wallet: React.FC = () => {
  return (
    <div className="wallet-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>SECUREFIN</h2>

        <ul>
          <li>Tổng quan</li>
          <li className="active">Ví của tôi</li>
          <li>Giao dịch</li>
          <li>Ngân sách</li>
          <li>Báo cáo</li>
        </ul>
      </div>


      {/* Main content */}
      <div className="main">

        <div className="header">
          <h1>Quản lý Ví & Tài khoản</h1>

          <button className="btn-add">
            + Thêm ví mới
          </button>
        </div>

        <div className="total">
          <p>Tổng số dư khả dụng</p>
          <h2>150.250.000 ₫</h2>
        </div>


        {/* Wallet list */}
        <div className="wallet-grid">

          {wallets.map((wallet, index) => (
            <div className="wallet-card" key={index}>

              <h3>{wallet.name}</h3>

              <h2>{wallet.balance}</h2>

              <p>{wallet.tag}</p>

            </div>
          ))}

          <div className="wallet-add">
            +
            <p>Thêm ví</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Wallet;