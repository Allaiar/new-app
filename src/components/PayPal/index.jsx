import React from "react";

function PayPal() {
  const handlePaymentClick = () => {
    const paypalUsername = "alex";
    const productPrice = "1";
    const paymentLink = `https://www.paypal.me/${paypalUsername}/${productPrice}`;
    window.location.href = paymentLink;
  };

  return (
    <button onClick={handlePaymentClick}>Пожертвовать через PayPal</button>
  );
}

export default PayPal;
