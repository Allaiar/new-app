import React from "react";
import img from "../../assets/images/background-section.png";
import { Link } from "react-router-dom";
function index(props) {
  return (
    <>
      <header>
        <nav class="shadow">
          <div class="flex justify-between items-center py-6 px-10 container mx-auto">
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-tr from-green-400 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
                QUALITYLIFE
              </h1>
            </div>
            <div>
              <div class="hover:cursor-pointer sm:hidden">
                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-green-400 to-green-600"></spnan>
                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-green-400 to-green-600"></spnan>
                <spnan class="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-green-400 to-green-600"></spnan>
              </div>
              <div class="flex items-center">
                <ul class="sm:flex space-x-4 hidden items-center">
                  <li>
                    <a
                      href="#"
                      class="text-green-600 hover:text-green-500 text-md "
                    >
                      <Link to="/about">О нас</Link>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-green-600 hover:text-green-500 text-md "
                    >
                      Команда
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-green-600 hover:text-green-500 text-md "
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
                <div class="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                  <h1 class="text-green-700  py-2 hover:cursor-pointer hover:text-green-600">
                    <Link to='/Login'>Войти</Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div
            style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
            class="sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4"
          >
            <div class="h-96 col-span-4 bg-gradient-to-tr from-green-600 to-green-800 rounded-md flex items-center">
              <div class="ml-20 w-80">
                <h2 class="text-white text-4xl">QUALITYLIFE</h2>
                <p class="text-indigo-100 mt-4 font-thin tracking-wider leading-7 w-96">
                  Молодежная Команда КР призывает всех помочь нам в развитии
                  нашей родины! И в этом нам поможешь именно ТЫ! Поддержи нас -
                  расскажи о нас своим друзьям и близким. Мы верим в себя, мы
                  верим в свой успех.
                </p>
                <a
                  href="#"
                  class="uppercase inline-block mt-8 text-sm bg-white py-2 px-4 rounded font-semibold hover:bg-indigo-100"
                >
                  <Link to="/Registration">Вступить в команду</Link>
                </a>
              </div>
            </div>
            <div class="h-96 col-span-1 ">
              <div class="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search"
                  class="bg-gray-100 rounded-md outline-none pl-2.5 ring-green-700 w-full pt-1 pb-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div class="mt-8">
                <h1 class="text-xl text-green-600 mb-4 cursor-pointer">
                  О нас
                </h1>
                <ul>
                  <li class="py-2 border-b">
                    <a href="#" class="text-green-600 hover:text-green-400">
                      Новости
                    </a>
                  </li>
                  <li class="py-2 border-b">
                    <a href="#" class="text-green-600 hover:text-green-400">
                      Волонтерство
                    </a>
                  </li>
                  <li class="py-2 border-b">
                    <a href="#" class="text-green-600 hover:text-green-400">
                      Помощь
                    </a>
                  </li>
                  <li class="py-2 border-b">
                    <a href="#" class="text-green-600 hover:text-green-400">
                      Что мы делаем
                    </a>
                  </li>
                  <li class="py-2">
                    <a href="#" class="text-green-600 hover:text-green-400">
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default index;
