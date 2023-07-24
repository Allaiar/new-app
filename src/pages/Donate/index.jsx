import React, { useState } from "react";
import PayPal from "../../components/PayPal/index"
function Donate() {
  const [amount, setAmount] = useState(10);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = () => {
    setIsLoading(true);
    // Отправка запроса на сервер для обработки пожертвования
    // В данном примере просто выводим информацию в консоль
    console.log(
      `Вы пожертвовали ${amount} долларов от пользователя ${username}`
    );
    console.log(`Сообщение: ${messages}`);
    setIsLoading(false);
    setAmount(10);
    setUsername("");
    setMessages("");
  };

  const handleAmountDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleAmountIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <div className="text-gray-600 p-4 flex flex-col justify-center py-24">
      <section id="donate" className="mx-auto">
        <div className="p-6 bg-[#1e1f1e] rounded">
          <div className="flex items-center justify-center font-black m-3 mb-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mr-3 animate-pulse text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="tracking-wide text-2xl">
              Поддержите в развитии экологи
            </h1>
          </div>
          <form
            id="donate_form"
            className="flex flex-col justify-center"
            onSubmit={handleDonate}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="inline-flex items-center self-start">
                <p className="text-3xl mr-2 mt-1">
                  <ion-icon name="card"></ion-icon>
                </p>
                <span className="font-bold">
                  {amount}
                  <span className="text-sm">сом</span>/ Мешок
                </span>
              </div>
              <div className="flex">
                <button
                  type="button"
                  onClick={handleAmountDecrease}
                  className="bg-yellow-600 p-1.5 font-bold rounded focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  value={amount}
                  className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5 block border bg-[#1e1f1e] border-green-700 rounded text-sm shadow-sm placeholder-green-900 text-green-700 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  onChange={(e) => setAmount(e.target.value)}
                />

                <button
                  type="button"
                  onClick={handleAmountIncrease}
                  className="bg-green-600 p-1.5 font-bold rounded focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <label className="font-bold">От</label>
            <input
              className="mb-3 px-2 py-1.5 mt-1 block w-full border bg-[#1e1f1e] text-green-900 border-gray-500 rounded text-sm shadow-sm placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Имя отправителя"
              required
            />
            <label className="font-bold">Сообщения (необязательно)</label>
            <textarea
              className="mb-3 mt-1 block w-full px-2 py-1.5 border bg-[#1e1f1e] text-green-900 border-gray-500 rounded text-sm shadow-sm placeholder-gray-600 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 h-28"
              value={messages}
              onChange={(e) => setMessages(e.target.value)}
              placeholder="Напиши что-нибудь"
            ></textarea>
            <button
              className="px-4 py-1.5 rounded-md shadow-lg bg-gradient-to-r from-green-800 to-green-900 font-bold text-gray-100 block transition duration-300"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : <PayPal/>}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Donate;
