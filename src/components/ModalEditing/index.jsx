import React from "react";

function ModalEditing({
  animals,
  setTitle,
  setSubtext,
  title,
  subtext,
  Edit,
  Cancel,
}) {
  return (
    <div>
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
            border: "solid 1px black",
            borderRadius: "10px",
            background: "#1e1f1e",
          }}
          className="md:w-96 w-72 md:py-[30px] md:px-[30px] py-[16px] px-[18px] max-sm:pt-[16px] max-sm:h-96"
        >
          <div className="flex justify-end mr-0.5">
            <div
              onClick={Cancel}
              className="flex justify-center gap-x-0.5 md:-mr-8 -mr-5 md:-mt-7 -mt-4 rounded-tr-md hover:bg-red-700 md:w-9 w-5"
            >
              <p className="md:mt-1.5 mt-1 md:text-lg text-xs text-slate-300">
                <ion-icon name="close-sharp"></ion-icon>
              </p>
            </div>
          </div>
          <h4
            className="md:text-xl text-xs font-bold text-slate-300 mb-3"
            style={{ width: "97%", margin: "15px auto" }}
          >
            Add an animal card
          </h4>
          <img
            className="rounded-md w-full max-sm:h-52 h-32  object-cover"
            src={animals.img}
            alt={animals.title}
          />
          <div className="mb-5 md:mt-8 mt-2">
            <input
              type="text"
              className="form-input w-full bg-[#1e1f1e] max-sm:text-xs md:rounded-xl rounded-lg border border-[#434343] md:py-3 py-1 md:px-5 px-2 placeholder:text-[#4e4e4e] font-medium text-[#6B7280] outline-none focus:border-[#0aa245] focus:shadow-md"
              placeholder="Name of the animal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              className="block w-full md:px-4 px-2 md:py-3 py-1 max-sm:text-xs bg-[#1e1f1e] border text-[#6B7280] border-[#434343] rounded-xl text-sm shadow-sm placeholder:text-[#4e4e4e] focus:outline-none focus:border-green-600 focus:ring-green-600 md:h-20 h-16"
              placeholder="About the animal"
              value={subtext}
              onChange={(e) => setSubtext(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              className="hover:shadow-form w-full rounded-md bg-[#0aa245] md:py-3 py-2 px-8 text-center md:text-base text-xs font-semibold text-white outline-none"
              onClick={Edit}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditing;
