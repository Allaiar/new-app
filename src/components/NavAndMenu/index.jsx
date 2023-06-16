import React from "react";
import { Link } from "react-router-dom";
function NavAndMenu(props) {
  return (
    <div>
      <nav class="shadow">
        <div class="flex justify-between items-center py-6 px-10 container mx-auto">
          <div>
            <h1 class="text-2xl font-bold bg-gradient-to-tr from-green-400 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">
              <Link to="/">QUALITYLIFE</Link>
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
                    <Link to="/About">О Нас</Link>
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
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavAndMenu;
