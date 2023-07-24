import React, { useEffect } from "react";

function LogOutModalWindow({ setModalWindow, handleLogout }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          backdropFilter: "blur(5px)",
          top: "0",
          left: "-16px",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="sm:w-96 w-60 sm:p-6 p-3 list"
          style={{
            border: "solid 1px black",
            borderRadius: "10px",
          }}
        >
          <div className="flex flex-col justify-center max-sm:gap-y-5 gap-y-3">
            <h1 className="font-bold text-xl text-center">Are you sure you want to get out?</h1>
            <div>
              <button
                className="hover:shadow-form w-full rounded-md bg-[#ae0d0d] max-sm:py-3 max-sm:px-8 py-1.5 text-center text-base font-semibold text-white outline-none"
                onClick={handleLogout}
              >
                Exit
              </button>
            </div>
            <div>
              <button
                onClick={() => setModalWindow(false)}
                className="hover:shadow-form w-full rounded-md bg-[#09923d] max-sm:py-3 max-sm:px-8 py-1.5 text-center text-base font-semibold text-white outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogOutModalWindow;
