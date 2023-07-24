import React from "react";

function Videos(props) {
  return (
    <div className="flex justify-center items-center py-20">
      <div>
        <iframe
          className="rounded-3xl border-8 border-[#1e1f1e] border-double"
          style={{ width: "578px", height: "332px" }}
          src="https://www.youtube.com/embed/GXjhzeEjSts"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h1 className="font-bold text-2xl mt-2 text-slate-400 ml-2">▽ Экологические проблемы планеты Земля</h1>
      </div>
    </div>
  );
}

export default Videos;
