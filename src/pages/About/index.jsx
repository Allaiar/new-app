import React from "react";
import NavAndMenu from "../../components/NavAndMenu/index";
import Footer from "../../components/Footer";
import img from '../../assets/images/background-section.png'
function About(props) {
  return (
    <div>
      <NavAndMenu />
      <main>
      <section class="px-4 py-6 lg:min-h-screen">
      <div class="container mx-auto">
        <div class="bg-green-600 rounded-lg p-8">
          <p class="text-indigo-100 text-lg leading-relaxed">
                QualityLife - организация, посвященная улучшению качества жизни
                и защите окружающей среды. Мы являемся командой энтузиастов,
                которые стремятся сделать нашу планету лучшим местом для жизни.
                Наша миссия заключается в привлечении волонтеров и активных
                людей, которые разделяют нашу страсть к экологии. Мы призываем
                всех принять участие в разнообразных проектах и инициативах,
                направленных на защиту природы, устранение загрязнений и
                содействие устойчивому развитию. Члены нашей команды работают
                над различными аспектами экологической защиты, включая:
                Организацию и проведение мероприятий по очистке природных
                территорий от мусора. Посадку деревьев и создание зеленых зон
                для сохранения биоразнообразия. Пропаганду и образование в
                области экологии через проведение семинаров, тренингов и
                презентаций. Поддержку и развитие экологических проектов в
                сотрудничестве с местными организациями и властями. Активное
                участие в общественном дебате и лоббирование политик,
                способствующих сохранению окружающей среды. Мы верим, что каждый
                человек имеет возможность внести вклад в сохранение нашей
                планеты, и приглашаем вас присоединиться к нашей команде. Вместе
                мы можем сделать реальное изменение и создать более зеленое и
                устойчивое будущее для всех.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default About;
