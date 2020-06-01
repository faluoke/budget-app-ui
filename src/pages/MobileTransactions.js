import React, { useState, useEffect } from "react";
import MobileNav from "../components/MobileNav";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";

function MobileTransactions() {
  const [transactions, setTransactions] = useState({
    loading: false,
    data: [],
  });
  const fetchTransactions = () => {
    setTransactions({ loading: true });
    axios
      .get("https://master-budget-app.herokuapp.com/api/transactions", {
        headers: {
          "auth-token": localStorage.getItem("userInfo"),
          "user-id": sessionStorage.getItem("email"),
        },
      })
      .then((response) => {
        if (response.data) {
          let transactionsClone = response.data.slice();
          transactionsClone = response.data;
          setTransactions({ loading: false, data: transactionsClone });
          console.log(transactions);
        }
      })
      .catch((err) => {
        setTransactions({ loading: false });
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return transactions.loading ? (
    <LoadingSpinner />
  ) : (
    <div className="card transactions">
      <header className="card-header">
        <h1 className="card-header-title">Transactions</h1>
      </header>
      <div className="card-content">
        <div className="content is-medium">
          <ul>
            {transactions.data.map((transaction) => {
              return (
                <li key={transaction._id}>
                  {transaction.name} - {transaction.amount} ({transaction.type})
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}

export default MobileTransactions;
