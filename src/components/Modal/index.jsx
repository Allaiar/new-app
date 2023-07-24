import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAnimals, getAnimals } from "../../redux/animals/animalsSlice";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ setModal }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [subtext, setSubtext] = useState("");
  const [url, setUrl] = useState("");
  const [fulltext, setFulltext] = useState(
    "Это семейство хищных млекопитающих, включающее более 30 видов. Они обитают в различных регионах мира, включая Африку, Азию и Южную Европу. Монгусты играют важную роль в экосистеме и оказывают положительное влияние на окружающую среду. Вот некоторые особенности и их вклад в экологию: Регуляция численности популяции добычи: Монгусты являются активными хищниками, питающимися разнообразными добычами, включая насекомых, грызунов и ящериц. Они помогают контролировать численность этих популяций, предотвращая их избыточное размножение и возможные экологические последствия. Распространение растений: Монгусты играют важную роль в распространении семян растений. Они поглощают фрукты и ягоды, а затем распространяют семена через свои фекалии."
  );
  const [fulltext2, setFulltext2] = useState(
    "Этот процесс способствует разнообразию растений в экосистеме и помогает сохранять биологическое разнообразие. Взаимодействие с другими видами: Монгусты могут вступать в различные взаимодействия с другими видами животных и растений. Например, они могут быть взаимодействующими видами с птицами или другими хищниками. Эти взаимодействия способствуют сложности экосистемы и ее устойчивости. Борьба с вредителями: Некоторые виды монгустов, такие как индийский монгуст, были введены в новые экосистемы для борьбы с вредителями, такими как змеи или крысы. Это позволяет контролировать популяции вредных организмов и снижает негативное воздействие на сельское хозяйство и биоразнообразие. В целом, монгусты являются важными составляющими экосистем, поддерживая баланс и разнообразие живых организмов. Их роль в распространении растений и контроле популяций вредителей делает их ценными участниками в поддержании здоровой экологии."
  );

  const create = useCallback(() => {
    const animalsData = {
      title: title,
      subtext: subtext,
      img: url,
      fulltext: fulltext,
      fulltext2: fulltext2,
    };
    dispatch(createAnimals(animalsData)).then(() => {
      dispatch(getAnimals());
      setModal(false);
    });
  }, [title, subtext, url, fulltext, fulltext2, dispatch]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        backdropFilter: "blur(10px)",
        top: "0",
        left: "-16px",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          border: "solid 1px black",
          padding: "30px",
          borderRadius: "10px",
        }}
        className="list"
      >
        <div className="flex justify-end mr-0.5 -mt-7">
          <div
            onClick={() => setModal(false)}
            className="flex justify-center gap-x-0.5 -mr-8 rounded-tr-lg hover:bg-red-700 w-9 -mt-0.5"
          >
            <p className="mt-1.5 text-lg text">
              <ion-icon name="close-sharp"></ion-icon>
            </p>
          </div>
        </div>
        <h4
          className="text-xl font-bold title"
          style={{ width: "97%", margin: "15px auto" }}
        >
          Add an animal card
        </h4>
        <div className="mb-5">
          <input
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            type="url"
            placeholder="Link to the picture of the animal"
            className="mb-3 mt-1 block w-full px-4 py-3 search border text-[#6B7280] border-[#434343] rounded-xl text-sm shadow-lg placeholder:text-[#4e4e4e] focus:outline-none focus:border-green-600 focus:ring-green-600"
          />
        </div>
        <div className="mb-5">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Name of the animal"
            className="mb-3 mt-1 block w-full px-4 py-3 search border text-[#6B7280] border-[#434343] rounded-xl text-sm shadow-lg placeholder:text-[#4e4e4e] focus:outline-none focus:border-green-600 focus:ring-green-600"
          />
        </div>
        <div className="mb-5">
          <textarea
              name="message"
              className="mb-3 mt-1 block w-full px-4 py-3 search border text-[#6B7280] border-[#434343] rounded-xl text-sm shadow-lg placeholder:text-[#4e4e4e] focus:outline-none focus:border-green-600 focus:ring-green-600 h-20"
              placeholder="About the animal"
              value={subtext}
              onChange={(e) => setSubtext(e.target.value)}
            ></textarea>
        </div>

        <div>
          <button
            className="hover:shadow-form w-full rounded-md bg-[#0aa245] hover:bg-green-700 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={create}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
