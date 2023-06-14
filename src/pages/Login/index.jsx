import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const LoginProccess = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .get("http://localhost:8000/users/" + userName)
        .then(() => {
          toast.success("Вы успешно вошли в свой аккаунт!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch(() => {
          toast.error("Введите корректные данные");
        });
    }
  };

  const validate = () => {
    let result = true;
    if (userName === "") {
      result = false;
      alert("Заполните никнейм");
    }
    if (pass === "") {
      result = false;
      alert("Заполните пароль");
    }
    return result;
  };

  {
    /* <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  /> */
  }
  return (
    <div className="">
      <div class="flex flex-col h-screen bg-gray-100">
        <div class="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-green-800">
              Логин
            </h2>
            <form class="mt-10" method="POST">
              <label
                for="email"
                class="block text-xs font-semibold text-green-600 uppercase"
              >
                ИМЯ ПОЛЬЗОВАТЕЛЯ
              </label>
              <input
                type="text"
                placeholder="введите имя пользователя"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                class="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
              />
              <label
                for="password"
                class="block mt-2 text-xs font-semibold text-green-600 uppercase"
              >
                Пароль
              </label>
              <input
                type="password"
                placeholder="введите пароль"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
              />
              <button
                onClick={LoginProccess}
                class="w-full py-3 mt-10 bg-green-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-green-700 hover:shadow-none"
              >
                Войти
              </button>
              <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                <a href="#" class="flex-2 underline">
                  Забыли пароль?
                </a>
                <p class="flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto">
                  или
                </p>
                <a href="#" class="flex-2 underline">
                  <Link to="/registration">Зарегистрироваться</Link>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
