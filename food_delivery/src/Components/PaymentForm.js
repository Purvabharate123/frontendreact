import React, { useState } from "react";

const PaymentForm = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment success
    setPaymentSuccess(true);
  };

  return (
    <section id="payment" className="payment">
      <h2>Payment</h2>
      {paymentSuccess ? (
        <div className="success-message">
          <p>Payment Successful! Thank you for your order.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name on Card" required />
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Expiration Date (MM/YY)" required />
          <input type="text" placeholder="CVV" required />
          <button type="submit">Submit Payment</button>
        </form>
      )}
    </section>
  );
};

export default PaymentForm;

