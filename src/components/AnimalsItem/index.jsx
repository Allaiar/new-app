import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { deleteAnimal, editAnimal } from "../../redux/animals/animalsSlice";
import { useDispatch } from "react-redux";
import ModalEditing from "../ModalEditing";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AnimalsItem = ({ animals }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(animals.id);
  const [editing, setEditing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [title, setTitle] = useState(animals.title);
  const [subtext, setSubtext] = useState(animals.subtext);
  const [showMenuToggle, setShowMenuToggle] = useState(true);
  const [fulltext, setFulltext] = useState(animals.fulltext);
  const [fulltext2, setFulltext2] = useState(animals.fulltext2);
  const { user } = useSelector((store) => store.user);
  const handleScrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  const Delete = () => {
    dispatch(deleteAnimal(animals.id));
    window.location.reload();
  };

  const MenuToggle = (id) => {
    setShowMenu(id === showMenu ? null : id);
    setShowMenuToggle(false);
  };

  const Edit = () => {
    if (editing) {
      const updatedAnimals = {
        id: id,
        title: title,
        subtext: subtext,
        fulltext: fulltext,
        fulltext2: fulltext2,
      };
      dispatch(editAnimal(updatedAnimals));
      toast.success("Вы успешно внесли изменения");
    }
    setTitle(animals.title);
    setSubtext(animals.subtext);
    setFulltext(animals.fulltext);
    setFulltext2(animals.fulltext2);
    setEditing(!editing);
  };

  const Cancel = () => {
    setId(animals.id);
    setTitle(animals.title);
    setSubtext(animals.subtext);
    setFulltext(animals.fulltext);
    setFulltext2(animals.fulltext2);
    setEditing(false);
    setShowMenu(false);
    setShowMenuToggle(true);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowMenu(false);
        setShowMenuToggle(true);
        setEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="card rounded-lg shadow-md p-4 mb-10">
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
      <div className="text-end">
        <Link onClick={handleScrollToTop} to={`/${animals.id}`}>
          <img
            src={animals.img}
            alt={animals.title}
            className="rounded-md w-full sm:h-80 md:h-60 lg:h-44 object-cover hover:opacity-75"
          />
        </Link>
        {user.email.length ? (
          <div>
            {showMenuToggle && (
              <div className="flex justify-end mr-1">
                <p
                  onClick={() => MenuToggle(animals.id)}
                  className="text-xl mt-2 cursor-pointer absolute"
                >
                  <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </p>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div ref={inputRef} className="flex pb-2">
        <Link onClick={handleScrollToTop} to={`/${animals.id}`}>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="mt-2 title">{animals.title}</h3>
            </div>
            <p className="italic text">{animals.subtext}</p>
          </div>
        </Link>
        {user.email.length ? (
          <div className="flex justify-end absolute mr-1 mt-1 w-56">
            {editing ? (
              <>
                {showMenu && (
                  <ModalEditing
                    animals={animals}
                    Edit={Edit}
                    Cancel={Cancel}
                    title={title}
                    subtext={subtext}
                    setTitle={setTitle}
                    setSubtext={setSubtext}
                  />
                )}
              </>
            ) : (
              <div>
                {showMenu && (
                  <div
                    className="flex items-center gap-x-2"
                    style={{ position: "absolute", background: "transparent" }}
                  >
                    <p
                      className="py-2 rounded -ml-2 cursor-pointer"
                      onClick={Edit}
                    >
                      <ion-icon name="create"></ion-icon>
                    </p>
                    <p
                      className="py-2 rounded cursor-pointer"
                      onClick={Delete}
                    >
                      <ion-icon name="trash"></ion-icon>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AnimalsItem;
