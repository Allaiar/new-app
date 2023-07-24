import React from "react";

function FaqPage(props) {
  return (
    <div className="volunteers-page py-20 px-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Часто задаваемые вопросы</h2>
      <div className="bg-[#1e1f1e] volunteer-section rounded-lg shadow p-6 mb-6">
        <h3 className="text-gray-400 text-lg font-bold mb-4">Как стать волонтером?</h3>
        <p className="text-gray-400">Чтобы стать волонтером, вам необходимо выполнить следующие шаги:</p>
        <ol className="text-gray-400 list-decimal pl-6 my-4">
          <li>Посетите наш веб-сайт и найдите раздел "Вступить в команду".</li>
          <li>Зарегистрируйтесь, заполнив необходимую информацию о себе.</li>
          <li>Ознакомьтесь с доступными проектами и выберите тот, который вам наиболее интересен.</li>
          <li>Свяжитесь с нами через форму обратной связи или отправьте нам электронное письмо, указав свой выбранный проект.</li>
          <li>После рассмотрения вашей заявки мы свяжемся с вами для уточнения деталей и дальнейших инструкций.</li>
        </ol>
        <p className="text-gray-400">Мы всегда рады новым волонтерам и ценим ваше желание помочь нам в наших проектах. Благодарим вас за вашу заинтересованность в волонтерстве!</p>
      </div>
      <div className="bg-[#1e1f1e] volunteer-section rounded-lg shadow p-6 mb-6">
        <h3 className="text-gray-400 text-lg font-bold mb-4">Какие преимущества волонтерства?</h3>
        <p className="text-gray-400">Волонтерство предлагает ряд значимых преимуществ:</p>
        <ul className="text-gray-400 list-disc pl-6 my-4">
          <li>Возможность внести положительный вклад в общественное благо и помочь тем, кто в нем нуждается.</li>
          <li>Развитие и расширение навыков, таких как коммуникация, организация, решение проблем и т. д.</li>
          <li>Возможность научиться работать в команде и взаимодействовать с людьми разных культур и фонов.</li>
          <li>Удовлетворение от помощи и возможность видеть непосредственные результаты своего труда.</li>
          <li>Расширение круга общения, знакомство с новыми людьми и создание долговременных дружеских связей.</li>
          <li>Получение ценного опыта, который может быть полезным для будущих карьерных возможностей.</li>
        </ul>
      </div>
      <div className="bg-[#1e1f1e] volunteer-section rounded-lg shadow p-6">
        <h3 className="text-gray-400 text-lg font-bold mb-4">Какие виды волонтерской работы доступны?</h3>
        <p className="text-gray-400">Мы предлагаем разнообразные виды волонтерской работы, включая:</p>
        <ul className="text-gray-400 list-disc pl-6 my-4">
          <li>Участие в экологических проектах, направленных на сохранение окружающей среды и природных ресурсов.</li>
          <li>Помощь волонтерским центрам и организациям, занимающимся помощью нуждающимся.</li>
          <li>Поддержка местных мероприятий и фестивалей, включая организацию и проведение мероприятий.</li>
          <li>Работа с детьми и молодежью, включая образовательные программы и развлекательные мероприятия.</li>
          <li>Помощь в проведении фондовых сборов и событий для сбора средств на благотворительные цели.</li>
          <li>Участие в программе волонтерского путешествия, позволяющей помогать в других странах и культурах.</li>
        </ul>
      </div>
    </div>
  );
}

export default FaqPage;
