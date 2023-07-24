import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
function Contact(props) {
  const [messages, setMessages] = useState([]);
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("http://localhost:8000/messages", {
          id,
          email,
          message,
        })
        .then((res) => {
          toast.success("Вы успешно отправили сообщение");
          const messageListItem = res.data;
          setMessages([messageListItem, ...messages]);
          setId("");
          setEmail("");
          setMessage("");
        })
        .catch(() => {
          toast.error("Ошибка сервера!");
        });
    }
  };
  const validate = () => {
    if (id === "" || id === null) {
      toast.error("Заполните имя пользователя");
      return false;
    }
    if (email === "" || email === null) {
      toast.error("Заполните поле email");
      return false;
    }
    if (message === "" || message === null) {
      toast.error("Напишите сообщение");
      return false;
    }
    return true;
  };
  return (
    <div>
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
      <article
        className="contact md:mx-28 mx-16 my-20 pt-5 px-10 rounded-3xl"
        data-page="contact"
      >
        <header>
          <h2 class="text-3xl font-bold mb-5">Contact</h2>
        </header>

        <section
          className="relative md:h-[350px] h-[250px] w-full rounded-lg mb-16 map overflow-hidden"
          data-mapbox
        >
          <figure className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207198.06226106337!2d74.44381569229867!3d42.853394235354095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1688981966148!5m2!1sru!2skg"
              width="600"
              height="450"
              className="w-full h-full map"
              style={{filter:"grayscale(1)"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </section>

        <section class="mb-10">
          <h3 class="h3 form-title mb-5 text-3xl font-bold">
            Contact Form
          </h3>

          <form action="#" class="form" data-form>
            <div class="input-wrapper flex md:flex-row flex-col gap-x-8 gap-y-8 justify-center mb-8">
              <input
                type="text"
                name="fullname"
                className="form-input w-full list rounded-xl contact-input py-3 px-5 placeholder:text-[#4e4e4e] font-medium text-[#6B7280] outline-none focus:border-[#0aa245] focus:shadow-md"
                placeholder="Full name"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

              <input
                type="email"
                name="email"
                className="form-input w-full list rounded-xl contact-input py-3 px-5 placeholder:text-[#4e4e4e] font-medium text-[#6B7280] outline-none focus:border-[#0aa245] focus:shadow-md"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <textarea
              name="message"
              className="list mb-3 mt-1 block w-full px-4 py-3 list text-[#6B7280] contact-input rounded-xl text-md shadow-sm placeholder:text-[#4e4e4e] focus:outline-none focus:border-green-600 focus:ring-green-600 h-32"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div onClick={handleSubmit} className="flex justify-end mt-6">
              <button class="form-btn max-md:w-full" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </section>
      </article>
    </div>
  );
}

export default Contact;
