import axios from "axios";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAccount } from "../../redux/user/user";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import "./style.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/register", data)
      .then((resolve) => {
        toast.success("Регистрация успешно выполнена");
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          toast.error("Такой email уже зарегистрирован");
        } else {
          toast.error("Ошибка сервера");
        }
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
      />
      <div className="flex justify-center mx-auto my-20 px-10">
        <div className="w-full max-w-lg nav rounded-lg shadow-lg">
          <div className="px-6 py-8">
            <h1 className="text-2xl font-bold text-green-800 mb-6">
              Регистрация
            </h1>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Полное имя
              </label>
              <input
                {...register("name", {
                  required: {
                    message: "Заполните поле",
                    value: true,
                  },
                })}
                className="w-full border-2 rounded px-3 py-2 text-sm text-green-800 placeholder-italic search focus:placeholder:text-green-500 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Полное имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-xs mt-1 error-gray">
                {errors.name && errors.name?.message}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Телефон
              </label>
              <InputMask
                {...register("phone", {
                  required: {
                    message: "Это поле обязательное к заполнению",
                    value: true,
                  },
                  pattern: {
                    value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                    message: "Заполните номер телефона",
                  },
                })}
                mask={`+\\9\\96(999)99-99-99`}
                className={`w-full border-2 rounded px-3 py-2 text-sm text-green-800 placeholder-italic search focus:placeholder:text-green-500 focus:outline-none focus:border-green-500 ${
                  errors.phone ? "register__form-input_error" : ""
                }`}
                type="tel"
                placeholder="Телефон"
              />
              <p className="text-xs mt-1 error-gray">
                {errors.phone && errors.phone?.message}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Адрес
              </label>
              <input
                {...register("address", {
                  required: {
                    message: "Заполните поле",
                    value: true,
                  },
                })}
                className="w-full border-2 rounded px-3 py-2 text-sm text-green-800 placeholder-italic search focus:placeholder:text-green-500 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <p className="text-xs mt-1 error-gray">
                {errors.address && errors.address?.message}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Страна
              </label>
              <input
                {...register("country", {
                  required: {
                    message: "Заполните поле",
                    value: true,
                  },
                })}
                className="w-full border-2 rounded px-3 py-2 text-sm text-green-800 placeholder-italic search focus:placeholder:text-green-500 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Страна"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <p className="text-xs mt-1 error-gray">
                {errors.country && errors.country?.message}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Email
              </label>
              <input
                {...register("email", {
                  required: {
                    message: "Email обязательно к заполнению",
                    value: true,
                  },
                  minLength: {
                    message: "Минимум 10 символов",
                    value: 10,
                  },
                  pattern: {
                    message: "Напишите правильно свой email",
                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                  },
                })}
                className="w-full border-2 rounded px-3 py-2 text-sm text-green-800 placeholder-italic search focus:placeholder:text-green-500 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p
                className={`text-xs mt-1 ${
                  errors.email &&
                  (errors.email?.message === "Напишите правильно свой email" ||
                    errors.email?.message === "Минимум 10 символов")
                    ? "error-red"
                    : "error-gray"
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
                    pattern: {
                      value:
                        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                      message:
                        "Пароль должен содержать не менее 8 символов, заглавную букву, число!",
                    },
                  })}
                  className="w-full border-2 rounded px-3 py-2 text-sm text-green-800 placeholder-italic search focus:placeholder:text-green-500 focus:outline-none focus:border-green-500"
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
                  errors.password &&
                  errors.password?.message ===
                    "Пароль должен содержать не менее 8 символов, заглавную букву, число!"
                    ? "error-red"
                    : "error-gray"
                }`}
              >
                {errors.password && errors.password?.message}
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800 mb-1">
                Подтверждение пароля
              </label>
              <div className="flex">
                <input
                  {...register("confirmPassword", {
                    required: {
                      message: "Введите подтверждение пароля",
                      value: true,
                    },
                    validate: (value) =>
                      value === password || "Пароли должны совпадать",
                  })}
                  className="w-full border-2 rounded px-3 py-2 text-sm text-green-800 placeholder-italic search focus:placeholder:text-green-500 focus:outline-none focus:border-green-500"
                  type="password"
                  placeholder="Подтверждение пароля"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                <p className="text-xs mt-1 error-gray">
                  {errors.confirmPassword && errors.confirmPassword.message}
                </p>
            </div>
            <div className="mb-6">
              <label className="block text-xs font-medium text-green-800">
                Пол
              </label>
              <div className="flex items-center">
                <input
                  {...register("gender", {
                    required: {
                      message: "Заполните поле",
                      value: true,
                    },
                  })}
                  className="mr-2 appearance-none search border-2 border-gray-600 rounded-md p-2 text-green-400 focus:outline-none focus:bg-green-500"
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  id="male"
                />
                <label htmlFor="male" className="text-xs text">
                  Мужской
                </label>
                <input
                  {...register("gender", {
                    required: {
                      message: "Заполните поле",
                      value: true,
                    },
                  })}
                  className="ml-4 mr-2 appearance-none search border-2 border-gray-600 rounded-md p-2 text-green-400 focus:outline-none focus:bg-green-500"
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  id="female"
                />
                <label htmlFor="female" className="text-xs text">
                  Женский
                </label>
              </div>
              <p className="text-xs mt-1 error-gray">
                {errors.gender && errors.gender?.message}
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-center">
                <button className="py-2 px-6 text-sm bg-green-800 text-white rounded-full hover:bg-green-700 focus:outline-none">
                  Регистрация
                </button>
                <Link onClick={handleScrollToTop} to="/login">
                  <h1 className="text-sm mt-3 flex-2 underline text">
                    Уже есть аккаунт
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

export default Register;
