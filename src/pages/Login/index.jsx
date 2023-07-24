import axios from "axios";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "../../redux/user/user";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/login", data)
      .then((resolve) => {
        toast.success("Вход выполнен успешно");
        navigate("/");
        dispatch(
          loginAccount({
            ...resolve.data.user,
            token: resolve.data.accessToken,
          })
        );
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...resolve.data.user,
            token: resolve.data.accessToken,
          })
        );
      })
      .catch(() => {
        toast.error("Не правильный логин или пароль");
      });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };

  return (
    <div className="container mx-auto">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="flex justify-center mx-auto my-32 px-10">
        <div className="w-full max-w-lg nav rounded-lg shadow-lg">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-bold text-green-800 mb-6">Вход</h1>
            <div className="mb-8">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Email
              </label>
              <input
                {...register("email", {
                  required: {
                    message: "Email обязателен к заполнению",
                    value: true,
                  },
                })}
                className="login-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p
                className={`text-xs mt-1 ${
                  errors.email ? "error-red" : "error-gray"
                }`}
              >
                {errors.email && errors.email?.message}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Пароль
              </label>
              <div className="flex">
                <input
                  {...register("password", {
                    required: {
                      message: "Пароль обязателен к заполнению",
                      value: true,
                    },
                  })}
                  className="login-input"
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="ml-4 mt-1 focus:outline-none"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <div className="text-2xl text-[#5c5d5c]">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                  ) : (
                    <div className="text-2xl text-[#5c5d5c]">
                      <ion-icon name="eye-off-outline"></ion-icon>
                    </div>
                  )}
                </button>
              </div>
              <p
                className={`text-xs mt-1 ${
                  errors.password ? "error-red" : "error-gray"
                }`}
              >
                {errors.password && errors.password?.message}
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <button className="py-2 px-6 text-sm bg-green-800 text-white rounded-full hover:bg-green-700 focus:outline-none">
                  Войти
                </button>
                <Link onClick={handleScrollToTop} to="/registration">
                  <h1 className="text-sm mt-3 flex-2 underline text">
                    Нет аккаунта? Зарегистрируйтесь
                  </h1>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
