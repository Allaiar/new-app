import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOutAccount } from "../../redux/user/user";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/index";
import LogOutModalWindow from "../LogOutModalWindow/index";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";
import img from "../../assets/images/My project.png";
import { ToastContainer } from "react-toastify";
import "./style.css";

function NavAndMenu(props) {
  const animals = useSelector((state) => state.animals.animals);
  const { user } = useSelector((store) => store.user);
  const [modal, setModal] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isListVisible, setListVisible] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);

  const filterAnimalsList =
    animals &&
    animals.filter((animal) =>
      animal.title.toLowerCase().includes(searchText.toLowerCase())
    );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutAccount());
    localStorage.removeItem("user");
    setModalWindow(false);
    navigate("/");
  };

  const handleClick = () => {
    setListVisible(true);
  };

  const MenuTimes = () => {
    setMenuOpen(!isMenuOpen);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setMenuOpen(false);
        setListVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
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
      <nav className={`shadow nav ${isMenuOpen ? "" : ""}`}>
        <div className="flex justify-between items-center py-6 px-6 container mx-auto">
          <Link to="/">
            <div className="flex gap-x-2 items-center">
              <p className="text-green-700 -mr-2">
                <img src={img} alt="" className="w-10" />
              </p>
              <h1 className="text-2xl font-bold bg-gradient-to-tr from-green-700 to-green-800 bg-clip-text text-transparent hover:cursor-pointer">
                QUALITYLIFE
              </h1>
            </div>
          </Link>
          <div>
            <div
              ref={inputRef}
              className="space-x-2 lg:w-80 mr-2 hidden max-md:flex custom-hide-div"
            >
              <input
                type="text"
                placeholder="Поиск"
                className="search outline-none pl-2.5 w-full pt-1 pb-1 transition-opacity duration-500 text-green-600 placeholder:text-green-600 focus:border-[#0aa245] shadow-lg"
                style={{
                  borderRadius: isListVisible ? "5px 5px 0 0" : "5px",
                }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onClick={handleClick}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg w-5 text-green-600"
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
              className="h-96 overflow-auto rounded-b-xl transition-all duration-500 absolute"
              style={{
                maxHeight: isListVisible ? "320px" : "0",
                opacity: isListVisible ? 1 : 0,
                zIndex: 999,
              }}
            >
              <ul className="list w-52 px-2">
                {filterAnimalsList &&
                  filterAnimalsList.map((animal) => (
                    <Link
                      to={`/${animal.id}`}
                      className="text-green-600 hover:text-green-400"
                      key={animal.id}
                    >
                      <li className="py-2 border-b">{animal.title}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button"></div>
            </label>
            <ul className="md:flex md:space-x-4 mt-1 max-[768px]:space-y-2 menu items-center">
              <li className="text-green-700 text-md font-bold hover:text-green-800 mr-2">
                <Link onClick={MenuTimes} to="/">
                  <ion-icon name="home"></ion-icon>
                </Link>
              </li>
              <li className="text-green-700 text-md font-bold hover:text-green-800">
                <Link onClick={MenuTimes} to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  onClick={MenuTimes}
                  className="text-green-700 hover:text-green-800 text-md font-bold"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={MenuTimes}
                  className="text-green-700 hover:text-green-800 text-md font-bold"
                >
                  Contact
                </Link>
              </li>
              {user.email.length ? (
                <li className="flex gap-x-2 modal">
                  <p
                    onClick={() => setModal(true)}
                    className="text-2xl cursor-pointer text-green-700 hover:text-green-800"
                  >
                    <ion-icon name="add-outline"></ion-icon>
                  </p>
                  <p
                    className="cursor-pointer text-2xl text-green-700 hover:text-green-800"
                    onClick={() => setModalWindow(true)}
                  >
                    <ion-icon name="log-out-outline"></ion-icon>
                  </p>
                </li>
              ) : (
                <></>
              )}
              <li>
                <BtnDarkMode />
              </li>
              <div></div>
              {modal && <Modal setModal={setModal} />}
              {modalWindow && (
                <LogOutModalWindow
                  setModalWindow={setModalWindow}
                  handleLogout={handleLogout}
                />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavAndMenu;
