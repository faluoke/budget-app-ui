import React, { useState } from "react";

export default function AddTransactions(props) {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    amount: "",
  });

  const [active, setActive] = useState("modal");

  const launchModal = () => {
    if (active === "modal") {
      setActive("modal is-active");
    }
  };

  const closeModal = () => {
    if (active === "modal is-active") {
      setActive("modal");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const clone = { ...inputs };
    clone[name] = value;
    setInputs(clone);
  };

  const handleOnClickAddTransaction = () => {
    props.addTransaction(
      inputs.name,
      inputs.type,
      inputs.amount,
      props.budgetId
    );
    closeModal();
  };

  return (
    <>
      <div>
        <button className="button is-link" onClick={launchModal}>
          Add a transaction
        </button>
        <div className={active}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <h4 className="modal-card-title">Add New Expense</h4>
              <button
                onClick={closeModal}
                className="delete"
                aria-label="close"
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="content">
                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="type"
                      value="debt"
                      onChange={(event) => handleInputChange(event)}
                    />
                    Expense
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="type"
                      value="income"
                      onChange={(event) => handleInputChange(event)}
                    />
                    Income
                  </label>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      placeholder="What is this for?"
                      onChange={(event) => handleInputChange(event)}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input amount"
                      type="text"
                      name="amount"
                      placeholder="How much was it for?"
                      onChange={(event) => handleInputChange(event)}
                    />
                  </div>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={handleOnClickAddTransaction}
              >
                Add New Transaction
              </button>
              <button onClick={closeModal} className="button">
                Cancel
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
