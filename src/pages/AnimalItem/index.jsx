import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const ProductItem = () => {
  const { id } = useParams();
  const { animals } = useSelector((state) => state.animals);
  console.log(animals);
  const animalsItem = animals && animals[id];

  if (!animalsItem) {
    return <div></div>;
  }

  return (
    <div class="min-w-screen py-20 flex items-center max-xl:px-16 max-sm:px-6">
      <div class="w-full max-w-6xl rounded-3xl big-card shadow-2xl md:px-20 sm:px-8 px-6 pb-14 pt-14 mx-auto text-gray-800 relative md:text-left flex flex-col">
        <Link to="/">
          <button
            className="info_more-btn2 flex gap-x-1 items-center mt-7 mr-7"
            data-sidebar-btn
          >
            <p>
              <ion-icon name="chevron-back-outline"></ion-icon>
            </p>
            <span>Back</span>
          </button>
        </Link>
        <div class="xl:flex">
          <div class="xl:w-1/2">
            <div class="relative">
              <img
                src={animalsItem.img}
                class="w-full relative z-10 xl:h-[278px] object-cover rounded-lg"
                alt={animalsItem.title}
              />
              <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
            </div>
          </div>
          <div class="w-full xl:w-1/2 xl:px-5">
            <div class="">
              <h1 class="font-bold uppercase text-2xl mb-5 title max-xl:mt-5">
                {animalsItem.title}
              </h1>
              <p class="text-sm">{animalsItem.fulltext}</p>
            </div>
          </div>
        </div>
        <p className="text-sm">
          {animalsItem.fulltext2}
          <a
            href="#"
            class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
          >
            MORE <i class="mdi mdi-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
