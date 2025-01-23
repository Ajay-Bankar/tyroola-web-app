import React from "react";

// Payment options data
const paymentMethods = [
 
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXg_kjtqKtVu3sGLuqlv00QMO2ZThXgsPnqA&s", // Visa logo URL
    title: "Zippay",
    description:
    "Zip gives you the freedom to buy now and pay later. Repayments are flexible to suit your lifestyle - weekly, fortnightly or monthly."

    ,
  },
  {
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg", // Mastercard logo URL
    title: "Paypal Pay in 4",
    description:
      "Split your new tyre payments in 4– one every two weeks. It’s interest free fromPayPal.",
  },
  {
    id: 4,
    image: "https://paymentsplugin.com/wp-content/uploads/2023/11/apple-pay-google-pay-large.png", // Mastercard logo URL
    title: "Apple Pay / Google Pay"
,
    description:
      "Make easy and secure digital tyre payments with Apple or Google Pay. Simply tap the button and confirm the payment on your device.",
  },
];

const PaymentOptions = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Buy Now, Pay Later & Major Payment Methods
        </h2>

        {/* Subheading */}
        <p className="text-lg text-center text-gray-600 mb-10">
          All major credit cards and interest-free finance available
        </p>

        {/* Payment Method Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white p-6   rounded-lg shadow-md text-center"
            >
              {/* Bank Image */}
              <img
                src={method.image}
                alt={method.title}
                className="w-full  h-24 mx-auto mb-4 object-contain"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
