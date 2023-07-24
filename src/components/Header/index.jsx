import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAnimals } from "../../redux/animals/animalsSlice";

function Header() {
  const { user } = useSelector((store) => store.user);
  const [searchText, setSearchText] = useState("");
  const animals = useSelector((state) => state.animals.animals);
  const [isListVisible, setListVisible] = useState(false);
  const filterAnimalsList =
    animals &&
    animals.filter((animal) =>
      animal.title.toLowerCase().includes(searchText.toLowerCase())
    );
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  const handleClick = () => {
    setListVisible(true);
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setListVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <main>
        <section>
          <div
          id="header"
            className="bg-gray-100 md:px-4 py-8 flex md:justify-between max-md:justify-center max-md:text-center space-y-6"
          >
            <div className="px-16 sm:h-96 sm:py-52 py-20 bg-gradient-to-tr rounded-md flex items-center">
              <div className="flex flex-col max-md:items-center header-info">
                  <h2 className="text min-[590px]:text-4xl text-2xl opacity-1">QUALITYLIFE</h2>
                  <p className="opacity-1 text mt-4 font-thin tracking-wider leading-7 md:w-96 max-[590px]:text-sm">
                    Молодежная Команда КР призывает всех помочь нам в развитии
                    нашей родины! И в этом нам поможешь именно ТЫ! Поддержи нас
                    - расскажи о нас своим друзьям и близким. Мы верим в себя,
                    мы верим в свой успех.
                  </p>
                {user.email.length ? (
                  <div></div>
                ) : (
                  <div>
                    <Link
                      to="/registration"
                      className="uppercase inline-block mt-8 max-[590px]:text-xs bg-green-800 py-2 px-4 rounded-xl max-[590px]:font-semibold hover:bg-green-900 text-white"
                    >
                      Вступить в команду
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div ref={inputRef} className="absolute right-5 top-22">
              <div className="space-x-2 lg:w-80 mr-2 hidden md:flex">
                <input
                  type="text"
                  placeholder="Поиск"
                  className="search rounded-md outline-none pl-2 w-full pt-1 pb-1 transition-opacity duration-500 text-green-600 placeholder:text-green-600"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onClick={handleClick}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div
                className="mt-1 rounded-lg h-96 overflow-auto transition-all duration-500"
                style={{
                  maxHeight: isListVisible ? "320px" : "0",
                  opacity: isListVisible ? 1 : 0,
                }}
              >
                <ul>
                  {filterAnimalsList &&
                    filterAnimalsList.map((animal) => (
                      <Link
                        to={`/${animal.id}`}
                        className="list-item px-4"
                        key={animal.id}
                      >
                        <li key={animal.id} className="item py-2 border-b">
                          {animal.title}
                        </li>
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Header;
